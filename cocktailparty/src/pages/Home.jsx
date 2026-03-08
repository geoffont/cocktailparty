import { useState, useEffect } from 'react';
import {
  Box, Container, Typography, Button, Grid, Chip,
  CircularProgress, TextField, InputAdornment,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaRandom, FaDice } from 'react-icons/fa';
import { MdLocalBar } from 'react-icons/md';
import {
  listCategories, listAlcoholic, filterByCategory, getRandomCocktail,
} from '../api/cocktailDB';
import CocktailCard from '../components/CocktailCard';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const [alcoholicTypes, setAlcoholicTypes] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loadingFeatured, setLoadingFeatured] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const [catRes, alcRes, featRes] = await Promise.all([
          listCategories(),
          listAlcoholic(),
          filterByCategory('Cocktail'),
        ]);
        setCategories(catRes.data.drinks || []);
        setAlcoholicTypes(alcRes.data.drinks || []);
        setFeatured((featRes.data.drinks || []).slice(0, 8));
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingFeatured(false);
      }
    };
    init();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const goRandom = async () => {
    try {
      const res = await getRandomCocktail();
      navigate(`/cocktail/${res.data.drinks[0].idDrink}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        sx={{
          minHeight: '72vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        {/* Ambient glow */}
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(232,184,109,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Box sx={{ position: 'absolute', top: -100, left: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,92,191,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1, px: { xs: 3, md: 4 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Box sx={{ p: 2, borderRadius: '50%', bgcolor: 'rgba(232,184,109,0.1)', border: '1px solid rgba(232,184,109,0.2)' }}>
              <MdLocalBar size={36} color="#e8b86d" />
            </Box>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' },
              background: 'linear-gradient(135deg, #e8b86d 0%, #f5d08a 50%, #c49040 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Découvrez votre cocktail parfait
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ mb: 5, fontWeight: 400, maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}>
            Des milliers de recettes, ingrédients et techniques à portée de main
          </Typography>

          {/* Search bar */}
          <Box
            component="form"
            onSubmit={handleSearch}
            sx={{ display: 'flex', gap: 1.5, maxWidth: 580, mx: 'auto', mb: 3 }}
          >
            <TextField
              fullWidth
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Mojito, Whisky Sour, vodka..."
              variant="outlined"
              sx={{ bgcolor: 'background.paper', borderRadius: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaSearch color="#7a7a9a" size={15} />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ px: 3, whiteSpace: 'nowrap' }}
            >
              Chercher
            </Button>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              onClick={goRandom}
              variant="outlined"
              startIcon={<FaRandom size={13} />}
              sx={{ borderColor: 'primary.main', color: 'primary.main', '&:hover': { bgcolor: 'rgba(232,184,109,0.08)' } }}
            >
              Cocktail aléatoire
            </Button>
            <Button
              onClick={() => navigate('/search')}
              variant="outlined"
              startIcon={<FaDice size={13} />}
              sx={{ borderColor: '#22223a', color: 'text.secondary', '&:hover': { borderColor: 'primary.main', color: 'primary.main' } }}
            >
              Tous les cocktails
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── Content ── */}
      <Container maxWidth="xl" sx={{ py: 7, px: { xs: 2, md: 4 } }}>

        {/* Categories */}
        <Box sx={{ mb: 7 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 1 }}>
            Catégories
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Explorez par type de cocktail
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {categories.map((cat) => (
              <Chip
                key={cat.strCategory}
                label={cat.strCategory}
                clickable
                onClick={() => navigate(`/search?category=${encodeURIComponent(cat.strCategory)}`)}
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid #22223a',
                  color: 'text.primary',
                  fontSize: '0.88rem',
                  py: 2.5,
                  px: 0.5,
                  '&:hover': { bgcolor: 'primary.main', color: '#0d0d14', borderColor: 'primary.main', transform: 'translateY(-2px)' },
                  transition: 'all 0.15s ease',
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Alcoholic types */}
        <Box sx={{ mb: 7 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 1 }}>
            Type
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Alcoolisé ou sans alcool
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {alcoholicTypes.map((type) => (
              <Chip
                key={type.strAlcoholic}
                label={type.strAlcoholic}
                clickable
                onClick={() => navigate(`/search?alcoholic=${encodeURIComponent(type.strAlcoholic)}`)}
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid #22223a',
                  color: 'text.primary',
                  fontSize: '0.88rem',
                  py: 2.5,
                  px: 0.5,
                  '&:hover': { bgcolor: 'secondary.main', color: '#fff', borderColor: 'secondary.main', transform: 'translateY(-2px)' },
                  transition: 'all 0.15s ease',
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Featured cocktails */}
        <Box sx={{ mb: 7 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 1 }}>
            Cocktails populaires
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Sélection de cocktails classiques
          </Typography>
          {loadingFeatured ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
              <CircularProgress color="primary" />
            </Box>
          ) : (
            <>
              <Grid container spacing={2.5}>
                {featured.map((cocktail) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={cocktail.idDrink}>
                    <CocktailCard cocktail={cocktail} />
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Button
                  variant="outlined"
                  onClick={() => navigate('/search?category=Cocktail')}
                  sx={{ borderColor: '#22223a', color: 'text.secondary', '&:hover': { borderColor: 'primary.main', color: 'primary.main' } }}
                >
                  Voir tous les cocktails →
                </Button>
              </Box>
            </>
          )}
        </Box>

        {/* Browse by letter */}
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 1 }}>
            Par lettre
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Parcourir l'alphabet
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {LETTERS.map((letter) => (
              <Button
                key={letter}
                variant="outlined"
                size="small"
                onClick={() => navigate(`/search?letter=${letter}`)}
                sx={{
                  minWidth: 44,
                  height: 44,
                  p: 0,
                  fontWeight: 700,
                  borderColor: '#22223a',
                  color: 'text.secondary',
                  '&:hover': { borderColor: 'primary.main', color: 'primary.main', bgcolor: 'rgba(232,184,109,0.06)' },
                }}
              >
                {letter}
              </Button>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
