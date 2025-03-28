
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getAllTopics } from '../utils/mockData';
import { Book, Video, Search, Filter, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const AllResources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [resourceType, setResourceType] = useState('all');
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
  
  // Get all resources from all topics
  const allResources = topics.flatMap(topic => {
    return topic.resources.map(resource => ({
      ...resource,
      topic: topic.title,
      topicSlug: topic.slug
    }));
  });
  
  // Filter resources based on search query, selected topic, and resource type
  const filteredResources = allResources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTopic = selectedTopic === 'all' || resource.topic.toLowerCase() === selectedTopic.toLowerCase();
    
    const matchesType = resourceType === 'all' || resource.type.toLowerCase() === resourceType.toLowerCase();
    
    return matchesSearch && matchesTopic && matchesType;
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Learning Resources</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            Explore our curated collection of tutorials, courses, and videos to help you master quantum computing, 
            artificial intelligence, and other advanced technologies.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search resources by title or description" 
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
          
          <Tabs value={resourceType} onValueChange={setResourceType} className="w-full">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="tutorial">Tutorials</TabsTrigger>
              <TabsTrigger value="course">Courses</TabsTrigger>
              <TabsTrigger value="video">Videos</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: resource.type.toLowerCase() === 'video'
                        ? 'rgba(220, 38, 38, 0.1)'
                        : resource.type.toLowerCase() === 'course'
                          ? 'rgba(79, 70, 229, 0.1)'
                          : 'rgba(16, 185, 129, 0.1)'
                    }}
                  >
                    {resource.type.toLowerCase() === 'video' ? (
                      <Video className="w-6 h-6 text-red-500" />
                    ) : resource.type.toLowerCase() === 'course' ? (
                      <Book className="w-6 h-6 text-indigo-500" />
                    ) : (
                      <Book className="w-6 h-6 text-emerald-500" />
                    )}
                  </div>
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-2">
                      {resource.title}
                    </h3>
                    <Badge variant={
                      resource.type.toLowerCase() === 'video'
                        ? 'destructive'
                        : resource.type.toLowerCase() === 'course'
                          ? 'default'
                          : 'outline'
                    }>
                      {resource.type}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="default" size="sm" asChild className="gap-2">
                      <a href={resource.link} target="_blank" rel="noopener noreferrer">
                        Access 
                        <ExternalLink size={14} />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={`/topic/${resource.topicSlug}`} className="text-xs">
                        {resource.topic}
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No resources found matching your criteria. Try adjusting your search or filters.</p>
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

export default AllResources;
