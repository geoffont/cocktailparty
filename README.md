# 🍹 CocktailParty

Application React de recherche de cocktails, construite avec l'API publique [TheCocktailDB](https://www.thecocktaildb.com/).

## Aperçu

CocktailParty permet d'explorer des milliers de recettes de cocktails : recherche par nom ou ingrédient, filtres par catégorie, type de verre ou type (alcoolisé / sans alcool), navigation par lettre, cocktail aléatoire, et fiche détaillée avec ingrédients et instructions.

## Fonctionnalités

- **Recherche** par nom de cocktail ou par ingrédient
- **Filtres** : catégorie, type de verre, alcoolisé / sans alcool
- **Navigation par lettre** (A → Z)
- **Cocktail aléatoire** depuis n'importe quelle page
- **Page détail** : tous les ingrédients avec mesures, instructions, instructions en français si disponibles, lien vidéo
- **Page ingrédient** : description, degré d'alcool, liste des cocktails associés
- Design dark responsive (mobile + desktop)

## Stack technique

- [React 18](https://reactjs.org/) + [React Router v6](https://reactrouter.com/)
- [MUI v5](https://mui.com/) (Material UI) avec thème dark personnalisé
- [Axios](https://axios-http.com/) pour les appels API
- [React Icons](https://react-icons.github.io/react-icons/)
- [TheCocktailDB API](https://www.thecocktaildb.com/api.php) (free tier, sans clé)

## Installation

```bash
cd cocktailparty
npm install
npm start
```

L'application tourne sur [http://localhost:3000](http://localhost:3000).

## Structure

```
cocktailparty/src/
  api/
    cocktailDB.js        # Tous les appels à TheCocktailDB
  theme/
    theme.js             # Thème MUI dark personnalisé
  components/
    Header.jsx
    Footer.jsx
    CocktailCard.jsx
  pages/
    Home.jsx             # Accueil : hero, catégories, alphabet
    Search.jsx           # Recherche avec filtres
    CocktailDetail.jsx   # Fiche cocktail complète
    IngredientDetail.jsx # Fiche ingrédient + cocktails associés
```

## API utilisée

TheCocktailDB — API gratuite, aucune clé requise.

| Endpoint | Usage |
|---|---|
| `search.php?s=` | Recherche par nom |
| `search.php?f=` | Navigation par lettre |
| `filter.php?i=` | Filtrer par ingrédient |
| `filter.php?c=` | Filtrer par catégorie |
| `filter.php?g=` | Filtrer par verre |
| `filter.php?a=` | Filtrer par type (alcoolisé…) |
| `lookup.php?i=` | Détail d'un cocktail |
| `random.php` | Cocktail aléatoire |
| `search.php?i=` | Détail d'un ingrédient |
