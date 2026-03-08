import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import App from './App';
import Home from './pages/Home';
import Search from './pages/Search';
import CocktailDetail from './pages/CocktailDetail';
import IngredientDetail from './pages/IngredientDetail';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'search', element: <Search /> },
      { path: 'cocktail/:id', element: <CocktailDetail /> },
      { path: 'ingredient/:name', element: <IngredientDetail /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
