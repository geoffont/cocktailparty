import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container, Box, Typography, Grid, Chip, CircularProgress,
  Button, Divider,
} from '@mui/material';
import { FaArrowLeft, FaRandom, FaWineGlass, FaPlayCircle } from 'react-icons/fa';
import { getCocktailById, getRandomCocktail, extractIngredients } from '../api/cocktailDB';

export default function CocktailDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await getCocktailById(id);
        setCocktail(res.data.drinks?.[0] || null);
      } catch (e) {
        setError('Impossible de charger ce cocktail.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const goRandom = async () => {
    try {
      const res = await getRandomCocktail();
      navigate(`/cocktail/${res.data.drinks[0].idDrink}`);
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress color="primary" size={52} />
      </Box>
    );
  }

  if (error || !cocktail) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5" color="error.main">{error || 'Cocktail introuvable'}</Typography>
        <Button onClick={() => navigate(-1)} sx={{ mt: 2 }}>← Retour</Button>
      </Container>
    );
  }

  const ingredients = extractIngredients(cocktail);
  const tags = cocktail.strTags ? cocktail.strTags.split(',').map((t) => t.trim()).filter(Boolean) : [];

  return (
    <Container maxWidth="lg" sx={{ py: 5, px: { xs: 2, md: 4 } }}>
      {/* Top nav */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
        <Button
          startIcon={<FaArrowLeft size={13} />}
          onClick={() => navigate(-1)}
          sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
        >
          Retour
        </Button>
        <Button
          startIcon={<FaRandom size={13} />}
          onClick={goRandom}
          variant="outlined"
          sx={{ borderColor: '#22223a', color: 'text.secondary', '&:hover': { borderColor: 'primary.main', color: 'primary.main' } }}
        >
          Aléatoire
        </Button>
      </Box>

      <Grid container spacing={{ xs: 4, md: 6 }}>
        {/* ── Left: image + meta ── */}
        <Grid item xs={12} md={5}>
          <Box sx={{ position: { md: 'sticky' }, top: 100 }}>
            <Box
              component="img"
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              sx={{
                width: '100%',
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                display: 'block',
                mb: 2.5,
              }}
            />

            {/* Chips */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {cocktail.strCategory && (
                <Chip
                  label={cocktail.strCategory}
                  clickable
                  onClick={() => navigate(`/search?category=${encodeURIComponent(cocktail.strCategory)}`)}
                  sx={{ bgcolor: 'rgba(232,184,109,0.1)', border: '1px solid', borderColor: 'primary.main', color: 'primary.main', fontWeight: 600 }}
                />
              )}
              {cocktail.strAlcoholic && (
                <Chip
                  label={cocktail.strAlcoholic}
                  clickable
                  onClick={() => navigate(`/search?alcoholic=${encodeURIComponent(cocktail.strAlcoholic)}`)}
                  sx={{ bgcolor: 'rgba(124,92,191,0.1)', border: '1px solid', borderColor: 'secondary.main', color: 'secondary.main', fontWeight: 600 }}
                />
              )}
              {tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ borderColor: '#22223a', color: 'text.secondary' }} />
              ))}
            </Box>
          </Box>
        </Grid>

        {/* ── Right: details ── */}
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={800} gutterBottom sx={{ color: 'primary.main', lineHeight: 1.2 }}>
            {cocktail.strDrink}
          </Typography>

          {cocktail.strGlass && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4, color: 'text.secondary' }}>
              <FaWineGlass size={14} />
              <Typography>{cocktail.strGlass}</Typography>
            </Box>
          )}

          <Divider sx={{ borderColor: '#22223a', mb: 3 }} />

          {/* Ingredients */}
          <Typography variant="h5" fontWeight={700} gutterBottom sx={{ mb: 2 }}>
            Ingrédients
          </Typography>
          <Box sx={{ mb: 4 }}>
            {ingredients.map(({ ingredient, measure }, i) => (
              <Box
                key={i}
                onClick={() => navigate(`/ingredient/${encodeURIComponent(ingredient)}`)}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 1.5,
                  px: 2,
                  mb: 1,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  border: '1px solid #22223a',
                  cursor: 'pointer',
                  '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(232,184,109,0.04)' },
                  transition: 'border-color 0.15s, background-color 0.15s',
                }}
              >
                <Typography fontWeight={500}>{ingredient}</Typography>
                {measure && (
                  <Typography color="primary.main" fontWeight={600} fontSize="0.9rem">
                    {measure}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>

          <Divider sx={{ borderColor: '#22223a', mb: 3 }} />

          {/* Instructions */}
          <Typography variant="h5" fontWeight={700} gutterBottom sx={{ mb: 2 }}>
            Préparation
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.9, whiteSpace: 'pre-line', mb: 3 }}>
            {cocktail.strInstructions}
          </Typography>

          {/* French instructions */}
          {cocktail.strInstructionsFR && (
            <>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                En français
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.9, mb: 3 }}>
                {cocktail.strInstructionsFR}
              </Typography>
            </>
          )}

          {/* Video */}
          {cocktail.strVideo && (
            <Button
              href={cocktail.strVideo}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="primary"
              startIcon={<FaPlayCircle />}
            >
              Voir la vidéo
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
