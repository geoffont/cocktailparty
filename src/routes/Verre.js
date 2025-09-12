import React from "react";
import { motion } from "framer-motion";
import { Glasses, Sparkles, Star, Award } from "lucide-react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Container, Section, Card } from "../components/ui";

// Import des images
import image1 from "../images/verres-img/tumbler.jpg";
import image2 from "../images/verres-img/margarita.jpg";
import image3 from "../images/verres-img/verreBallon.jpg";
import image4 from "../images/verres-img/flute.jpg";
import image5 from "../images/verres-img/tulipeHurricane.jpg";

const verres = [
  {
    id: 1,
    name: "Le Tumbler",
    image: image1,
    description: "Le tumbler est le verre le plus utilisé pour servir des cocktails. Long et fin, il possède des bords droits et permet de mettre beaucoup de glaçons dans une boisson. Il est idéal pour servir des Mojitos.",
    usage: "Mojitos, Cuba Libre, Caïpirinha",
    essential: true
  },
  {
    id: 2,
    name: "Le Verre à Margarita",
    image: image2,
    description: "Les margaritas sont traditionnellement servies dans une variante du verre à Martini : un verre avec un diamètre qui change de largeur au milieu du bol (un verre à 2 étages). Il permet de garder les boissons au frais, et leur contour est facilement \"glaçable\" (avec un peu de sel, du sucre...).",
    usage: "Margarita, Daiquiri, Cosmopolitan",
    essential: true
  },
  {
    id: 3,
    name: "Le Verre Ballon",
    image: image3,
    description: "Ce verre à pied relativement large est parfait pour les boissons à base de fruits et servi avec des glaçons. On l'utilise pour verser une sangria, une Piña Colada, un spritz...",
    usage: "Sangria, Piña Colada, Spritz",
    essential: false
  },
  {
    id: 4,
    name: "La Flûte",
    image: image4,
    description: "Son design allongé permet de préserver les bulles et la finesse de la boisson qui l'emplit. Souvent utilisée pour servir du champagne, la flûte peut également servir à présenter des cocktails à base de pétillants (tel du Prosecco).",
    usage: "Champagne Cocktails, Bellini, French 75",
    essential: false
  },
  {
    id: 5,
    name: "Le Tulipe Hurricane",
    image: image5,
    description: "Le nom de ce verre fait référence aux lampes vintage du même nom (les lampes Hurricane) et à sa forme particulière qui ressemble à une Tulipe. Ce verre est utilisé pour servir des long drinks glacés et souvent très colorés.",
    usage: "Hurricane, Long drinks colorés, Cocktails tropicaux",
    essential: false
  }
];

function Verre() {
  const essentiels = verres.filter(verre => verre.essential);
  const optionnels = verres.filter(verre => !verre.essential);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="pt-20 pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Glasses size={40} className="text-primary-400" />
              <h1 className="text-4xl lg:text-5xl font-heading text-gradient">
                Choix du Verre
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Alors que la décoration d'un cocktail peut faire une différence de taille lors d'un apéro, 
              le verre choisi pour le servir aussi ! Il est un facteur clé pour améliorer l'expérience de consommation.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 border border-white/20">
                <Sparkles size={16} className="text-yellow-400" />
                <span>Impact sur le goût</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 border border-white/20">
                <Star size={16} className="text-blue-400" />
                <span>Expérience visuelle</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 border border-white/20">
                <Award size={16} className="text-green-400" />
                <span>Tradition mixologique</span>
              </div>
            </div>
          </motion.div>
        </Container>
        
        {/* Decorative elements */}
        <div className="absolute top-10% left-5% w-20 h-20 bg-primary-500 opacity-20 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-10% right-5% w-28 h-28 bg-secondary-500 opacity-20 rounded-full filter blur-xl"></div>
      </Section>

      {/* Introduction Quote */}
      <Section className="py-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="max-w-4xl mx-auto p-8">
              <blockquote className="text-2xl text-white/90 italic leading-relaxed">
                "De nombreux cocktails doivent même leur nom à la forme du verre dans lequel ils sont servis..."
              </blockquote>
              <p className="text-white/60 mt-4">— Tradition de la mixologie</p>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Verres Essentiels */}
      <Section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-heading text-gradient mb-4">
              Verres Essentiels
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Les verres incontournables pour débuter votre collection
            </p>
          </motion.div>

          <div className="space-y-8">
            {essentiels.map((verre, index) => (
              <motion.div
                key={verre.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={verre.image}
                          alt={verre.name}
                          className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        
                        {/* Badge Essentiel */}
                        <div className="absolute top-4 right-4">
                          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Essentiel
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <h3 className="text-3xl font-heading text-white mb-4">
                        {verre.name}
                      </h3>
                      <p className="text-white/80 leading-relaxed mb-6 text-lg">
                        {verre.description}
                      </p>
                      
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-primary-400 font-medium mb-2">Idéal pour :</h4>
                        <p className="text-white/70">{verre.usage}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Verres Spécialisés */}
      <Section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-heading text-gradient mb-4">
              Verres Spécialisés
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Pour les cocktails spécifiques et les occasions particulières
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optionnels.map((verre, index) => (
              <motion.div
                key={verre.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={verre.image}
                      alt={verre.name}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/10 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium border border-white/20">
                        Spécialisé
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-body text-white mb-3">
                      {verre.name}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-4">
                      {verre.description}
                    </p>
                    
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-accent-400 font-medium text-sm mb-1">Utilisation :</h4>
                      <p className="text-white/60 text-sm">{verre.usage}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}

export default Verre;
