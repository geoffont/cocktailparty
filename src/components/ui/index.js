import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      className={`cocktail-card ${className}`}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  loading = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'bg-transparent hover:bg-white/10 text-white px-4 py-2 rounded-lg border-none',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  const sizeClass = size !== 'md' ? sizes[size] : '';
  
  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizeClass} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={loading}
      {...props}
    >
      {loading && (
        <div className="spinner mr-3" style={{ width: '1.25rem', height: '1.25rem' }}></div>
      )}
      {children}
    </motion.button>
  );
};

export const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`form-input ${className}`}
      {...props}
    />
  );
};

export const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'badge',
    primary: 'badge badge-primary',
    secondary: 'badge badge-secondary',
    accent: 'badge badge-accent',
  };
  
  return (
    <span className={`${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: { width: '1rem', height: '1rem' },
    md: { width: '2rem', height: '2rem' },
    lg: { width: '3rem', height: '3rem' },
  };
  
  return (
    <div 
      className={`spinner ${className}`} 
      style={sizes[size]}
    ></div>
  );
};

export const Container = ({ children, className = '' }) => {
  return (
    <div className={`container-custom ${className}`}>
      {children}
    </div>
  );
};

export const Section = ({ children, className = '' }) => {
  return (
    <section className={`section-spacing ${className}`}>
      {children}
    </section>
  );
};