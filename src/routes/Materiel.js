import React from "react";
import { motion } from "framer-motion";
import { Wrench, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Container, Section, Card, Button } from "../components/ui";

// Import des images
import complet from "../images/materiel-img/complet.jpg";
import concasseurGlace from "../images/materiel-img/concasseurGlace.webp";
import cuillereMelange from "../images/materiel-img/cuillereMelange.jpg";
import doseurAlcool from "../images/materiel-img/doseurAlcool.jpg";
import mixeur from "../images/materiel-img/mixeur.jpg";
import passoire from "../images/materiel-img/passoire.jpg";
import pilon from "../images/materiel-img/pilon.jpg";
import shaker from "../images/materiel-img/shaker.jpg";
import VerreDoseur from "../images/materiel-img/VerreDoseur.jpg";
import VerreMelangeur from "../images/materiel-img/VerreMelangeur.jpg";
import VerresCocktails from "../images/materiel-img/VerresCocktails.jpg";

const ustensiles = [
  {
    id: 1,
    name: "Shaker",
    image: shaker,
    description: "Le shaker est l'ustensile de base du barman. Il permet de mélanger tous les ingrédients et de servir les cocktails. Il permet également de frimer : prenez-vous pour un mixologue.",
    essential: true
  },
  {
    id: 2,
    name: "Verre à mélange",
    image: VerreMelangeur,
    description: "Il permet de préparer les cocktails qui ne doivent pas être secoués. Il est souvent gradué et peut parfois constituer la partie inférieure du shaker.",
    essential: true
  },
  {
    id: 3,
    name: "Cuillère à mélange",
    image: cuillereMelange,
    description: "Cette cuillère dispose d'un long manche pour pouvoir atteindre le fond du verre et bien mélanger tous les ingrédients. Plus aucun risque de s'en mettre plein les doigts !",
    essential: true
  },
  {
    id: 4,
    name: "Passoire à cocktails",
    image: passoire,
    description: "Ce petit ustensile très pratique permet d'empêcher les glaçons ou les morceaux de fruits de tomber dans le verre.",
    essential: true
  },
  {
    id: 5,
    name: "Doseur à alcool",
    image: doseurAlcool,
    description: "Oui vous pourriez doser votre alcool à l'oeil comme un vrai barman mais avant de devenir un pro, le doseur s'impose! Il permet d'ajouter la juste mesure d'alcool à ses cocktails.",
    essential: true
  },
  {
    id: 6,
    name: "Pilon",
    image: pilon,
    description: "C'est l'accessoire indispensable pour les fans de mojitos. Il sert à broyer les feuilles de menthe ou le citron.",
    essential: true
  },
  {
    id: 7,
    name: "Mixeur",
    image: mixeur,
    description: "Le mixeur est idéal pour préparer des cocktails mousseux et mixer ses ingrédients tous ensemble.",
    essential: false
  },
  {
    id: 8,
    name: "Verre doseur",
    image: VerreDoseur,
    description: "Ce petit bouchon dispose d'un bec qui permet à l'alcool de s'écouler lentement dans le verre.",
    essential: false
  },
  {
    id: 9,
    name: "Concasseur de glace",
    image: concasseurGlace,
    description: "Cet équipement est très pratique mais n'est pas vraiment indispensable. Pour réaliser des mojitos par exemple, on peut facilement broyer la glace manuellement.",
    essential: false
  }
];

function Materiel() {
  const essentiels = ustensiles.filter(item => item.essential);
  const optionnels = ustensiles.filter(item => !item.essential);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="pt-20 pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Wrench size={40} className="text-primary-400" />
                <h1 className="text-4xl lg:text-5xl font-heading text-gradient">
                  Ustensiles du Barman
                </h1>
              </div>
              
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Boire un cocktail en soirée est devenu incontournable. Pour être à la hauteur des barmen, 
                il faut déjà avoir le bon matériel. Mais alors, c'est quoi le must have du barman ?
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2 text-white/70">
                  <Star size={16} className="text-yellow-400" />
                  <span>Équipement professionnel de qualité</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Star size={16} className="text-yellow-400" />
                  <span>Ustensiles indispensables et optionnels</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Star size={16} className="text-yellow-400" />
                  <span>Conseils pour débuter la mixologie</span>
                </div>
              </div>

              <p className="text-white/70 text-lg">
                Pour être un bon barman, il n'est pas nécessaire d'avoir l'équipement au complet. 
                Avec les ustensiles de base et quelques ingrédients de qualité, tout le monde peut 
                réaliser ses propres cocktails. Après, la pratique fera tout !
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="overflow-hidden">
                <img 
                  src={complet} 
                  alt="Matériel à cocktail complet" 
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Ustensiles Essentiels */}
      <Section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-heading text-gradient mb-4">
              Ustensiles Essentiels
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Les outils indispensables pour commencer votre aventure en mixologie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {essentiels.map((ustensile, index) => (
              <motion.div
                key={ustensile.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={ustensile.image}
                      alt={ustensile.name}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3">
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Essentiel
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-body text-white mb-3">
                      {ustensile.name}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {ustensile.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Ustensiles Optionnels */}
      <Section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-heading text-gradient mb-4">
              Ustensiles Optionnels
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Pour perfectionner votre technique et impressionner vos invités
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optionnels.map((ustensile, index) => (
              <motion.div
                key={ustensile.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={ustensile.image}
                      alt={ustensile.name}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/10 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium border border-white/20">
                        Optionnel
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-body text-white mb-3">
                      {ustensile.name}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {ustensile.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section Verres */}
      <Section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Contenu */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-heading text-white mb-6">
                    Verres à Cocktail
                  </h2>
                  <p className="text-white/80 leading-relaxed mb-6 text-lg">
                    Évidemment, sans verre, pas de cocktail. Quand on est débutant, il n'est pas nécessaire 
                    de se lancer dans l'achat de toute la panoplie de verres à cocktails. Le tumbler est le plus 
                    passe-partout. Après, à vous de voir quels cocktails vous réalisez le plus souvent pour 
                    décider quels sont les verres dont vous avez le plus besoin.
                  </p>
                  
                  <Button
                    as={Link}
                    to="/verre"
                    variant="primary"
                    size="lg"
                    className="flex items-center gap-2 w-fit"
                  >
                    Découvrir les verres
                    <ArrowRight size={20} />
                  </Button>
                </div>

                {/* Image */}
                <div className="relative">
                  <img
                    src={VerresCocktails}
                    alt="Collection de verres à cocktail"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                </div>
              </div>
            </Card>
          </motion.div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}

export default Materiel;
