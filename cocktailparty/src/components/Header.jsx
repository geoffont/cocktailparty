import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, useMediaQuery, useTheme } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaRandom } from 'react-icons/fa';
import { MdLocalBar } from 'react-icons/md';
import { getRandomCocktail } from '../api/cocktailDB';

export default function Header() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const goRandom = async () => {
    try {
      const res = await getRandomCocktail();
      navigate(`/cocktail/${res.data.drinks[0].idDrink}`);
      setDrawerOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(13,13,20,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ maxWidth: 1280, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
        {/* Logo */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'primary.main',
            flexGrow: 1,
            textDecoration: 'none',
          }}
        >
          <MdLocalBar size={24} />
          <Typography variant="h6" fontWeight={800} letterSpacing="-0.02em">
            CocktailParty
          </Typography>
        </Box>

        {isMobile ? (
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'text.primary' }}>
            <FaBars />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Button component={Link} to="/search" color="inherit" sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
              Rechercher
            </Button>
            <Button
              component={Link}
              to="/search?alcoholic=Alcoholic"
              color="inherit"
              sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
            >
              Alcoolisés
            </Button>
            <Button
              component={Link}
              to="/search?alcoholic=Non_Alcoholic"
              color="inherit"
              sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
            >
              Sans alcool
            </Button>
            <Button
              onClick={goRandom}
              variant="contained"
              color="primary"
              startIcon={<FaRandom size={13} />}
              sx={{ ml: 1 }}
            >
              Aléatoire
            </Button>
          </Box>
        )}
      </Toolbar>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { bgcolor: 'background.default', width: 260, p: 2, borderLeft: '1px solid', borderColor: 'divider' } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.secondary' }}>
            <FaTimes />
          </IconButton>
        </Box>
        <List>
          {[
            { label: 'Accueil', to: '/' },
            { label: 'Rechercher', to: '/search' },
            { label: 'Alcoolisés', to: '/search?alcoholic=Alcoholic' },
            { label: 'Sans alcool', to: '/search?alcoholic=Non_Alcoholic' },
          ].map(({ label, to }) => (
            <ListItem key={label} disablePadding>
              <ListItemButton component={Link} to={to} onClick={() => setDrawerOpen(false)}
                sx={{ borderRadius: 2, color: 'text.primary', '&:hover': { bgcolor: 'rgba(232,184,109,0.08)' } }}
              >
                {label}
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 1 }}>
            <ListItemButton onClick={goRandom}
              sx={{ borderRadius: 2, bgcolor: 'primary.main', color: '#0d0d14', fontWeight: 700, '&:hover': { bgcolor: 'primary.light' } }}
            >
              <FaRandom style={{ marginRight: 8 }} /> Cocktail aléatoire
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
