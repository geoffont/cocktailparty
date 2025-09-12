import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, AlertCircle } from "lucide-react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import CocktailList from "../CocktailList/CocktailList";
import { Button, Input, Container } from "../ui";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const searchDrinks = async () => {
    if (!query.trim()) {
      toast.error("Veuillez entrer un terme de recherche");
      return;
    }

    setLoading(true);
    setHasSearched(true);
    
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
      const response = await axios.get(url);
      
      if (response.data.drinks) {
        setDrinks(response.data.drinks);
        toast.success(`${response.data.drinks.length} cocktail(s) trouvé(s) !`);
      } else {
        setDrinks([]);
        toast.error("Aucun cocktail trouvé pour cette recherche");
      }
    } catch (error) {
      console.error('Erreur de recherche:', error);
      toast.error("Erreur de connexion au serveur");
      setDrinks([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchDrinks();
  };

  const clearSearch = () => {
    setQuery("");
    setDrinks([]);
    setHasSearched(false);
  };

  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Search Form */}
          <div className="glass-effect p-8 mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Recherchez un cocktail ou un ingrédient..."
                  className="pr-12 text-lg py-4"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {loading ? (
                    <Loader2 size={20} className="text-white animate-spin" />
                  ) : (
                    <Search size={20} className="text-white/60" />
                  )}
                </button>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  type="submit"
                  loading={loading}
                  disabled={!query.trim()}
                  className="min-w-[140px]"
                >
                  {loading ? "Recherche..." : "Rechercher"}
                </Button>
                
                {(hasSearched || drinks.length > 0) && (
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={clearSearch}
                  >
                    Effacer
                  </Button>
                )}
              </div>
            </form>
          </div>

          {/* Search Results */}
          <AnimatePresence mode="wait">
            {loading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <Loader2 size={48} className="text-primary-400 animate-spin mx-auto mb-4" />
                <p className="text-white/70 text-lg">Recherche en cours...</p>
              </motion.div>
            )}

            {!loading && hasSearched && drinks.length === 0 && (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-12"
              >
                <AlertCircle size={48} className="text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-body text-white mb-2">
                  Aucun résultat trouvé
                </h3>
                <p className="text-white/70 mb-6">
                  Essayez avec un autre terme de recherche ou vérifiez l'orthographe.
                </p>
                <Button onClick={clearSearch} variant="secondary">
                  Nouvelle recherche
                </Button>
              </motion.div>
            )}

            {!loading && drinks.length > 0 && (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-body text-white mb-2">
                    {drinks.length} cocktail{drinks.length > 1 ? 's' : ''} trouvé{drinks.length > 1 ? 's' : ''}
                  </h3>
                  <p className="text-white/70">
                    Cliquez sur une carte pour voir les détails
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {drinks.map((drink, index) => (
                    <motion.div
                      key={drink.idDrink}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <CocktailList
                        name={drink.strDrink}
                        glass={drink.strGlass}
                        picture={drink.strDrinkThumb}
                        ingredient={drink.strIngredient1}
                        ingredient2={drink.strIngredient2}
                        ingredient3={drink.strIngredient3}
                        ingredient4={drink.strIngredient4}
                        recette={drink.strInstructions}
                        category={drink.strCategory}
                        alcoholic={drink.strAlcoholic}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </>
  );
}

export default SearchBar;
