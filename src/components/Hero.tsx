
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
      </div>

      {/* Content */}
      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Exploring the Future of
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-quantum-300 to-quantum-500 ml-2">
                Quantum AI
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Dive into cutting-edge technologies shaping our future: from machine learning and deep neural networks to quantum computing and robotics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/signup">
              <Button variant="outline" size="lg" className="border-2 border-quantum-500 bg-quantum-500 text-white hover:bg-quantum-700 hover:text-white hover:border-quantum-700 font-semibold transition-colors backdrop-blur-sm">
                Sign Up
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-2 border-quantum-500 bg-quantum-500 text-white hover:bg-quantum-700 hover:text-white hover:border-quantum-700 font-semibold transition-colors backdrop-blur-sm">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-2">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full"
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
