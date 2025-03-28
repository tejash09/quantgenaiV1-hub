
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getAllTopics } from '../utils/mockData';
import { Video, Search, Filter, Play, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const VideoTutorials = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const topics = getAllTopics();
  const location = useLocation();
  
  // Extract topic from URL query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const topicParam = params.get('topic');
    
    if (topicParam) {
      // Find the matching topic by slug
      const matchingTopic = topics.find(t => t.slug === topicParam);
      if (matchingTopic) {
        setSelectedTopic(matchingTopic.title.toLowerCase());
      }
    }
  }, [location, topics]);
  
  // Get all video tutorials from all topics
  const allVideoTutorials = topics.flatMap(topic => {
    return topic.videoTutorials.map(video => ({
      ...video,
      topic: topic.title,
      topicSlug: topic.slug
    }));
  });
  
  // Filter videos based on search query and selected topic
  const filteredVideos = allVideoTutorials.filter(video => {
    const matchesSearch = 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTopic = selectedTopic === 'all' || video.topic.toLowerCase() === selectedTopic.toLowerCase();
    
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Video Tutorials</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            Watch our collection of expert video tutorials to master quantum computing, 
            artificial intelligence, and other advanced technologies at your own pace.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search videos by title or description" 
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

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Button variant="outline" size="icon" className="rounded-full bg-white/20 border-0 backdrop-blur-sm">
                      <Play fill="white" size={24} />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs rounded-md flex items-center">
                      <Clock size={12} className="mr-1" />
                      {video.duration}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {video.topic}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-end">
                    <Button variant="default" size="sm" className="gap-2" asChild>
                      <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                        Watch Now <Video size={14} />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No videos found matching your criteria. Try adjusting your search.</p>
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

export default VideoTutorials;
