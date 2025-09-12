import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Wine, Clock, Tag } from "lucide-react";
import { Card, Badge, Button } from "../ui";

const CocktailList = ({
  name,
  glass,
  picture,
  ingredient,
  ingredient2,
  ingredient3,
  ingredient4,
  recette,
  category,
  alcoholic,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const ingredients = [ingredient, ingredient2, ingredient3, ingredient4]
    .filter(Boolean)
    .slice(0, 3);

  return (
    <Card className="overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-lg">
        <motion.img
          src={picture}
          alt={name}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Overlay badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {alcoholic && (
            <Badge 
              variant={alcoholic === 'Alcoholic' ? 'accent' : 'secondary'}
              className="text-xs"
            >
              {alcoholic === 'Alcoholic' ? '🍻 Alcoolisé' : '🚫 Sans alcool'}
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-body text-white mb-2 line-clamp-2">
            {name}
          </h3>
          
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <Wine size={16} />
            <span>{glass || 'Verre standard'}</span>
          </div>

          {category && (
            <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
              <Tag size={16} />
              <span>{category}</span>
            </div>
          )}
        </div>

        {/* Ingredients */}
        {ingredients.length > 0 && (
          <div className="mb-4">
            <h4 className="text-white/80 text-sm font-medium mb-2">
              Ingrédients principaux :
            </h4>
            <div className="flex flex-wrap gap-1">
              {ingredients.map((ing, index) => (
                <Badge 
                  key={index} 
                  variant="default"
                  className="text-xs"
                >
                  {ing}
                </Badge>
              ))}
              {ingredients.length < [ingredient, ingredient2, ingredient3, ingredient4].filter(Boolean).length && (
                <Badge variant="default" className="text-xs">
                  +{[ingredient, ingredient2, ingredient3, ingredient4].filter(Boolean).length - ingredients.length}
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Recipe details */}
        <AnimatePresence>
          {showDetails && recette && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4 overflow-hidden"
            >
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                  <Clock size={16} />
                  <span>Préparation :</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {recette}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            onClick={() => setShowDetails(!showDetails)}
            variant="secondary"
            size="sm"
            className="flex-1 justify-center"
          >
            {showDetails ? (
              <>
                <ChevronUp size={16} className="mr-1" />
                Masquer
              </>
            ) : (
              <>
                <ChevronDown size={16} className="mr-1" />
                Voir recette
              </>
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CocktailList;
