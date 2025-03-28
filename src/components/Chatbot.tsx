
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Sample AI knowledge base for common questions
const knowledgeBase = {
  "what is quantum computing": "Quantum computing is a type of computation that harnesses quantum-mechanical phenomena like superposition and entanglement to perform calculations. Unlike classical computers that use bits (0 or 1), quantum computers use quantum bits or qubits that can exist in multiple states simultaneously.",
  "explain machine learning": "Machine learning is a subset of artificial intelligence that enables systems to learn from data, identify patterns, and make decisions with minimal human intervention. It involves algorithms that improve automatically through experience.",
  "what are large language models": "Large Language Models (LLMs) are advanced AI systems trained on vast amounts of text data that can understand, generate, and manipulate human language. Examples include GPT-4, Claude, and Llama. They can perform various tasks from translation to creative writing and coding.",
  "what is generative ai": "Generative AI refers to artificial intelligence systems that can generate new content such as text, images, audio, and video. These models learn patterns from existing data and create new outputs that reflect those patterns. Examples include DALL-E for images and GPT for text.",
  "what is deep learning": "Deep learning is a subset of machine learning that uses neural networks with multiple layers (deep neural networks) to analyze various factors of data. It's particularly powerful for processing unstructured data like images, sound, and text.",
  "what are neural networks": "Neural networks are computing systems inspired by the human brain. They consist of interconnected nodes or 'neurons' that process information. These networks can learn to perform tasks by analyzing examples, without being explicitly programmed for the specific task.",
  "what is nlp": "Natural Language Processing (NLP) is a field of AI that focuses on the interaction between computers and human language. It enables machines to read, understand, and derive meaning from human languages, facilitating tasks like translation, sentiment analysis, and question answering."
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm QuantBot, your AI assistant for quantum computing and AI topics. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

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

  // Function to generate AI response based on user input
  const generateResponse = async (userMessage: string) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Check knowledge base for exact matches
    for (const [key, value] of Object.entries(knowledgeBase)) {
      if (lowerCaseMessage.includes(key)) {
        return value;
      }
    }
    
    // Handle greetings
    if (lowerCaseMessage.match(/^(hi|hello|hey|greetings)/i)) {
      return "Hello! How can I help you with quantum computing or AI today?";
    }
    
    // Handle thanks
    if (lowerCaseMessage.match(/(thank you|thanks)/i)) {
      return "You're welcome! Feel free to ask if you have more questions.";
    }

    // Handle questions about specific topics
    if (lowerCaseMessage.includes("quantum")) {
      return "Quantum computing is a fascinating field that uses quantum mechanics principles to process information. It has potential applications in cryptography, optimization problems, and simulating quantum systems.";
    }
    
    if (lowerCaseMessage.includes("machine learning") || lowerCaseMessage.includes("ml")) {
      return "Machine learning is a field of study that gives computers the ability to learn without being explicitly programmed. It focuses on developing algorithms that can access data and use it to learn for themselves.";
    }

    if (lowerCaseMessage.includes("llm") || lowerCaseMessage.includes("language model")) {
      return "Large Language Models (LLMs) are sophisticated AI systems trained on vast amounts of text data. They can understand context, generate human-like text, and perform various language tasks from translation to creative writing.";
    }

    if (lowerCaseMessage.includes("genai") || lowerCaseMessage.includes("generative")) {
      return "Generative AI refers to AI systems that can create new content like text, images, audio, and video. These systems learn patterns from existing data and generate new outputs that reflect those patterns.";
    }

    // Default responses for unknown queries
    const defaultResponses = [
      "That's an interesting question about emerging technologies. While I don't have the specific answer, I recommend checking our resources section for more information.",
      "I'm still learning about that topic. You might find more details in our research papers section on the website.",
      "Great question! This is a complex area of research. I suggest exploring our educational resources for more in-depth information.",
      "I don't have complete information on that yet. Our website has curated resources that might help you understand this topic better.",
      "This is an evolving field of study. Check out our latest research papers for the most up-to-date information on this topic."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
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
      // Generate response based on user input
      const response = await generateResponse(input);
      
      // Simulate variable typing time
      const typingDelay = Math.max(700, Math.min(2000, response.length * 10));
      
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response,
          sender: 'bot',
          timestamp: new Date(),
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
