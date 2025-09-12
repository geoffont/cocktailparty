import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Eye, Sparkles } from 'lucide-react';
import { Container, Section, Card, Button } from '../components/ui';

function ColorDemo() {
  const colors = [
    { name: 'Primary', value: 'var(--primary-500)', bg: 'bg-primary-500' },
    { name: 'Secondary', value: 'var(--secondary-500)', bg: 'bg-secondary-500' },
    { name: 'Accent', value: 'var(--accent-500)', bg: 'bg-accent-500' },
  ];

  return (
    <div className="min-h-screen">
      <Section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Palette size={40} className="text-primary-400" />
              <h1 className="text-4xl font-heading text-gradient">
                Nouvelle Palette de Couleurs
              </h1>
            </div>
            <p className="text-xl text-white/70">
              Design moderne avec thème Deep Ocean & Gradient
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {colors.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-8">
                  <div 
                    className="w-20 h-20 mx-auto mb-4 rounded-full"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <h3 className="text-xl font-body text-white mb-2">
                    {color.name}
                  </h3>
                  <code className="text-sm text-white/60">
                    {color.value}
                  </code>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl font-heading text-gradient mb-8">
              Nouvelles Fonctionnalités
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye size={24} className="text-primary-400" />
                  <h3 className="text-xl font-body text-white">
                    Glass Morphism
                  </h3>
                </div>
                <p className="text-white/70">
                  Effets de verre moderne avec backdrop-blur et transparence
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles size={24} className="text-secondary-400" />
                  <h3 className="text-xl font-body text-white">
                    Animations fluides
                  </h3>
                </div>
                <p className="text-white/70">
                  Transitions et animations avec cubic-bezier pour plus de fluidité
                </p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg">
                Bouton Principal
              </Button>
              <Button variant="secondary" size="lg">
                Bouton Secondaire
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}

export default ColorDemo;