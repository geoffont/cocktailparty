import { Box, Container, Typography, Link } from '@mui/material';
import { MdLocalBar } from 'react-icons/md';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.main' }}>
            <MdLocalBar size={20} />
            <Typography fontWeight={700}>CocktailParty</Typography>
          </Box>
          <Typography variant="caption" color="text.secondary">
            Données fournies par{' '}
            <Link href="https://www.thecocktaildb.com" target="_blank" rel="noopener" sx={{ color: 'primary.main' }}>
              TheCocktailDB
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
