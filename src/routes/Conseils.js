import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Lightbulb, TrendingUp, CheckCircle } from "lucide-react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Container, Section, Card } from "../components/ui";

// Import des images
import Img1 from "../images/conseils-img/Img1.jpg";
import Img2 from "../images/conseils-img/Img2.jpg";
import Img3 from "../images/conseils-img/Img3.jpg";
import Img4 from "../images/conseils-img/Img4.jpg";
import Img5 from "../images/conseils-img/Img5.jpg";
import Img6 from "../images/conseils-img/Img6.jpg";
import Img7 from "../images/conseils-img/Img7.jpg";
import Img8 from "../images/conseils-img/Img8.jpg";
import Img9 from "../images/conseils-img/Img9.jpg";
import Img10 from "../images/conseils-img/Img10.jpg";

const conseils = [
  {
    id: 1,
    title: "Commencez par les cocktails classiques",
    image: Img1,
    content: "Quand vous ne savez pas comment faire des cocktails ? Commencez toujours par maîtriser les recettes de cocktails classiques au lieu d'expérimenter. Au début, expérimenter est une bonne idée pendant la courbe d'apprentissage, la créativité est importante mais il faut toujours commencer par comprendre les bases, puis passer à l'improvisation. L'astuce vintage est toujours un atout pour appréhender la mixologie."
  },
  {
    id: 2,
    title: "L'alcool est un ingrédient important dans la fabrication de cocktails",
    image: Img2,
    content: "Il ne fait aucun doute qu'un bon cocktail ne doit pas masquer son ivresse. Cette règle d'or : la base de 50 ml du cocktail est un spiritueux comprenant également quelques autres ingrédients. La meilleure façon de faire des cocktails est d'avoir une main généreuse avec les spiritueux."
  },
  {
    id: 3,
    title: "La glace est un composant essentiel pour faire des cocktails",
    image: Img3,
    content: "La glace est l'élément le plus ignoré et négligé dans la fabrication de cocktails, ne sous-estimez pas cet ingrédient. La glace a un double objectif pour votre boisson, refroidir le cocktail et ajouter un peu de dilution. Si vous n'utilisez pas suffisamment de glaçons, ils fondront rapidement, ce qui entraînera une dilution de la boisson."
  },
  {
    id: 4,
    title: "Pour parfaire l'art de la confection de cocktails, il est essentiel de connaître ses ingrédients",
    image: Img4,
    content: "Nous sommes tous conscients que la préparation de cocktails ne consiste pas seulement à mélanger un ou deux spiritueux avec des ingrédients aromatisés. La meilleure façon de faire des cocktails est de connaître tous vos ingrédients dans votre recette de cocktail, qu'ils soient sucrés, acides, forts, faibles il est important de savoir ce qu'ils sont."
  },
  {
    id: 5,
    title: "N'improvisez pas, lisez attentivement les recettes de cocktails !",
    image: Img5,
    content: "Comment faire des cocktails ? Internet et de nombreux livres regorgent de boissons et de recettes de cocktails, donc ne suivez pas votre sixième sens si vous n'êtes pas un expert. La meilleure façon de faire des cocktails est de vous procurer vos ingrédients préférés et aussi un livre de recettes qui indique quelle liqueur utiliser, les quantités, la méthode pour la préparer."
  },
  {
    id: 6,
    title: "Un bon cocktail est toujours équilibré",
    image: Img6,
    content: "Visez un mélange de saveurs bien équilibré, ni trop sucré ni trop acide et pas trop amer non plus. C'est facile de faire un cocktail qui est bon à la première gorgée, de plus, le défi est de faire quelque chose qui a bon goût aussi à la dernière gorgée. Les débutants qui préparent des cocktails doivent garder à l'esprit que vos papilles gustatives sont votre guide."
  },
  {
    id: 7,
    title: "Tout est dans la présentation",
    image: Img7,
    content: "Ne vous précipitez pas en installant la boisson sur la table, prenez le temps et soyez patient. Vous n'avez pas besoin d'être obsessionnel à ce sujet mais la présentation créative joue un rôle très important dans la technique de fabrication du cocktail, l'apparence du cocktail doit être la meilleure avant consommation."
  },
  {
    id: 8,
    title: "Mélanger ou secouer une technique importante de préparation de cocktails",
    image: Img8,
    content: "Quand mélanger ? Quand secouer ? Cette technique de fabrication de cocktails est simple mais obligatoire. Il existe deux types de base de cocktails, les cocktails aromatiques qui ne contiennent que des éléments alcoolisés, ces cocktails sont souvent secs et alcoolisés et doivent être mélangés avec de la glace."
  },
  {
    id: 9,
    title: "Chaque élément compte",
    image: Img9,
    content: "Chaque élément que vous ajoutez à la boisson fait la différence, David A Embury, auteur du livre The Fine Art of Mixing Drinks, affirme qu'aucune boisson n'était meilleure que ses pires ingrédients, ce qui compte le plus pendant que faire un cocktail est votre travail acharné et la créativité."
  },
  {
    id: 10,
    title: "Avoir le bon matériel",
    image: Img10,
    content: "Chaque type de cocktail nécessite un type de shaker différent, toutes les utilisations de shaker ne peuvent pas faire une bonne boisson. Le barman et les mixologues doivent passer beaucoup de temps de qualité avec leur shaker, leur pilon, leur passoire et leur brûleur pour atteindre la précision de la technique de préparation de cocktails."
  }
];

function Conseils() {
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
              <BookOpen size={40} className="text-primary-400" />
              <h1 className="text-4xl lg:text-5xl font-heading text-gradient">
                10 Règles d'Or
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Maîtrisez l'art de la mixologie avec nos conseils d'experts pour créer des cocktails parfaits
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 border border-white/20">
                <Lightbulb size={16} className="text-yellow-400" />
                <span>Conseils d'experts</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 border border-white/20">
                <TrendingUp size={16} className="text-green-400" />
                <span>Techniques éprouvées</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 border border-white/20">
                <CheckCircle size={16} className="text-blue-400" />
                <span>Résultats garantis</span>
              </div>
            </div>
          </motion.div>
        </Container>
        
        {/* Decorative elements */}
        <div className="absolute top-10% left-5% w-20 h-20 bg-primary-500 opacity-20 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-10% right-5% w-28 h-28 bg-secondary-500 opacity-20 rounded-full filter blur-xl"></div>
      </Section>

      {/* Conseils Grid */}
      <Section className="py-16">
        <Container>
          <div className="space-y-8">
            {conseils.map((conseil, index) => (
              <motion.div
                key={conseil.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={conseil.image}
                          alt={`Conseil ${conseil.id}`}
                          className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        
                        {/* Numéro du conseil */}
                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {conseil.id}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <h2 className="text-2xl lg:text-3xl font-heading text-white mb-6 leading-tight">
                        {conseil.title}
                      </h2>
                      <p className="text-white/80 leading-relaxed text-lg">
                        {conseil.content}
                      </p>
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

export default Conseils;
