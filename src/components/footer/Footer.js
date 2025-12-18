import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Heart, Globe, Facebook, Database, Utensils, Sparkles } from "lucide-react";
import { Container } from "../ui";

const Footer = () => {
  const links = [
    {
      title: "Lefooding",
      description: "Bars & restaurants",
      url: "https://lefooding.com/recherche/bar/place/france-8172",
      icon: Utensils,
      color: "text-orange-400"
    },
    {
      title: "1001 Cocktails",
      description: "Recettes & inspirations",
      url: "https://www.1001cocktails.com/",
      icon: Sparkles,
      color: "text-purple-400"
    },
    {
      title: "API CocktailDB",
      description: "Base de données",
      url: "https://www.thecocktaildb.com/api.php",
      icon: Database,
      color: "text-green-400"
    },
    {
      title: "Recettes Facebook",
      description: "Communauté",
      url: "https://www.facebook.com/recette.cocktail",
      icon: Facebook,
      color: "text-blue-400"
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent-500/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Enhanced gradient separator */}
      <div className="relative">
        <div className="h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent mb-16"></div>
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary-400 rounded-full opacity-60"></div>
      </div>
      
      <Container>
        <div className="relative">
          {/* Glass morphism container */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
            
            {/* Header with logo and description - Horizontal layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <motion.div 
                className="flex items-center justify-center gap-3 mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <Sparkles size={24} className="text-white" />
                </div>
                <h3 className="text-3xl font-heading text-gradient">
                  Cocktail Party
                </h3>
              </motion.div>
              
              <p className="text-white/80 leading-relaxed text-lg max-w-2xl mx-auto mb-6">
                Votre destination complète pour découvrir, apprendre et maîtriser 
                l'art de la mixologie. Des recettes authentiques aux techniques 
                professionnelles.
              </p>

              <motion.div 
                className="flex items-center justify-center space-x-3 text-white/70 mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-lg">Créé avec</span>
                <Heart size={20} className="text-red-400 animate-pulse" />
                <span className="text-lg font-medium text-white">par Geoffroy FONTAINE</span>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-4 backdrop-blur-sm max-w-lg mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <p className="text-yellow-200 flex items-center justify-center gap-3 text-sm">
                  <span className="text-yellow-400 text-lg">⚠️</span>
                  <span>
                    <strong>L'abus d'alcool est dangereux pour la santé.</strong> À consommer avec modération.
                  </span>
                </p>
              </motion.div>
            </motion.div>

            {/* Links section - Horizontal line layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h3 className="text-xl font-heading text-white mb-6 text-center">
                Ressources Utiles
              </h3>
              
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
                {links.map((link, index) => {
                  const Icon = link.icon;
                  
                  return (
                    <motion.a
                      key={link.title}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-400/30 transition-all duration-300 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={18} className={`${link.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <h4 className="text-primary-200 font-medium group-hover:text-primary-100 transition-colors whitespace-nowrap">
                          {link.title}
                        </h4>
                        <ExternalLink size={12} className="text-primary-300 group-hover:text-primary-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Enhanced bottom section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8 border-t border-white/10"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="text-center sm:text-left">
                  <p className="text-white/70 font-medium">
                    © {currentYear} Cocktail Party - Tous droits réservés.
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 text-white/60">
                  <span className="text-sm">Powered by</span>
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors">React</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors">TheCocktailDB</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
