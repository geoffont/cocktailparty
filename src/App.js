import React from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Award } from "lucide-react";
import Header from "./components/header/Header";
import SearchBar from "./components/search/Search";
import Footer from "./components/footer/Footer";
import { Card, Container, Section } from "./components/ui";
import "./App.css";

const features = [
  {
    icon: Sparkles,
    title: "Recettes Authentiques",
    description: "Découvrez des milliers de recettes de cocktails classiques et modernes"
  },
  {
    icon: TrendingUp,
    title: "Tendances",
    description: "Restez à jour avec les dernières tendances en mixologie"
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Des conseils de professionnels pour perfectionner votre art"
  }
];

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="app-hero">
        <Container>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="app-hero-content"
            >
              <h1 className="app-hero-title">
                L'Art du Cocktail
              </h1>
              <p className="app-hero-subtitle">
                Découvrez, apprenez et maîtrisez l'art de la mixologie avec notre collection de recettes, 
                conseils et techniques professionnelles.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="app-hero-badges"
              >
                <span className="app-hero-badge">
                  🍸 Plus de 1000 recettes
                </span>
                <span className="app-hero-badge">
                  📖 Guides complets
                </span>
                <span className="app-hero-badge">
                  🥃 Techniques pro
                </span>
              </motion.div>
            </motion.div>
          </div>
        </Container>
        
        {/* Decorative elements */}
        <div className="app-hero-bg-1"></div>
        <div className="app-hero-bg-2"></div>
      </Section>

      {/* Search Section */}
      <Section className="app-search-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="app-search-title">
              Trouvez votre cocktail parfait
            </h2>
            <p className="app-search-subtitle">
              Recherchez parmi notre vaste collection de cocktails par nom ou ingrédient
            </p>
          </motion.div>
          
          <SearchBar />
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="app-features-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="app-features-title">
              Pourquoi choisir Cocktail Party ?
            </h2>
            <p className="app-features-subtitle">
              Votre destination complète pour tout ce qui concerne les cocktails
            </p>
          </motion.div>
          
          <div className="app-features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Card className="app-feature-card">
                    <div className="app-feature-icon">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="app-feature-title">
                      {feature.title}
                    </h3>
                    <p className="app-feature-description">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}

export default App;
