import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shuffle, Coffee, Star } from "lucide-react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CocktailList from "../components/CocktailList/CocktailList";
import { Button, Container, Section, Card } from "../components/ui";
import axios from "axios";
import toast from 'react-hot-toast';
import image from "../images/barman-img/barman.jpg";

const drinksInitial = [
  {
    strAlcoholic: "Alcoholic",
    strDrink: "Margarita",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    strIBA: "Contemporary Classics",
    strImageAttribution: "Cocktailmarler",
    strImageSource:
      "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
    strIngredient1: "Tequila",
    strIngredient2: "Triple sec",
    strIngredient3: "Lime juice",
    strIngredient4: "Salt",
    strIngredient5: null,
    strVideo: null,
    strInstructions:
      "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  },
];

function Barman() {
  const [drinkState, setDrinkState] = useState(drinksInitial);
  const [loading, setLoading] = useState(false);

  const getDrink = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
      if (response.data?.drinks) {
        setDrinkState(response.data.drinks);
        toast.success("🍸 Nouveau cocktail découvert !");
      }
    } catch (error) {
      console.error('Erreur lors de la récupération du cocktail:', error);
      toast.error("Erreur lors du chargement du cocktail");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="pt-20 pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Coffee size={32} className="text-primary-400" />
                <span className="text-primary-400 font-medium">Votre Barman Personnel</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-heading text-gradient mb-6">
                Le Cocktail du Jour
              </h1>
              
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Laissez-moi vous surprendre avec une sélection aléatoire de cocktails 
                extraordinaires. Chaque jour, une nouvelle découverte vous attend !
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/60">
                  <Star size={16} className="text-yellow-400" />
                  <span>Recettes authentiques</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Shuffle size={16} className="text-blue-400" />
                  <span>Sélection aléatoire</span>
                </div>
              </div>
              
              <Button
                onClick={getDrink}
                loading={loading}
                disabled={loading}
                size="lg"
                className="flex items-center gap-2"
              >
                <Shuffle size={20} />
                {loading ? "Découverte en cours..." : "Découvrir un cocktail"}
              </Button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Card className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={image} 
                    alt="Barman professionnel" 
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-body text-white mb-2">
                      Expert en Mixologie
                    </h3>
                    <p className="text-white/80">
                      Plus de 10 ans d'expérience dans l'art du cocktail
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Cocktails Section */}
      <Section className="py-16">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={drinkState[0]?.strDrink}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              {drinkState.map((drink, index) => (
                <CocktailList
                  key={`${drink.strDrink}-${index}`}
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
              ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}

export default Barman;
