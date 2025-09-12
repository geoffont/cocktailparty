import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { useRouteError, Link } from "react-router-dom";
import { Button, Container } from "./ui";

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="glass-effect p-12 rounded-2xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <AlertTriangle size={80} className="text-yellow-400 mx-auto mb-6" />
              <h1 className="text-4xl font-heading text-gradient mb-4">
                Oups ! Une erreur s'est produite
              </h1>
              <div className="text-white/70 mb-8">
                {error?.status === 404 ? (
                  <>
                    <p className="text-xl mb-2">Page non trouvée</p>
                    <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
                  </>
                ) : (
                  <>
                    <p className="text-xl mb-2">Erreur inattendue</p>
                    <p>Quelque chose s'est mal passé. Veuillez réessayer.</p>
                    {error?.statusText && (
                      <p className="text-sm text-white/50 mt-2">
                        Détails : {error.statusText}
                      </p>
                    )}
                  </>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                as={Link}
                to="/"
                variant="primary"
                className="flex items-center gap-2"
              >
                <Home size={18} />
                Retour à l'accueil
              </Button>
              
              <Button
                onClick={() => window.location.reload()}
                variant="secondary"
                className="flex items-center gap-2"
              >
                <RefreshCw size={18} />
                Recharger la page
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 pt-8 border-t border-white/10"
            >
              <p className="text-white/50 text-sm">
                Si le problème persiste, veuillez nous contacter.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default ErrorBoundary;