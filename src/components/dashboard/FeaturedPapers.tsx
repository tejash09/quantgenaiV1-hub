
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { getAllTopics } from '../../utils/mockData';

const FeaturedPapers = () => {
  const topics = getAllTopics();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Featured Research Papers
        </h2>
        <Link to="#" className="text-quantum-500 hover:text-quantum-600 text-sm font-medium">
          Browse library
        </Link>
      </div>
      
      <div className="space-y-4">
        {topics.slice(0, 3).flatMap(topic => 
          topic.papers.slice(0, 1).map(paper => (
            <div 
              key={paper.id}
              className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="md:w-1/4 flex-shrink-0">
                <div className="h-24 bg-quantum-100 dark:bg-quantum-900 rounded-lg flex items-center justify-center">
                  <FileText className="w-10 h-10 text-quantum-500" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">{paper.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{paper.authors} ({paper.year})</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{paper.abstract}</p>
                <div className="mt-3 flex items-center">
                  <Link 
                    to={paper.link} 
                    className="text-quantum-500 hover:text-quantum-600 text-sm font-medium"
                  >
                    Read paper
                  </Link>
                  <span className="mx-2 text-gray-300 dark:text-gray-700">•</span>
                  <Link 
                    to={`/topic/${topic.slug}`}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm"
                  >
                    {topic.title}
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default FeaturedPapers;
