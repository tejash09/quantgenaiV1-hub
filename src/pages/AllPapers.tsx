
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { getAllTopics } from '../utils/mockData';
import { FileText, Search, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AllPapers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const topics = getAllTopics();
  
  // Flatten all papers from all topics
  const allPapers = topics.flatMap(topic => 
    topic.papers.map(paper => ({
      ...paper,
      topic: topic.title,
      topicSlug: topic.slug
    }))
  );
  
  // Filter papers based on search query and selected topic
  const filteredPapers = allPapers.filter(paper => {
    const matchesSearch = 
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTopic = selectedTopic === 'all' || paper.topic.toLowerCase() === selectedTopic.toLowerCase();
    
    return matchesSearch && matchesTopic;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      <div className="container mx-auto pt-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Research Papers</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            Browse our comprehensive collection of research papers on quantum computing, 
            machine learning, and other cutting-edge technologies.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search papers by title, author, or keyword" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                <SelectTrigger>
                  <div className="flex items-center">
                    <Filter size={18} className="mr-2 text-gray-500" />
                    <SelectValue placeholder="Filter by topic" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Topics</SelectItem>
                  {topics.map(topic => (
                    <SelectItem key={topic.id} value={topic.title.toLowerCase()}>
                      {topic.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPapers.length > 0 ? (
            filteredPapers.map((paper) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="h-12 w-12 bg-quantum-100 dark:bg-quantum-900 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-quantum-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white line-clamp-2">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {paper.authors} ({paper.year})
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {paper.abstract}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="link" asChild className="p-0 h-auto text-quantum-500">
                      <a href={paper.link} target="_blank" rel="noopener noreferrer">
                        Read paper
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={`/topic/${paper.topicSlug}`} className="text-xs">
                        {paper.topic}
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No papers found matching your criteria. Try adjusting your search.</p>
            </div>
          )}
        </div>
        
        <div className="bg-gray-900 text-white py-6 text-center text-sm mt-16">
          <div className="container mx-auto">
            <p>&copy; {new Date().getFullYear()} QuantGenAILabs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPapers;
