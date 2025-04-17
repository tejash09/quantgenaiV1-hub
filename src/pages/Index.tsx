import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { ChevronRight, ArrowRight, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TopicCard from '../components/TopicCard';
import FeedbackForm from '../components/FeedbackForm';
import Chatbot from '../components/Chatbot';
import { Button } from '@/components/ui/button';
import { getAllTopics } from '../utils/mockData';

const Index = () => {
  const topics = getAllTopics();
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const feedbackRef = useRef<HTMLElement>(null);
  
  const controls = useAnimation();

  const handleScroll = () => {
    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((element) => {
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight * 0.8) {
        element.classList.add('is-visible');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle anchor links
    const hash = window.location.hash;
    if (hash === '#about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#services' && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#feedback' && feedbackRef.current) {
      feedbackRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in-section">
            <h2 className="section-heading">About QuantGenAILabs</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6">
              QuantGenAILabs is your gateway to the future of AI and quantum technologies. We provide educational resources, research papers, and insights into cutting-edge technologies that are shaping our world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 fade-in-section">
            <motion.div 
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 bg-quantum-100 dark:bg-quantum-900 text-quantum-500 rounded-xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Cutting-Edge Research</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access the latest research papers and developments in AI, machine learning, and quantum computing.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 bg-quantum-100 dark:bg-quantum-900 text-quantum-500 rounded-xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Educational Resources</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn from curated educational materials, tutorials, and courses from leading institutions and experts.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 bg-quantum-100 dark:bg-quantum-900 text-quantum-500 rounded-xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Technology Integration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Discover practical implementations and applications of advanced technologies in various industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services/Topics Section */}
      <section ref={servicesRef} id="services" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in-section">
            <h2 className="section-heading">Explore Our Technologies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6">
              Dive into the fascinating world of advanced technologies that are revolutionizing industries and reshaping our future.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-section">
            {topics.map((topic, index) => (
              <TopicCard key={topic.id} topic={topic} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-quantum-800 to-quantum-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
            <p className="text-lg text-quantum-100 mb-8">
              Sign up for access to our complete collection of resources, research papers, and personalized dashboard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-quantum-800 hover:bg-quantum-100">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feedback Section */}
      <section ref={feedbackRef} id="feedback" className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in-section">
            <h2 className="section-heading">Your Feedback Matters</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6">
              We're constantly improving. Let us know your thoughts or reach out with any questions.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto fade-in-section">
            <FeedbackForm />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-quantum-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Q</span>
                </div>
                <span className="font-bold text-xl">QuantGenAILabs</span>
              </Link>
              <p className="text-gray-400 text-sm">
                Your gateway to the future of AI and quantum technologies.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="https://mail.google.com/mail/?view=cm&to=sayitqwerty@gmail.com&su=Hello&body=This%20is%20a%20test%20email"
                target='_blank' className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=sayitqwerty@gmail.com&su=Hello&body=This%20is%20a%20test%20email" 
                target='_blank' className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=sayitqwerty@gmail.com&su=Hello&body=This%20is%20a%20test%20email" 
                target='_blank' className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=sayitqwerty@gmail.com&su=Hello&body=This%20is%20a%20test%20email" 
                target='_blank' className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/topic/machine-learning" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>Machine Learning</span>
                  </Link>
                </li>
                <li>
                  <Link to="/topic/deep-learning" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>Deep Learning</span>
                  </Link>
                </li>
                <li>
                  <Link to="/topic/nlp" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>Natural Language Processing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/topic/robotics" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>Robotics</span>
                  </Link>
                </li>
                <li>
                  <Link to="/topic/drones" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>Drones</span>
                  </Link>
                </li>
                <li>
                  <Link to="/topic/quantum-computing" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>Quantum Computing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/topic/genai" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>Generative AI</span>
                  </Link>
                </li>
                <li>
                  <Link to="/topic/llms" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>Large Language Models</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Site</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>Contact</span>
                  </Link>
                </li>
                <li>
                  <Link to="#feedback" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>Feedback</span>
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>Terms of Service</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>Privacy Policy</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <span className="block">Email:</span>
                  <a href="https://mail.google.com/mail/?view=cm&to=sayitqwerty@gmail.com&su=Hello&body=This%20is%20a%20test%20email" 
                target='_blank' className="text-quantum-300 hover:text-quantum-200">
                    sayitqwerty@gmail.com
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block">Phone:</span>
                  <a href="tel:+918523040012" className="text-quantum-300 hover:text-quantum-200">
                    +91 8523040012
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block">Address:</span>
                  <address className="not-italic">
                    Vasavi college of engineering<br />
                    Ibrahim Bagh<br />
                    Hyderabad, Telangana 500031<br />
                    India
                  </address>
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center text-quantum-300 hover:text-quantum-200 mt-4">
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>Get in touch</span>
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} QuantGenAILabs. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
