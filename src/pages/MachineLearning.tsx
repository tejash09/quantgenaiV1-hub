
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, File, Video } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getTopicBySlug } from '../utils/mockData';
import VideoPlayer from '../components/VideoPlayer';

const MachineLearning = () => {
  const topic = getTopicBySlug('machine-learning');
  const navigate = useNavigate();

  useEffect(() => {
    if (!topic) {
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [topic, navigate]);

  if (!topic) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {topic.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {topic.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/signup">
                  <Button className="bg-quantum-500 hover:bg-quantum-600 text-white">
                    Explore Resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="#research-papers">
                  <Button variant="outline" className="border-quantum-500 text-quantum-500 hover:bg-quantum-50 dark:hover:bg-quantum-900/20">
                    View Research Papers
                  </Button>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mt-8 md:mt-0"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
                <VideoPlayer videoUrl={topic.videoUrl} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Research Papers Section */}
      <section id="research-papers" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Research Papers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore influential research papers on Machine Learning from leading researchers and institutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Original papers from mockData */}
            {topic.papers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-quantum-100 dark:bg-quantum-900 p-2 rounded-lg">
                      <File className="h-6 w-6 text-quantum-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                        {paper.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span className="font-medium">Authors:</span> {paper.authors}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <span className="font-medium">Year:</span> {paper.year}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {paper.abstract}
                      </p>
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-quantum-500 hover:text-quantum-600 text-sm font-medium flex items-center"
                      >
                        Read Paper <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Additional papers for Machine Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-quantum-100 dark:bg-quantum-900 p-2 rounded-lg">
                    <File className="h-6 w-6 text-quantum-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      XGBoost: A Scalable Tree Boosting System
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-medium">Authors:</span> Tianqi Chen, Carlos Guestrin
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <span className="font-medium">Year:</span> 2016
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      This paper presents XGBoost, an optimized distributed gradient boosting library that has become the leading model for many machine learning challenges and a go-to approach for applied machine learning problems.
                    </p>
                    <a
                      href="https://arxiv.org/abs/1603.02754"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-quantum-500 hover:text-quantum-600 text-sm font-medium flex items-center"
                    >
                      Read Paper <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-quantum-100 dark:bg-quantum-900 p-2 rounded-lg">
                    <File className="h-6 w-6 text-quantum-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      A Few Useful Things to Know About Machine Learning
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-medium">Authors:</span> Pedro Domingos
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <span className="font-medium">Year:</span> 2012
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      This influential paper provides fundamental insights and lessons about machine learning that are often missed in technical discussions, focusing on practical advice for practitioners.
                    </p>
                    <a
                      href="https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-quantum-500 hover:text-quantum-600 text-sm font-medium flex items-center"
                    >
                      Read Paper <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Educational Resources Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Educational Resources
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Access high-quality learning materials to learn machine learning fundamentals and applications.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Original resources from mockData */}
            {topic.resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-quantum-100 dark:bg-quantum-900 p-2 rounded-lg">
                      {resource.type === 'Book' ? (
                        <BookOpen className="h-6 w-6 text-quantum-500" />
                      ) : resource.type === 'Video' ? (
                        <Video className="h-6 w-6 text-quantum-500" />
                      ) : (
                        <File className="h-6 w-6 text-quantum-500" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          {resource.title}
                        </h3>
                        <span className="ml-2 px-2 py-1 text-xs font-medium bg-quantum-100 dark:bg-quantum-900 text-quantum-500 rounded-full">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {resource.description}
                      </p>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-quantum-500 hover:text-quantum-600 text-sm font-medium flex items-center"
                      >
                        Access Resource <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Additional resources for Machine Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-quantum-100 dark:bg-quantum-900 p-2 rounded-lg">
                    <BookOpen className="h-6 w-6 text-quantum-500" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                        Hands-On Machine Learning with Scikit-Learn and TensorFlow
                      </h3>
                      <span className="ml-2 px-2 py-1 text-xs font-medium bg-quantum-100 dark:bg-quantum-900 text-quantum-500 rounded-full">
                        Book
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      A practical guide to implementing machine learning algorithms using scikit-learn and TensorFlow, covering a wide range of applications.
                    </p>
                    <a
                      href="https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-quantum-500 hover:text-quantum-600 text-sm font-medium flex items-center"
                    >
                      Access Resource <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-quantum-100 dark:bg-quantum-900 p-2 rounded-lg">
                    <Video className="h-6 w-6 text-quantum-500" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                        Machine Learning Course by Stanford
                      </h3>
                      <span className="ml-2 px-2 py-1 text-xs font-medium bg-quantum-100 dark:bg-quantum-900 text-quantum-500 rounded-full">
                        Course
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      This Stanford course taught by Andrew Ng provides a broad introduction to machine learning, datamining, and statistical pattern recognition.
                    </p>
                    <a
                      href="https://www.coursera.org/learn/machine-learning"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-quantum-500 hover:text-quantum-600 text-sm font-medium flex items-center"
                    >
                      Access Resource <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Related Topics Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Related Topics
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore these related technological fields to expand your knowledge.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <Link to="/topic/deep-learning">
                <Card className="h-full overflow-hidden group-hover:shadow-xl transition-shadow duration-200">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-800">
                    <img
                      src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Deep Learning"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                      Deep Learning
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Neural networks with multiple layers that learn representations.
                    </p>
                  </div>
                </Card>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <Link to="/topic/llms">
                <Card className="h-full overflow-hidden group-hover:shadow-xl transition-shadow duration-200">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-800">
                    <img
                      src="https://images.unsplash.com/photo-1677442135968-6d89469c5f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Large Language Models"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                      Large Language Models
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Advanced AI models that understand and generate human language.
                    </p>
                  </div>
                </Card>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <Link to="/topic/genai">
                <Card className="h-full overflow-hidden group-hover:shadow-xl transition-shadow duration-200">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-800">
                    <img
                      src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Generative AI"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                      Generative AI
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      AI systems that can generate new content and ideas.
                    </p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} QuantGenAILabs. All rights reserved.</p>
        </div>
      </footer>
      
      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default MachineLearning;
