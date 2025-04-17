import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Video, ExternalLink, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import { getAllTopics, Topic } from '../utils/mockData';
import { Button } from '@/components/ui/button';

const VideoTutorials = () => {
  const [searchParams] = useSearchParams();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<any[]>([]);

  useEffect(() => {
    const topicSlug = searchParams.get('topic');
    setSelectedTopic(topicSlug);
    
    // Fetch all topics
    const allTopics = getAllTopics();
    setTopics(allTopics);
    
    // If a topic is selected, filter videos for that topic
    if (topicSlug) {
      const topic = allTopics.find(t => t.slug === topicSlug);
      if (topic) {
        // Sample video tutorials for each topic
        const topicVideos = [
          {
            id: '1',
            title: `${topic.title} Fundamentals`,
            description: 'Learn the basics and core concepts of ' + topic.title,
            link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: '45:30',
            level: 'Beginner'
          },
          {
            id: '2',
            title: `Advanced ${topic.title} Techniques`,
            description: 'Deep dive into advanced concepts and applications',
            link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: '1:15:20',
            level: 'Advanced'
          },
          {
            id: '3',
            title: `${topic.title} Project Tutorial`,
            description: 'Build a complete project using ' + topic.title,
            link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: '2:30:00',
            level: 'Intermediate'
          },
          {
            id: '4',
            title: `${topic.title} Best Practices`,
            description: 'Learn industry best practices and standards',
            link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: '35:45',
            level: 'Intermediate'
          },
          {
            id: '5',
            title: `${topic.title} Case Studies`,
            description: 'Real-world applications and case studies',
            link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: '1:00:00',
            level: 'Advanced'
          },
          {
            id: '6',
            title: `${topic.title} Hands-on Workshop`,
            description: 'Interactive workshop with practical exercises',
            link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: '1:45:00',
            level: 'Intermediate'
          },
          {
            id: '7',
            title: `${topic.title} Industry Applications`,
            description: 'How ' + topic.title + ' is used in various industries',
            link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: '50:15',
            level: 'Intermediate'
          },
          {
            id: '8',
            title: `${topic.title} Future Trends`,
            description: 'Emerging trends and future developments in ' + topic.title,
            link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: '40:30',
            level: 'Advanced'
          },
          {
            id: '9',
            title: `${topic.title} Quick Start Guide`,
            description: 'Get started with ' + topic.title + ' in under an hour',
            link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: '55:00',
            level: 'Beginner'
          },
          {
            id: '10',
            title: `${topic.title} Expert Panel Discussion`,
            description: 'Industry experts discuss ' + topic.title + ' challenges and solutions',
            link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: '1:20:00',
            level: 'Advanced'
          }
        ];
        setFilteredVideos(topicVideos);
      }
    } else {
      // If no topic selected, show all videos
      const allVideos = allTopics.flatMap(topic => [
        {
          id: `${topic.slug}-1`,
          title: `${topic.title} Fundamentals`,
          description: 'Learn the basics and core concepts of ' + topic.title,
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          duration: '45:30',
          level: 'Beginner',
          topic: topic.title
        },
        {
          id: `${topic.slug}-2`,
          title: `Advanced ${topic.title} Techniques`,
          description: 'Deep dive into advanced concepts and applications',
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          duration: '1:15:20',
          level: 'Advanced',
          topic: topic.title
        },
        {
          id: `${topic.slug}-3`,
          title: `${topic.title} Project Tutorial`,
          description: 'Build a complete project using ' + topic.title,
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          duration: '2:30:00',
          level: 'Intermediate',
          topic: topic.title
        },
        {
          id: `${topic.slug}-4`,
          title: `${topic.title} Best Practices`,
          description: 'Learn industry best practices and standards',
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          duration: '35:45',
          level: 'Intermediate',
          topic: topic.title
        },
        {
          id: `${topic.slug}-5`,
          title: `${topic.title} Case Studies`,
          description: 'Real-world applications and case studies',
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          duration: '1:00:00',
          level: 'Advanced',
          topic: topic.title
        }
      ]);
      setFilteredVideos(allVideos);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      <section className="pt-24 px-4">
        <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {selectedTopic ? `${selectedTopic} Video Tutorials` : 'All Video Tutorials'}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {selectedTopic 
                ? `Explore video tutorials for ${selectedTopic}`
                : 'Browse video tutorials across all topics'}
          </p>
        </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Topics Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Topics</h2>
                <ul className="space-y-2">
                  {topics.map((topic) => (
                    <li key={topic.slug}>
                      <Button
                        variant={selectedTopic === topic.slug ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => window.location.href = `/video-tutorials?topic=${topic.slug}`}
                      >
                        <ChevronRight className="w-4 h-4 mr-2" />
                      {topic.title}
                      </Button>
                    </li>
                  ))}
                </ul>
            </div>
            </motion.div>

            {/* Video Tutorials Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredVideos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <Video className="w-5 h-5 text-quantum-500 mr-2" />
                        <h3 className="font-medium text-gray-900 dark:text-white">{video.title}</h3>
                  </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{video.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                        <span>Duration: {video.duration}</span>
                        <span>Level: {video.level}</span>
                </div>
                      {!selectedTopic && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                          Topic: {video.topic}
                        </p>
                      )}
                      <a
                        href={video.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-quantum-500 hover:text-quantum-600 text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        <span>Watch Tutorial</span>
                      </a>
                    </div>
                  </div>
                ))}
                </div>
              </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoTutorials;
