import { Card, CardMedia, CardContent, CardActionArea, Typography, Chip, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CocktailCard({ cocktail }) {
  const navigate = useNavigate();
  const { idDrink, strDrink, strDrinkThumb, strCategory, strAlcoholic, strGlass } = cocktail;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 40px rgba(232,184,109,0.12)',
          borderColor: 'rgba(232,184,109,0.3)',
        },
      }}
    >
      <CardActionArea
        onClick={() => navigate(`/cocktail/${idDrink}`)}
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
      >
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          <CardMedia
            component="img"
            image={strDrinkThumb || '/placeholder.png'}
            alt={strDrink}
            sx={{ height: 210, objectFit: 'cover', transition: 'transform 0.3s ease', '.MuiCardActionArea-root:hover &': { transform: 'scale(1.04)' } }}
          />
          {strAlcoholic && (
            <Chip
              label={strAlcoholic}
              size="small"
              sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                bgcolor: strAlcoholic === 'Non alcoholic' ? 'secondary.main' : 'rgba(13,13,20,0.85)',
                color: '#fff',
                backdropFilter: 'blur(6px)',
                fontSize: '0.7rem',
                fontWeight: 600,
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            />
          )}
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          <Typography variant="subtitle1" fontWeight={700} gutterBottom noWrap title={strDrink}>
            {strDrink}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {strCategory && (
              <Chip
                label={strCategory}
                size="small"
                variant="outlined"
                sx={{ borderColor: 'rgba(232,184,109,0.4)', color: 'primary.main', fontSize: '0.68rem' }}
              />
            )}
            {strGlass && (
              <Chip
                label={strGlass}
                size="small"
                variant="outlined"
                sx={{ borderColor: '#22223a', color: 'text.secondary', fontSize: '0.68rem' }}
              />
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
