import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, X, ChevronDown, ChevronUp, Book, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { getAllTopics } from '../utils/mockData';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  resources?: {
    type: 'paper' | 'resource' | 'course' | 'video';
    title: string;
    link: string;
    description?: string;
  }[];
  topicLink?: {
    title: string;
    slug: string;
  };
  resourceLinks?: {
    type: 'papers' | 'tutorials' | 'courses' | 'videos';
    title: string;
    slug: string;
  }[];
  topicIntro?: string;
}

  // Function to find related papers and resources for a topic
  const findTopicResources = (query: string) => {
    // Convert query to lowercase for case-insensitive matching
    const lcQuery = query.toLowerCase();
    const topics = getAllTopics();
    
    // Keywords to identify if the user is asking for resources or papers
    const resourceKeywords = ['resource', 'tutorial', 'course', 'video', 'learn', 'guide', 'how to'];
    const paperKeywords = ['paper', 'research', 'study', 'publication', 'journal', 'conference'];
    
    // Check if query is asking for resources or papers
    const isAskingForResources = resourceKeywords.some(keyword => lcQuery.includes(keyword));
    const isAskingForPapers = paperKeywords.some(keyword => lcQuery.includes(keyword));
    
    // If not specifically asking for papers or resources, return nothing
    if (!isAskingForResources && !isAskingForPapers) {
      return null;
    }
    
    // Find the topic that matches the query
    let matchedTopic = null;
    for (const topic of topics) {
      if (lcQuery.includes(topic.title.toLowerCase()) || lcQuery.includes(topic.slug.replace('-', ' '))) {
        matchedTopic = topic;
        break;
      }
    }
    
    // If no specific topic is found, look for general AI/ML/Quantum keywords
    if (!matchedTopic) {
      if (lcQuery.includes('quantum') || lcQuery.includes('qubits')) {
        matchedTopic = topics.find(t => t.slug === 'quantum-computing');
      } else if (lcQuery.includes('ai') || lcQuery.includes('artificial intelligence')) {
        matchedTopic = topics.find(t => t.slug === 'artificial-intelligence');
      } else if (lcQuery.includes('machine learning') || lcQuery.includes('ml')) {
        matchedTopic = topics.find(t => t.slug === 'machine-learning');
      } else if (lcQuery.includes('deep learning') || lcQuery.includes('neural network')) {
        matchedTopic = topics.find(t => t.slug === 'deep-learning');
      } else if (lcQuery.includes('llm') || lcQuery.includes('language model')) {
        matchedTopic = topics.find(t => t.slug === 'llm');
      } else if (lcQuery.includes('genai') || lcQuery.includes('generative ai')) {
        matchedTopic = topics.find(t => t.slug === 'genai');
    } else if (lcQuery.includes('drone') || lcQuery.includes('drones')) {
      matchedTopic = topics.find(t => t.slug === 'drones');
    } else if (lcQuery.includes('robotics') || lcQuery.includes('robot')) {
      matchedTopic = topics.find(t => t.slug === 'robotics');
      }
    }
    
    if (!matchedTopic) {
      return null;
    }
    
    const result: {
    type: 'paper' | 'resource' | 'course' | 'video';
      title: string;
      link: string;
    description?: string;
    }[] = [];
    
    // Add papers if requested
    if (isAskingForPapers && matchedTopic.papers) {
      result.push(...matchedTopic.papers.slice(0, 3).map(paper => ({
        type: 'paper' as const,
        title: paper.title,
      link: paper.link,
      description: paper.abstract
      })));
    }
    
    // Add resources if requested
    if (isAskingForResources) {
    // Add tutorials
      if (matchedTopic.tutorials) {
      result.push(...matchedTopic.tutorials.slice(0, 3).map(tutorial => ({
          type: 'resource' as const,
          title: tutorial.title,
        link: tutorial.link,
        description: tutorial.description
        })));
      }
      
    // Add courses
      if (matchedTopic.courses) {
      result.push(...matchedTopic.courses.slice(0, 3).map(course => ({
        type: 'course' as const,
          title: course.title,
        link: course.link,
        description: course.description
        })));
      }
      
    // Add videos
      if (matchedTopic.videos) {
      result.push(...matchedTopic.videos.slice(0, 3).map(video => ({
        type: 'video' as const,
          title: video.title,
        link: video.link,
        description: video.description
        })));
      }
    }
    
    return result.length > 0 ? result : null;
  };

// Function to get topic information
const getTopicInfo = (query: string) => {
  const lcQuery = query.toLowerCase();
  const topics = getAllTopics();
  
  // Find the topic that matches the query
  let matchedTopic = null;
  for (const topic of topics) {
    if (lcQuery.includes(topic.title.toLowerCase()) || lcQuery.includes(topic.slug.replace('-', ' '))) {
      matchedTopic = topic;
      break;
    }
  }
  
  // If no specific topic is found, look for general AI/ML/Quantum keywords
  if (!matchedTopic) {
    if (lcQuery.includes('quantum') || lcQuery.includes('qubits')) {
      matchedTopic = topics.find(t => t.slug === 'quantum-computing');
    } else if (lcQuery.includes('ai') || lcQuery.includes('artificial intelligence')) {
      matchedTopic = topics.find(t => t.slug === 'artificial-intelligence');
    } else if (lcQuery.includes('machine learning') || lcQuery.includes('ml')) {
      matchedTopic = topics.find(t => t.slug === 'machine-learning');
    } else if (lcQuery.includes('deep learning') || lcQuery.includes('neural network')) {
      matchedTopic = topics.find(t => t.slug === 'deep-learning');
    } else if (lcQuery.includes('llm') || lcQuery.includes('language model')) {
      matchedTopic = topics.find(t => t.slug === 'llm');
    } else if (lcQuery.includes('genai') || lcQuery.includes('generative ai')) {
      matchedTopic = topics.find(t => t.slug === 'genai');
    } else if (lcQuery.includes('drone') || lcQuery.includes('drones')) {
      matchedTopic = topics.find(t => t.slug === 'drones');
    } else if (lcQuery.includes('robotics') || lcQuery.includes('robot')) {
      matchedTopic = topics.find(t => t.slug === 'robotics');
    }
  }
  
  if (!matchedTopic) {
    return null;
  }
  
  return {
    title: matchedTopic.title,
    slug: matchedTopic.slug,
    description: matchedTopic.shortDescription || matchedTopic.overview,
    keypoints: matchedTopic.keypoints
  };
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm QuantBot, your AI assistant for quantum computing and AI topics. I can help you learn about:\n\n" +
            "• Quantum Computing\n" +
            "• Machine Learning\n" +
            "• Deep Learning\n" +
            "• Natural Language Processing\n" +
            "• Large Language Models\n" +
            "• Generative AI\n\n" +
            "What would you like to learn about today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Hardcoded API key - replace with your actual Groq API key
  const groqApiKey = "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";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Listen for custom events to open the chat
    const handleOpenChat = (e: CustomEvent) => {
      if (e.detail?.open) {
        setIsOpen(true);
        setIsMinimized(false);
      }
    };

    window.addEventListener('openChat' as any, handleOpenChat);
    return () => {
      window.removeEventListener('openChat' as any, handleOpenChat);
    };
  }, []);

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    } else {
      setIsMinimized(!isMinimized);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  // Function to call Groq API
  const callGroqAPI = async (userMessage: string, conversationHistory: Message[]) => {
    if (!groqApiKey) {
      return { 
        text: "Please set your Groq API key in the code before using the chatbot.",
        resources: null
      };
    }

    try {
      // Test API key first
      try {
        const testResponse = await fetch('https://api.groq.com/openai/v1/models', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${groqApiKey}`
          }
        });
        
        if (!testResponse.ok) {
          console.error('API key test failed:', await testResponse.text());
          return { 
            text: "There's an issue with the API key. Please check the console for details.", 
            resources: null 
          };
        }
      } catch (testError) {
        console.error('API key test error:', testError);
      }

      // Format conversation history for the API
      const formattedHistory = conversationHistory.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));

      // Add system message to guide the AI
      const systemMessage = {
        role: 'system',
        content: `You are QuantBot, an AI assistant specialized in quantum computing and AI topics. 
        Your purpose is to help users learn about these technologies and provide accurate information.
        When discussing topics, mention that users can visit the topic page on the website for more information.
        DO NOT include any markdown links in your responses like [View Topic Name page](/topic/topic-slug).
        Available topics include: quantum-computing, machine-learning, deep-learning, nlp, llm, genai, artificial-intelligence, robotics, drones.
        Keep your responses concise but informative. If you don't know something, admit it and suggest related topics.`
      };

      // Prepare the API request
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${groqApiKey}`
        },
        body: JSON.stringify({
          model: 'llama3-70b-8192',
          messages: [systemMessage, ...formattedHistory, { role: 'user', content: userMessage }],
          temperature: 0.7,
          max_tokens: 1024
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to get response from Groq API');
      }

      const data = await response.json();
      let aiResponse = data.choices[0].message.content;

      // Find related resources if the user is asking for papers or resources
      const relatedResources = findTopicResources(userMessage);
      
      // Check if the response contains a topic link
      const topicLinkMatch = aiResponse.match(/\[View (.*?) page\]\(\/topic\/(.*?)\)/);
      let topicLink = undefined;
      
      if (topicLinkMatch) {
        topicLink = {
          title: topicLinkMatch[1],
          slug: topicLinkMatch[2]
        };
        
        // Remove the markdown link from the response text
        aiResponse = aiResponse.replace(/\[View (.*?) page\]\(\/topic\/(.*?)\)/, '');
      }
      
      // Check if user is asking for specific resource types
      const resourceTypes = [];
      const lcQuery = userMessage.toLowerCase();
      
      // More precise detection of resource type requests
      if (lcQuery.includes('video') || lcQuery.includes('videos') || lcQuery.includes('video tutorial')) {
        resourceTypes.push('videos');
      }
      if (lcQuery.includes('tutorial') || lcQuery.includes('tutorials') || lcQuery.includes('guide')) {
        resourceTypes.push('tutorials');
      }
      if (lcQuery.includes('course') || lcQuery.includes('courses') || lcQuery.includes('class')) {
        resourceTypes.push('courses');
      }
      if (lcQuery.includes('paper') || lcQuery.includes('papers') || lcQuery.includes('research')) {
        resourceTypes.push('papers');
      }
      
      // If no specific resource type is mentioned but the query is about resources in general
      if (resourceTypes.length === 0 && 
          (lcQuery.includes('resource') || lcQuery.includes('learn') || lcQuery.includes('study') || 
           lcQuery.includes('material') || lcQuery.includes('content'))) {
        // Don't automatically add all resource types - wait for specific requests
      }
      
      // Generate resource links if a topic is identified and resource types are requested
      let resourceLinks = undefined;
      if (topicLink && resourceTypes.length > 0) {
        resourceLinks = resourceTypes.map(type => ({
          type: type as 'papers' | 'tutorials' | 'courses' | 'videos',
          title: type.charAt(0).toUpperCase() + type.slice(1),
          slug: topicLink.slug
        }));
      }
      
      // Get topic introduction if a topic is identified
      let topicIntro = undefined;
      let topicInfo = undefined;
      
      // Check if user is asking for topic information
      const isAskingForTopicInfo = 
        lcQuery.includes('explain') || 
        lcQuery.includes('describe') || 
        lcQuery.includes('what is') || 
        lcQuery.includes('tell me about') || 
        lcQuery.includes('introduction') || 
        lcQuery.includes('intro') ||
        lcQuery.includes('overview');
      
      if (topicLink || isAskingForTopicInfo) {
        // Try to get topic from the link first
        const topicSlug = topicLink ? topicLink.slug : null;
        
        if (topicSlug) {
          topicInfo = getTopicInfo(topicSlug);
        } else {
          // If no topic link, try to extract topic from the query
          topicInfo = getTopicInfo(userMessage);
        }
        
        if (topicInfo) {
          topicIntro = topicInfo.description;
          // If we found a topic but no topic link was detected, create one
          if (!topicLink) {
            topicLink = {
              title: topicInfo.title,
              slug: topicInfo.slug
            };
          }
        }
      }

      return { 
        text: aiResponse, 
        resources: relatedResources,
        topicLink,
        resourceLinks,
        topicIntro,
        topicInfo
      };
    } catch (error) {
      console.error('Error calling Groq API:', error);
      // Log more detailed error information
      if (error instanceof Error) {
        console.error('Error details:', error.message);
        console.error('Error stack:', error.stack);
      }
      
      // Check if the error is related to the API key
      if (error instanceof Error && error.message.includes('401')) {
        return { 
          text: "Authentication error with the Groq API. Please check your API key.", 
          resources: null 
        };
      }
      
      return { 
        text: "I'm having trouble connecting to my AI brain right now. Please try again later or check your API key.", 
        resources: null 
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      // Call Groq API for response
      const response = await callGroqAPI(input, messages);
      
      // Simulate variable typing time
      const typingDelay = Math.max(700, Math.min(2000, response.text.length * 10));
      
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response.text,
          sender: 'bot',
          timestamp: new Date(),
          resources: response.resources || undefined,
          topicLink: response.topicLink,
          resourceLinks: response.resourceLinks,
          topicIntro: response.topicIntro
        };
        
        setMessages(prevMessages => [...prevMessages, botMessage]);
        setIsTyping(false);
      }, typingDelay);
    } catch (error) {
      console.error("Error generating response:", error);
      toast({
        title: "Error",
        description: "Failed to generate a response. Please try again.",
        variant: "destructive",
      });
      setIsTyping(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 bg-quantum-500 hover:bg-quantum-600 text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 z-50"
        aria-label="Open chat"
      >
        <Bot className="h-6 w-6" />
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-5 w-80 md:w-96 bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="bg-quantum-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Bot className="h-5 w-5 mr-2" />
                <h3 className="font-medium">QuantBot Assistant</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleChat}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                >
                  {isMinimized ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                <button
                  onClick={closeChat}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Chat content */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Messages */}
                  <div className="h-80 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.sender === 'user'
                              ? 'bg-quantum-500 text-white'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                          
                          {/* Topic Introduction */}
                          {message.topicIntro && (
                            <div className="mt-3 p-2 bg-white dark:bg-gray-700 rounded-md text-xs">
                              <p className="font-medium mb-1">About {message.topicLink?.title}:</p>
                              <p className="text-gray-700 dark:text-gray-300">{message.topicIntro}</p>
                            </div>
                          )}
                          
                          {/* Topic Link Button */}
                          {message.topicLink && (
                            <div className="mt-3">
                              <a
                                href={`/topic/${message.topicLink.slug}`}
                                className="inline-flex items-center px-3 py-1.5 bg-quantum-500 hover:bg-quantum-600 text-white text-xs font-medium rounded-md transition-colors"
                              >
                                <Book className="h-3 w-3 mr-1" />
                                View {message.topicLink.title} Page
                              </a>
                            </div>
                          )}
                          
                          {/* Resource Type Links */}
                          {message.resourceLinks && message.resourceLinks.length > 0 && (
                            <div className="mt-3">
                              <p className="text-xs font-medium mb-2">Browse {message.topicLink?.title} resources:</p>
                              <div className="flex flex-wrap gap-2">
                                {message.resourceLinks.map((link, index) => (
                                  <a
                                    key={index}
                                    href={`/${link.type}/${link.slug}`}
                                    className="inline-flex items-center px-3 py-1.5 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-xs font-medium rounded-md transition-colors border border-gray-200 dark:border-gray-600"
                                  >
                                    {link.type === 'papers' ? (
                                      <FileText className="h-3 w-3 mr-1 text-quantum-500" />
                                    ) : link.type === 'courses' ? (
                                      <Book className="h-3 w-3 mr-1 text-quantum-500" />
                                    ) : link.type === 'videos' ? (
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-quantum-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                      </svg>
                                    ) : (
                                      <Book className="h-3 w-3 mr-1 text-quantum-500" />
                                    )}
                                    Browse {link.title}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Resources section */}
                          {message.resources && message.resources.length > 0 && (
                            <div className="mt-3 border-t border-gray-200 dark:border-gray-700 pt-2">
                              <p className="text-xs font-medium mb-2">Recommended resources:</p>
                              <div className="space-y-2">
                                {message.resources.map((resource, index) => (
                                  <a
                                    key={index}
                                    href={resource.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-xs p-2 bg-white dark:bg-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                                  >
                                    {resource.type === 'paper' ? (
                                      <FileText className="h-3 w-3 mr-2 text-quantum-500" />
                                    ) : resource.type === 'course' ? (
                                      <Book className="h-3 w-3 mr-2 text-quantum-500" />
                                    ) : resource.type === 'video' ? (
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-quantum-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                      </svg>
                                    ) : (
                                      <Book className="h-3 w-3 mr-2 text-quantum-500" />
                                    )}
                                    <div>
                                      <span className="line-clamp-1 font-medium">{resource.title}</span>
                                      {resource.description && (
                                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 mt-0.5">{resource.description}</p>
                                      )}
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          <span className="text-xs opacity-70 mt-1 block text-right">
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about AI, quantum computing, etc..."
                        className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-quantum-500"
                      />
                      <Button
                        type="submit"
                        className="bg-quantum-500 hover:bg-quantum-600 text-white rounded-r-lg px-4"
                        disabled={!input.trim() || isTyping}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
