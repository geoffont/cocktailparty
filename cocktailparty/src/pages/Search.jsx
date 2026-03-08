import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Container, Typography, Box, TextField, Button, Grid,
  CircularProgress, Tabs, Tab, Chip, Select, MenuItem,
  FormControl, InputLabel, Alert, InputAdornment,
} from '@mui/material';
import { FaSearch, FaTimes } from 'react-icons/fa';
import {
  searchByName, searchByLetter, filterByIngredient,
  filterByCategory, filterByGlass, filterByAlcoholic,
  listCategories, listGlasses, listAlcoholic,
} from '../api/cocktailDB';
import CocktailCard from '../components/CocktailCard';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState('');
  const [searchMode, setSearchMode] = useState('name');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const [categories, setCategories] = useState([]);
  const [glasses, setGlasses] = useState([]);
  const [alcoholicTypes, setAlcoholicTypes] = useState([]);

  // Load filter options once
  useEffect(() => {
    Promise.all([listCategories(), listGlasses(), listAlcoholic()])
      .then(([c, g, a]) => {
        setCategories(c.data.drinks || []);
        setGlasses(g.data.drinks || []);
        setAlcoholicTypes(a.data.drinks || []);
      })
      .catch(console.error);
  }, []);

  // Run search whenever URL params change
  useEffect(() => {
    const q = searchParams.get('q');
    const category = searchParams.get('category');
    const glass = searchParams.get('glass');
    const alcoholic = searchParams.get('alcoholic');
    const letter = searchParams.get('letter');
    const mode = searchParams.get('mode');

    if (q) setQuery(q);
    if (mode === 'ingredient') setSearchMode('ingredient');

    const hasAny = q || category || glass || alcoholic || letter;
    if (!hasAny) return;

    const doSearch = async () => {
      setLoading(true);
      setError('');
      setHasSearched(true);
      try {
        let res;
        if (letter) {
          res = await searchByLetter(letter.toLowerCase());
        } else if (category) {
          res = await filterByCategory(category);
        } else if (glass) {
          res = await filterByGlass(glass);
        } else if (alcoholic) {
          res = await filterByAlcoholic(alcoholic);
        } else if (q) {
          res = mode === 'ingredient'
            ? await filterByIngredient(q)
            : await searchByName(q);
        }
        setResults(res?.data?.drinks || []);
      } catch (e) {
        setError('Erreur lors de la recherche. Veuillez réessayer.');
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    doSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    const params = { q: query.trim() };
    if (searchMode === 'ingredient') params.mode = 'ingredient';
    setSearchParams(params);
  };

  const applyFilter = (type, value) => {
    if (!value) {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete(type);
      // Clear other filters — one active filter at a time
      setSearchParams({ [type]: undefined, ...Object.fromEntries(newParams) });
      return;
    }
    // Filter overrides text search
    setQuery('');
    setSearchParams({ [type]: value });
  };

  const clearAll = () => {
    setQuery('');
    setResults([]);
    setHasSearched(false);
    setSearchParams({});
  };

  const activeCategory = searchParams.get('category') || '';
  const activeGlass = searchParams.get('glass') || '';
  const activeAlcoholic = searchParams.get('alcoholic') || '';
  const activeLetter = searchParams.get('letter') || '';
  const hasActiveFilter = activeCategory || activeGlass || activeAlcoholic || activeLetter;

  return (
    <Container maxWidth="xl" sx={{ py: 5, px: { xs: 2, md: 4 } }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
        Rechercher un cocktail
      </Typography>

      {/* Search input */}
      <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
        <TextField
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchMode === 'ingredient' ? 'Vodka, citron, sirop...' : 'Mojito, Daiquiri, Cosmopolitan...'}
          sx={{ bgcolor: 'background.paper', borderRadius: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch color="#7a7a9a" size={15} />
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ px: 3, whiteSpace: 'nowrap' }}>
          Rechercher
        </Button>
      </Box>

      {/* Search mode tabs */}
      <Tabs
        value={searchMode}
        onChange={(_, v) => setSearchMode(v)}
        sx={{
          mb: 3,
          '& .MuiTab-root': { color: 'text.secondary', textTransform: 'none', fontWeight: 500 },
          '& .Mui-selected': { color: 'primary.main' },
          '& .MuiTabs-indicator': { bgcolor: 'primary.main' },
        }}
      >
        <Tab value="name" label="Par nom de cocktail" />
        <Tab value="ingredient" label="Par ingrédient" />
      </Tabs>

      {/* Filters row */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: hasActiveFilter ? 2 : 4, alignItems: 'center' }}>
        <FormControl size="small" sx={{ minWidth: 170 }}>
          <InputLabel sx={{ color: 'text.secondary' }}>Catégorie</InputLabel>
          <Select
            value={activeCategory}
            label="Catégorie"
            onChange={(e) => applyFilter('category', e.target.value)}
            sx={{ bgcolor: 'background.paper' }}
          >
            <MenuItem value="">Toutes</MenuItem>
            {categories.map((c) => (
              <MenuItem key={c.strCategory} value={c.strCategory}>{c.strCategory}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 170 }}>
          <InputLabel sx={{ color: 'text.secondary' }}>Verre</InputLabel>
          <Select
            value={activeGlass}
            label="Verre"
            onChange={(e) => applyFilter('glass', e.target.value)}
            sx={{ bgcolor: 'background.paper' }}
          >
            <MenuItem value="">Tous</MenuItem>
            {glasses.map((g) => (
              <MenuItem key={g.strGlass} value={g.strGlass}>{g.strGlass}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 170 }}>
          <InputLabel sx={{ color: 'text.secondary' }}>Type</InputLabel>
          <Select
            value={activeAlcoholic}
            label="Type"
            onChange={(e) => applyFilter('alcoholic', e.target.value)}
            sx={{ bgcolor: 'background.paper' }}
          >
            <MenuItem value="">Tous</MenuItem>
            {alcoholicTypes.map((a) => (
              <MenuItem key={a.strAlcoholic} value={a.strAlcoholic}>{a.strAlcoholic}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {(hasActiveFilter || hasSearched) && (
          <Button
            onClick={clearAll}
            startIcon={<FaTimes size={12} />}
            sx={{ color: 'text.secondary', '&:hover': { color: 'error.main' } }}
          >
            Effacer
          </Button>
        )}
      </Box>

      {/* Active filter chips */}
      {hasActiveFilter && (
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
          {activeCategory && (
            <Chip label={`Catégorie : ${activeCategory}`} onDelete={() => applyFilter('category', '')} color="primary" size="small" />
          )}
          {activeGlass && (
            <Chip label={`Verre : ${activeGlass}`} onDelete={() => applyFilter('glass', '')} color="primary" size="small" />
          )}
          {activeAlcoholic && (
            <Chip label={`Type : ${activeAlcoholic}`} onDelete={() => applyFilter('alcoholic', '')} color="secondary" size="small" />
          )}
          {activeLetter && (
            <Chip label={`Lettre : ${activeLetter}`} onDelete={() => applyFilter('letter', '')} color="primary" size="small" />
          )}
        </Box>
      )}

      {/* Error */}
      {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

      {/* Results */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
          <CircularProgress color="primary" size={48} />
        </Box>
      ) : results.length > 0 ? (
        <>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            {results.length} résultat{results.length > 1 ? 's' : ''}
          </Typography>
          <Grid container spacing={2.5}>
            {results.map((cocktail) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={cocktail.idDrink}>
                <CocktailCard cocktail={cocktail} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : hasSearched ? (
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>Aucun résultat</Typography>
          <Typography color="text.secondary">Essayez avec d'autres termes ou filtres</Typography>
        </Box>
      ) : (
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom color="text.secondary">
            Qu'est-ce que vous cherchez ?
          </Typography>
          <Typography color="text.secondary">
            Tapez un nom, un ingrédient, ou utilisez les filtres ci-dessus
          </Typography>
        </Box>
      )}
    </Container>
  );
}
