
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getAllTopics } from '../utils/mockData';

const AllPapers = () => {
  const topics = getAllTopics();
  
  // Flatten all papers from all topics
  const allPapers = topics.flatMap(topic => 
    topic.papers.map(paper => ({
      ...paper,
      topicName: topic.title,
      topicSlug: topic.slug
    }))
  );
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mb-6"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Research Papers
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Explore our comprehensive collection of research papers across various advanced technology domains.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* All Papers Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPapers.map((paper, index) => (
              <motion.div
                key={`${paper.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-quantum-100 dark:bg-quantum-900 p-2 rounded-lg">
                      <FileText className="h-6 w-6 text-quantum-500" />
                    </div>
                    <div>
                      <div className="flex flex-col mb-2">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          {paper.title}
                        </h3>
                        <span className="mt-1 text-xs font-medium text-quantum-500">
                          {paper.topicName}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span className="font-medium">Authors:</span> {paper.authors}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <span className="font-medium">Year:</span> {paper.year}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {paper.abstract}
                      </p>
                      <div className="flex gap-4">
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-quantum-500 hover:text-quantum-600 text-sm font-medium flex items-center"
                        >
                          Read Paper <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                        <Link
                          to={`/topic/${paper.topicSlug}`}
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm font-medium flex items-center"
                        >
                          View Topic <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
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

export default AllPapers;
