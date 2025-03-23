
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Topic } from '../utils/mockData';

interface TopicCardProps {
  topic: Topic;
  index: number;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 } 
      }}
      className="group relative overflow-hidden rounded-2xl"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${topic.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
      </div>
      
      <div className="relative p-6 h-full flex flex-col justify-between min-h-[300px]">
        <div>
          <div className="inline-block px-3 py-1 text-xs font-medium bg-quantum-500/90 text-white rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
            Explore Technology
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{topic.title}</h3>
          <p className="text-gray-200 text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300 max-w-[90%]">
            {topic.shortDescription}
          </p>
        </div>
        
        <Link 
          to={`/topic/${topic.slug}`}
          className="inline-flex items-center text-quantum-200 hover:text-quantum-300 text-sm font-medium transition-colors duration-200 mt-4"
        >
          <span>Learn more</span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="ml-1 h-4 w-4" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default TopicCard;
