import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container, Box, Typography, Grid, CircularProgress,
  Button, Divider, Chip,
} from '@mui/material';
import { FaArrowLeft } from 'react-icons/fa';
import { searchIngredientByName, filterByIngredient } from '../api/cocktailDB';
import CocktailCard from '../components/CocktailCard';

export default function IngredientDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const ingredientName = decodeURIComponent(name);

  const [ingredient, setIngredient] = useState(null);
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const [ingRes, cocktailsRes] = await Promise.all([
          searchIngredientByName(ingredientName),
          filterByIngredient(ingredientName),
        ]);
        setIngredient(ingRes.data.ingredients?.[0] || null);
        setCocktails(cocktailsRes.data.drinks || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [ingredientName]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress color="primary" size={52} />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 5, px: { xs: 2, md: 4 } }}>
      <Button
        startIcon={<FaArrowLeft size={13} />}
        onClick={() => navigate(-1)}
        sx={{ color: 'text.secondary', mb: 4, '&:hover': { color: 'text.primary' } }}
      >
        Retour
      </Button>

      <Grid container spacing={5} sx={{ mb: 6 }}>
        {/* Ingredient image */}
        <Grid item xs={12} sm={4} md={3}>
          <Box
            component="img"
            src={`https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(ingredientName)}.png`}
            alt={ingredientName}
            sx={{ width: '100%', maxWidth: 220, display: 'block', mx: 'auto' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </Grid>

        {/* Ingredient info */}
        <Grid item xs={12} sm={8} md={9}>
          <Typography variant="h3" fontWeight={800} gutterBottom sx={{ color: 'primary.main' }}>
            {ingredientName}
          </Typography>

          {ingredient && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {ingredient.strType && (
                <Chip label={ingredient.strType} sx={{ bgcolor: 'background.paper', border: '1px solid #22223a' }} />
              )}
              {ingredient.strAlcohol === 'Yes' && (
                <Chip label="Alcoolisé" sx={{ bgcolor: 'rgba(232,184,109,0.1)', border: '1px solid', borderColor: 'primary.main', color: 'primary.main' }} />
              )}
              {ingredient.strABV && (
                <Chip label={`${ingredient.strABV}% ABV`} variant="outlined" sx={{ borderColor: '#22223a', color: 'text.secondary' }} />
              )}
            </Box>
          )}

          {ingredient?.strDescription && (
            <>
              <Divider sx={{ borderColor: '#22223a', mb: 2 }} />
              <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                {ingredient.strDescription.length > 800
                  ? `${ingredient.strDescription.slice(0, 800)}…`
                  : ingredient.strDescription}
              </Typography>
            </>
          )}
        </Grid>
      </Grid>

      {/* Cocktails with this ingredient */}
      {cocktails.length > 0 && (
        <>
          <Divider sx={{ borderColor: '#22223a', mb: 4 }} />
          <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
            Cocktails avec {ingredientName} ({cocktails.length})
          </Typography>
          <Grid container spacing={2.5}>
            {cocktails.map((cocktail) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={cocktail.idDrink}>
                <CocktailCard cocktail={cocktail} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}
