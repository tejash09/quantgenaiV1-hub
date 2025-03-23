
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot';
import { Button } from '@/components/ui/button';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                About <span className="text-quantum-500">QuantGenAILabs</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                We're on a mission to democratize access to cutting-edge knowledge in artificial intelligence, quantum computing, and other advanced technologies that are shaping our future.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-quantum-500 hover:bg-quantum-600 text-white">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-quantum-500/20 to-quantum-400/20 rounded-2xl blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Futuristic laboratory" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              At QuantGenAILabs, we believe that the future will be shaped by those who understand and can harness advanced technologies.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md"
            >
              <div className="w-12 h-12 bg-quantum-100 dark:bg-quantum-900 text-quantum-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Educate</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We provide accessible educational resources to help students and teachers understand complex technologies like quantum computing and AI.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md"
            >
              <div className="w-12 h-12 bg-quantum-100 dark:bg-quantum-900 text-quantum-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Innovate</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We showcase cutting-edge research and breakthroughs that are pushing the boundaries of what's possible in education.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md"
            >
              <div className="w-12 h-12 bg-quantum-100 dark:bg-quantum-900 text-quantum-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Connect</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We build communities of students and teachers passionate about leveraging technology for better learning experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-quantum-600/20 to-quantum-500/20 rounded-2xl blur-xl"></div>
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1573496130407-57329f01f769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  QuantGenAILabs was created by a group of passionate students who wanted to better understand cutting-edge technologies like quantum computing and artificial intelligence.
                </p>
                <p>
                  We recognized that many educational resources on advanced technologies were either too technical or scattered across different platforms, making it difficult for students to learn effectively.
                </p>
                <p>
                  Our platform aims to bridge this gap by providing accessible, structured learning resources that help both students in their learning journey and teachers in their instructional efforts.
                </p>
                <p>
                  Built by students for students, our mission is to democratize knowledge about advanced technologies and make complex concepts easier to understand for everyone in the educational community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-quantum-800 to-quantum-900 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the QuantGenAILabs Community</h2>
            <p className="text-lg text-quantum-100 mb-8">
              Sign up today to access our full library of resources, connect with fellow students and teachers, and stay updated on the latest in AI and quantum technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-quantum-800 hover:bg-quantum-100">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center text-sm">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} QuantGenAILabs. All rights reserved.</p>
        </div>
      </footer>
      
      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default About;
