
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TopicCard from '../TopicCard';
import { getAllTopics } from '../../utils/mockData';

const TopicsSection = () => {
  const topics = getAllTopics();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Explore Technologies
        </h2>
        <Link to="/dashboard" className="text-quantum-500 hover:text-quantum-600 text-sm font-medium">
          View all
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic, index) => (
          <TopicCard key={topic.id} topic={topic} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default TopicsSection;
