import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Video, ExternalLink, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import { getAllTopics } from '../utils/mockData';
import { Topic, VideoTutorial } from '../types';
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
    
    // Video mapping with unique, topic-specific links for each category
    const videoMapping = {
      'quantum-computing': {
        fundamentals: {
          link: 'https://www.youtube.com/watch?v=QuR969uMICM',
          title: 'A Beginners Guide to Quantum Computing | Shohini Ghose',
          description: 'Learn the basics of quantum computing, including qubits, quantum gates, and the principles of superposition and entanglement.',
          duration: '10:04',
          level: 'Beginner'
        },
        advanced: {
          link: 'https://www.youthttps://www.youtube.com/playlist?list=PLxP0p--aBHmIe--9rczWe4AZmw03e2bz0ube.com/watch?v=aircAruvnKk',
          title: 'Quantum Computing - YouTube Playlist',
          description: 'Deep dive into advanced quantum algorithms including Shor\'s algorithm for factoring and Grover\'s algorithm for search.',
          duration: '1:15:20',
          level: 'Advanced'
        },
        project: {
          link: 'https://www.youtube.com/watch?v=https://www.youtube.com/playlist?list=PLJk_IGUjQllcYPHhuzIUZMsu9hD48BiK0',
          title: 'Quantum Computing Projects - YouTube Playlist',
          description: 'Hands-on project to build a quantum circuit simulator using Python and Qiskit.',
          duration: '2:30:00',
          level: 'Intermediate'
        },
        bestPractices: {
          link: 'https://https://www.youtube.com/playlist?list=PLOFEBzvs-VvoZxe2ClFy27yOt6VzsTEJK.youtube.com/watch?v=JhHMJCUmq28',
          title: ' Quantum Computing in Practice - YouTube Playlist',
          description: 'Learn industry best practices for quantum computing, including error correction techniques and circuit optimization.',
          duration: '35:45',
          level: 'Intermediate'
        },
        caseStudies: {
          link: 'https://www.https://www.youtube.com/watch?v=Hd-IGvuARfE.com/watch?v=JhHMJCUmq28',
          title: 'Laying the Groundwork for Quantum Powered Use Cases',
          description: 'Real-world applications of quantum computing in finance and pharmaceutical research.',
          duration: '1:00:00',
          level: 'Advanced'
        },
        workshop: {
          link: 'https://www.youtube.com/playlist?list=PLo0alAq_baXV1M2Kcb1orZF7kjXFMqWnU',
          title: 'Quantum Computing: Seminars & Workshops - YouTube Playlist',
          description: 'Interactive workshop using IBM Q Experience to build and run quantum circuits.',
          duration: '1:45:00',
          level: 'Intermediate'
        },
        applications: {
          link: 'https://www.youtube.com/watch?v=H4P_Od3sCJQ',
          title: 'Quantum Computing Applications & Landscape | Intro to Quantum',
          description: 'Explore how quantum computing is transforming cryptography and machine learning.',
          duration: '50:15',
          level: 'Intermediate'
        },
        trends: {
          link: 'https://www.youtube.com/watch?v=hEnyzdmKmYk',
          title: ' Quantum Computing: The Future of Supercomputers!',
          description: 'Discussion of current trends and future developments in quantum computing.',
          duration: '40:30',
          level: 'Advanced'
        },
        quickStart: {
          link: 'https://www.youtube.com/watch?v=bMfGJqNdVdM',
          title: 'Quantum Computing Explained: Beginners Guide',
          description: 'Get started with quantum computing in under an hour with this comprehensive guide.',
          duration: '55:00',
          level: 'Beginner'
        },
        expertPanel: {
          link: 'https://https://www.youtube.com/watch?v=ZKzuEUTSABs.youtube.com/watch?v=JhHMJCUmq28',
          title: '(Full Panel Discussion): Quantum Computing For Business',
          description: 'Industry experts discuss the challenges and solutions in quantum computing.',
          duration: '1:03:00',
          level: 'Advanced'
        }
      },
      'machine-learning': {
        fundamentals: {
          link: 'https://www.youtube.com/playlist?list=PLOU2XLYxmsII9mzQ-Xxug4l2o04JBrkLV',
          title: 'Machine Learning Foundations by Google Developers',
          description: 'Introduction to machine learning concepts, including supervised and unsupervised learning approaches.',
          duration: '45:30',
          level: 'Beginner'
        },
        advanced: {
          link: 'https://www.youtube.com/playlist?list=PLemsnf33Vij4-kv-JTjDthaGUYUnQbbws',
          title: 'Advanced Machine Learning Lecture Series',
          description: 'Deep dive into advanced machine learning techniques including ensemble methods and neural networks.',
          duration: '1:15:20',
          level: 'Advanced'
        },
        project: {
          link: 'https://www.youtube.com/playlist?list=PLfFghEzKVmjvuSA67LszN1dZ-Dd_pkus6',
          title: 'Machine Learning Projects for Beginners',
          description: 'Build a complete image classification system using machine learning from data preparation to deployment.',
          duration: '2:30:00',
          level: 'Intermediate'
        },
        bestPractices: {
          link: 'https://www.youtube.com/watch?v=ouvGV2YZEEM',
          title: ' Machine Learning Best Practices - Stanford CS221',
          description: 'Learn industry best practices for feature engineering, model selection, and evaluation.',
          duration: '35:45',
          level: 'Intermediate'
        },
        caseStudies: {
          link: 'https://www.youtube.com/watch?v=k8ArxyFLsF0',
          title: '12 Real World Case Studies for Machine Learninge',
          description: 'Real-world applications of machine learning in healthcare diagnosis and financial fraud detection.',
          duration: '1:00:00',
          level: 'Advanced'
        },
        workshop: {
          link: 'https://www.youtube.com/playlist?list=PLoROMvodv4rPh6wa6PGcHH6vMG9sEIPxL',
          title: 'Machine Learning Explainability Workshop at Stanford',
          description: 'Hands-on workshop to build a recommendation system using collaborative filtering.',
          duration: '1:45:00',
          level: 'Intermediate'
        },
        applications: {
          link: 'https://www.youtube.com/watch?v=HKcO3-6TYr0',
          title: 'Top 10 Applications of Machine Learning',
          description: 'Explore applications of machine learning in computer vision and natural language processing.',
          duration: '50:15',
          level: 'Intermediate'
        },
        trends: {
          link: 'https://www.youtube.com/watch?v=x3viyHMzyc8',
          title: 'Machine Learning Trends Shaping 2025!',
          description: 'Discussion of emerging trends in machine learning including AutoML and federated learning.',
          duration: '40:30',
          level: 'Advanced'
        },
        quickStart: {
          link: 'https://www.youtube.com/watch?v=CXrQoxqQKC0',
          title: 'Master Machine Learning in 20 Minutes',
          description: 'Get started with machine learning using Python in under an hour.',
          duration: '55:00',
          level: 'Beginner'
        },
        expertPanel: {
          link: 'https://www.youtube.com/watch?v=EoY1oaNQoYw',
          title: 'Panel Discussion: Exploring the Future of Machine Learning and AI',
          description: 'Industry experts discuss ethical considerations and responsible AI practices.',
          duration: '1:20:00',
          level: 'Advanced'
        }
      },
      'deep-learning': {
        fundamentals: {
          link: 'https://www.youtube.com/watch?v=ErnWZxJovaM',
          title: 'Deep Learning Fundamentals: Neural Networks and Backpropagation',
          description: 'Introduction to deep learning concepts, including neural networks and backpropagation.',
          duration: '45:30',
          level: 'Beginner'
        },
        advanced: {
          link: 'PLJV_el3uVTsPMxPbjeX7PicgWbY7F8wW9',
          title: 'Advanced Deep Learning: CNNs, RNNs, and Transformers',
          description: 'Deep dive into advanced deep learning architectures including CNNs, RNNs, and transformers.',
          duration: '1:15:20',
          level: 'Advanced'
        },
        project: {
          link: 'https://www.youtube.com/playlist?list=PLdF3rLdF4ICQgPC9q-fD7LKqiDSKBoGH6',
          title: 'Deep Learning Project: Building a Text Generation Model',
          description: 'Build a text generation model using LSTM or transformer architectures.',
          duration: '2:30:00',
          level: 'Intermediate'
        },
        bestPractices: {
          link: 'https://www.youtube.com/watch?v=Ia1mwAvuJYI',
          title: 'Deep Learning Best Practices: Hyperparameter Tuning and Regularization',
          description: 'Learn best practices for hyperparameter tuning, regularization, and model optimization.',
          duration: '35:45',
          level: 'Intermediate'
        },
        caseStudies: {
          link: 'https://www.youtube.com/watch?v=-bvTzZCEOdM',
          title: 'Deep Learning Case Studies: Autonomous Vehicles and Medical Imaging',
          description: 'Real-world applications of deep learning in autonomous vehicles and medical imaging.',
          duration: '1:00:00',
          level: 'Advanced'
        },
        workshop: {
          link: 'https://www.youtube.com/watch?v=xJUt7njMyXw',
          title: 'Deep Learning Workshop: Building a Computer Vision System',
          description: 'Hands-on workshop to build a computer vision system using convolutional neural networks.',
          duration: '1:45:00',
          level: 'Intermediate'
        },
        applications: {
          link: 'https://www.youtube.com/watch?v=IM9ANAbufYM',
          title: 'Deep Learning Applications: Generative AI and Reinforcement Learning',
          description: 'Explore applications of deep learning in generative AI and reinforcement learning.',
          duration: '50:15',
          level: 'Intermediate'
        },
        trends: {
          link: 'https://www.youtube.com/watch?v=nb-XPFIq7MQ',
          title: 'Future of Deep Learning: Few-shot Learning and Neural Architecture Search',
          description: 'Discussion of emerging trends in deep learning including few-shot learning and NAS.',
          duration: '40:30',
          level: 'Advanced'
        },
        quickStart: {
          link: 'https://www.youtube.com/watch?v=OIenNRt2bjg',
          title: 'Quick Start Guide to Deep Learning with TensorFlow',
          description: 'Get started with deep learning using TensorFlow in under an hour.',
          duration: '55:00',
          level: 'Beginner'
        },
        expertPanel: {
          link: 'https://www.youtube.com/playlist?list=PL0x86ZW374m2g6EtEvVzjO_YBf0DSNYwZ',
          title: 'Deep Learning Expert Panel: Scaling and Deployment Challenges',
          description: 'Industry experts discuss challenges in scaling and deploying deep learning models.',
          duration: '1:20:00',
          level: 'Advanced'
        }
      },

      'llms': {
        fundamentals: {
          link: 'https://www.youtube.com/watch?v=eLmrK_WV-sE',
          title: 'Large Language Models Fundamentals: Architecture and Training',
          description: 'Introduction to large language models, including transformer architecture and training approaches.',
          duration: '06:00',
          level: 'Beginner'
        },
        advanced: {
          link: 'https://www.youtube.com/watch?v=AUFiWgsSHlU',
          title: 'Advanced LLM Techniques: Fine-tuning and Prompt Engineering',
          description: 'Deep dive into advanced techniques for fine-tuning LLMs and effective prompt engineering.',
          duration: '10:00',
          level: 'Advanced'
        },
        project: {
          link: 'https://www.youtube.com/playlist?list=PL5dTjWUk_cPYWTCvGBjSjBE-oJYfXqi4o',
          title: 'LLM Project: Building a Custom Chatbot with GPT',
          description: 'Build a custom chatbot using GPT and fine-tuning techniques.',
          duration: '2:30:00',
          level: 'Intermediate'
        },
        bestPractices: {
          link: 'https://www.youtube.com/watch?v=sh5GrLobjXU',
          title: 'LLM Best Practices: Evaluation Metrics and Bias Mitigation',
          description: 'Learn best practices for evaluating LLMs and mitigating bias in language models.',
          duration: '1:38:00',
          level: 'Intermediate'
        },
        caseStudies: {
          link: 'https://www.youtube.com/watch?v=90E_8EqNvXI',
          title: 'LLM Case Studies: Content Generation and Code Assistance',
          description: 'Real-world applications of LLMs in content generation and code assistance.',
          duration: '10:00',
          level: 'Advanced'
        },
        workshop: {
          link: 'https://www.youtube.com/playlist?list=PLB1nTQo4_y6ukBQYuQm0ZAmuj51hVMKrC',
          title: 'LLM Workshop: Building a Document Summarization System',
          description: 'Hands-on workshop to build a document summarization system using LLMs.',
          duration: 'each around 30 min',
          level: 'Intermediate'
        },
        applications: {
          link: 'https://www.youtube.com/watch?v=86855_NUzNQ',
          title: 'LLM Applications: Multimodal Models and Agent Systems',
          description: 'Explore applications of LLMs in multimodal systems and AI agents.',
          duration: '15:00',
          level: 'Intermediate'
        },
        trends: {
          link: 'https://www.youtube.com/watch?v=vRTcE19M-KE',
          title: 'Future of LLMs: Scaling Laws and Emergent Capabilities',
          description: 'Discussion of emerging trends in LLMs including scaling laws and emergent capabilities.',
          duration: '01:00:00',
          level: 'Advanced'
        },
        quickStart: {
          link: 'https://www.youtube.com/watch?v=tFHeUSJAYbE',
          title: 'Quick Start Guide to Using LLMs with Hugging Face',
          description: 'Get started with using LLMs through Hugging Face in under an hour.',
          duration: '15:00',
          level: 'Beginner'
        },
        expertPanel: {
          link: 'https://www.youtube.com/watch?v=yEo_yYBsPJo',
          title: 'LLM Expert Panel: Ethical Considerations and Future Directions',
          description: 'Industry experts discuss ethical considerations and future directions for LLMs.',
          duration: '46:00',
          level: 'Advanced'
        }
      },
      'genai': {
        fundamentals: {
          link: 'https://www.youtube.com/watch?v=1fQ1DDMmiqo',
          title: 'Generative AI Fundamentals: GANs, VAEs, and Diffusion Models',
          description: 'Introduction to generative AI concepts, including GANs, VAEs, and diffusion models.',
          duration: '45:30',
          level: 'Beginner'
        },
        advanced: {
          link: 'https://www.youtube.com/watch?v=r1agLDMVyjk',
          title: 'Advanced Generative AI: Stable Diffusion and DALL-E',
          description: 'Deep dive into advanced generative AI models including Stable Diffusion and DALL-E.',
          duration: '1:15:20',
          level: 'Advanced'
        },
        project: {
          link: 'https://www.youtube.com/playlist?list=PLhr0Ua8H1x-K7UMXXeSfjULEIBCE1FVd1',
          title: 'Generative AI Project: Building an Image Generation System',
          description: 'Build an image generation system using Stable Diffusion or similar models.',
          duration: '2:30:00',
          level: 'Intermediate'
        },
        bestPractices: {
          link: 'https://www.youtube.com/watch?v=LMh4BNmTj0o',
          title: 'Generative AI Best Practices: Prompt Engineering and Output Control',
          description: 'Learn best practices for prompt engineering and controlling generative AI outputs.',
          duration: '35:45',
          level: 'Intermediate'
        },
        caseStudies: {
          link: 'https://www.youtube.com/watch?v=rMFTwABa3zI',
          title: 'Generative AI Case Studies: Art, Design, and Content Creation',
          description: 'Real-world applications of generative AI in art, design, and content creation.',
          duration: '1:00:00',
          level: 'Advanced'
        },
        workshop: {
          link: 'https://www.youtube.com/watch?v=YnDLBoUmOmE',
          title: 'Generative AI Workshop: Creating Custom Image Generators',
          description: 'Hands-on workshop to create custom image generators using generative AI models.',
          duration: '1:45:00',
          level: 'Intermediate'
        },
        applications: {
          link: 'https://www.youtube.com/watch?v=BZ0ZEsV4c1A',
          title: 'Generative AI Applications: Text-to-Image and Text-to-Video',
          description: 'Explore applications of generative AI in text-to-image and text-to-video generation.',
          duration: '50:15',
          level: 'Intermediate'
        },
        trends: {
          link: 'https://www.youtube.com/watch?v=IX33yLzg3Mg',
          title: 'Future of Generative AI: Multimodal Models and Creative AI',
          description: 'Discussion of emerging trends in generative AI including multimodal models.',
          duration: '40:30',
          level: 'Advanced'
        },
        quickStart: {
          link: 'https://www.youtube.com/watch?v=gk6GJukCDLg',
          title: 'Quick Start Guide to Generative AI with Midjourney',
          description: 'Get started with generative AI using Midjourney in under an hour.',
          duration: '55:00',
          level: 'Beginner'
        },
        expertPanel: {
          link: 'https://www.youtube.com/watch?v=sloVdTXOcW0',
          title: 'Generative AI Expert Panel: Copyright and Ethical Considerations',
          description: 'Industry experts discuss copyright issues and ethical considerations in generative AI.',
          duration: '1:20:00',
          level: 'Advanced'
        }
      },
      'nlp': {
        fundamentals: {
          link: 'https://www.youtube.com/playlist?list=PLEiEAq2VkUUKMh75ffZlaTkEfPaqur33a',
          title: 'Artificial Intelligence Fundamentals: History and Core Concepts',
          description: 'Introduction to AI concepts, including its history, core principles, and key approaches.',
          duration: '45:30',
          level: 'Beginner'
        },
        advanced: {
          link: 'https://www.youtube.com/watch?v=6NeTO61qc4M',
          title: 'Advanced AI: Knowledge Representation and Reasoning',
          description: 'Deep dive into advanced AI concepts including knowledge representation and reasoning systems.',
          duration: '1:15:20',
          level: 'Advanced'
        },
        project: {
          link: 'https://www.youtube.com/playlist?list=PLdF3rLdF4ICQ4-fSEucMqoqMz1tEyjp9q',
          title: 'AI Project: Building an Expert System',
          description: 'Build an expert system for a specific domain using rule-based reasoning.',
          duration: '2:30:00',
          level: 'Intermediate'
        },
        bestPractices: {
          link: 'https://www.youtube.com/watch?v=X2vAabgKiuM',
          title: 'AI Best Practices: System Design and Evaluation',
          description: 'Learn best practices for designing and evaluating AI systems.',
          duration: '35:45',
          level: 'Intermediate'
        },
        caseStudies: {
          link: 'https://www.youtube.com/watch?v=Y2WZEV-Ds-o',
          title: 'AI Case Studies: Healthcare Diagnostics and Autonomous Systems',
          description: 'Real-world applications of AI in healthcare diagnostics and autonomous systems.',
          duration: '1:00:00',
          level: 'Advanced'
        },
        workshop: {
          link: 'https://www.youtube.com/watch?v=G6wdZQw4d8Y',
          title: 'AI Workshop: Building a Decision Support System',
          description: 'Hands-on workshop to build a decision support system using AI techniques.',
          duration: '1:45:00',
          level: 'Intermediate'
        },
        applications: {
          link: 'https://www.youtube.com/watch?v=6I-Alfkr5K4',
          title: 'AI Applications: Computer Vision and Natural Language Processing',
          description: 'Explore applications of AI in computer vision and natural language processing.',
          duration: '50:15',
          level: 'Intermediate'
        },
        trends: {
          link: 'https://www.youtube.com/watch?v=Y2WZEV-Ds-o',
          title: 'Future of AI: AGI and Superintelligence',
          description: 'Discussion of emerging trends in AI including the path to AGI.',
          duration: '40:30',
          level: 'Advanced'
        },
        quickStart: {
          link: 'https://www.youtube.com/watch?v=CMrHM8a3hqw',
          title: 'Quick Start Guide to AI with Python',
          description: 'Get started with AI using Python in under an hour.',
          duration: '55:00',
          level: 'Beginner'
        },
        expertPanel: {
          link: 'https://www.youtube.com/playlist?list=PLLssT5z_DsK8BdawOVCCaTCO99Ya58ryR',
          title: 'AI Expert Panel: Ethics and the Future of Human-AI Collaboration',
          description: 'Industry experts discuss ethical considerations and the future of human-AI collaboration.',
          duration: '1:20:00',
          level: 'Advanced'
        }
      },

      'robotics': {
        fundamentals: {
          link: 'https://www.youtube.com/watch?v=K_xIJBlbjg4',
          title: 'Robotics Fundamentals: Kinematics and Control Systems',
          description: 'Introduction to robotics concepts, including kinematics, dynamics, and control systems.',
          duration: '08:00',
          level: 'Beginner'
        },
        advanced: {
          link: 'https://www.youtube.com/playlist?list=PL02X57p4MMQiX0-T2TV8cZ-KvQ1R9as0k',
          title: 'Advanced Robotics: SLAM and Path Planning',
          description: 'Deep dive into advanced robotics concepts including SLAM and path planning algorithms.',
          duration: 'Multiple lectures, each around 1 hour',
          level: 'Advanced'
        },
        project: {
          link: 'https://www.youtube.com/@RoboticProjects',
          title: 'Robotics Project: Building a Mobile Robot',
          description: 'Build a mobile robot with navigation capabilities using ROS.',
          duration: 'varied per project',
          level: 'Intermediate'
        },
        bestPractices: {
          link: 'https://www.youtube.com/watch?v=RXuqtbfijm8',
          title: 'Robotics Best Practices: Safety and Testing',
          description: 'Learn best practices for ensuring safety and testing robotic systems.',
          duration: '16:00',
          level: 'Intermediate'
        },
        caseStudies: {
          link: 'https://www.youtube.com/playlist?list=PLw6btU39ORE5mgbiAIyM-PTg02DFi1MNs',
          title: 'Robotics Case Studies: Industrial Automation and Healthcare',
          description: 'Real-world applications of robotics in industrial automation and healthcare.',
          duration: 'each around 5-10 min',
          level: 'Advanced'
        },
        workshop: {
          link: 'https://www.youtube.com/watch?v=eqXQ80vlgqE',
          title: 'Robotics Workshop: Programming a Robotic Arm',
          description: 'Hands-on workshop to program a robotic arm for pick-and-place tasks.',
          duration: '21:00',
          level: 'Intermediate'
        },
        applications: {
          link: 'https://www.youtube.com/watch?v=BE6lbnfDdrU',
          title: 'Robotics Applications: Autonomous Vehicles and Drones',
          description: 'Explore applications of robotics in autonomous vehicles and drones.',
          duration: '19:00',
          level: 'Intermediate'
        },
        trends: {
          link: 'https://www.youtube.com/watch?v=F2LdzAc84ZM',
          title: 'Future of Robotics: Soft Robotics and Human-Robot Interaction',
          description: 'Discussion of emerging trends in robotics including soft robotics and HRI.',
          duration: '01:00',
          level: 'Advanced'
        },
        quickStart: {
          link: 'https://www.youtube.com/watch?v=v7c6raCx_cY',
          title: 'Quick Start Guide to Robotics with ROS',
          description: 'Get started with robotics using ROS in under an hour.',
          duration: '16:00',
          level: 'Beginner'
        },
        expertPanel: {
          link: 'https://www.youtube.com/watch?v=EPlbd8IlO-Y',
          title: 'Robotics Expert Panel: Challenges in Real-World Deployment',
          description: 'Industry experts discuss challenges in deploying robotics systems in real-world environments.',
          duration: '1:25:00',
          level: 'Advanced'
        }
      },
      'drones': {
        fundamentals: {
          link: 'https://www.youtube.com/watch?v=1tnc0Vx3sXU',
          title: 'Drone Fundamentals: Flight Dynamics and Control',
          description: 'Introduction to drone concepts, including flight dynamics, control systems, and regulations.',
          duration: '12:00',
          level: 'Beginner'
        },
        advanced: {
          link: 'https://www.youtube.com/watch?v=okpWXLlckOY',
          title: 'Advanced Drone Technology: Autonomous Navigation and Swarm Intelligence',
          description: 'Deep dive into advanced drone technologies including autonomous navigation and swarm intelligence.',
          duration: '10:00',
          level: 'Advanced'
        },
        project: {
          link: 'https://www.youtube.com/watch?v=BelUkME1wxM',
          title: 'Drone Project: Building a Custom Drone with Advanced Features',
          description: 'Build a custom drone with advanced features like autonomous navigation and payload delivery.',
          duration: '14:00',
          level: 'Intermediate'
        },
        bestPractices: {
          link: 'https://www.youtube.com/watch?v=y08Kg9HyavM',
          title: 'Drone Best Practices: Safety, Maintenance, and Regulations',
          description: 'Learn best practices for drone safety, maintenance, and compliance with regulations.',
          duration: '17:00',
          level: 'Intermediate'
        },
        caseStudies: {
          link: 'https://www.youtube.com/watch?v=tdLoHlbY554',
          title: 'Drone Case Studies: Agriculture, Construction, and Emergency Response',
          description: 'Real-world applications of drones in agriculture, construction, and emergency response.',
          duration: '02:00',
          level: 'Advanced'
        },
        workshop: {
          link: 'https://www.youtube.com/c/Dronebotworkshop1',
          title: 'Drone Workshop: Programming Autonomous Flight Patterns',
          description: 'Hands-on workshop to program autonomous flight patterns for drones.',
          duration: 'varies',
          level: 'Intermediate'
        },
        applications: {
          link: 'https://www.youtube.com/watch?v=vDepNAeNDjQ',
          title: 'Drone Applications: Mapping, Inspection, and Delivery',
          description: 'Explore applications of drones in mapping, inspection, and delivery services.',
          duration: '01:06',
          level: 'Intermediate'
        },
        trends: {
          link: 'https://www.youtube.com/watch?v=ecbs2NXjzp8',
          title: 'Future of Drones: Urban Air Mobility and Advanced Sensors',
          description: 'Discussion of emerging trends in drones including urban air mobility and advanced sensors.',
          duration: '07:00',
          level: 'Advanced'
        },
        quickStart: {
          link: 'https://www.youtube.com/watch?v=sLfEyQcbVD0',
          title: 'Quick Start Guide to Drone Piloting',
          description: 'Get started with drone piloting in under an hour.',
          duration: '07:00',
          level: 'Beginner'
        },
        expertPanel: {
          link: 'https://www.youtube.com/watch?v=q0k2WzxMTuY',
          title: 'Drone Expert Panel: Integration with AI and IoT',
          description: 'Industry experts discuss the integration of drones with AI and IoT technologies.',
          duration: '57:00',
          level: 'Advanced'
        }
      }
    };
    
    // If a topic is selected, filter videos for that topic
    if (topicSlug) {
      const topic = allTopics.find(t => t.slug === topicSlug);
      if (topic) {
        // Get video data for this topic
        const topicVideoData = videoMapping[topicSlug as keyof typeof videoMapping] || videoMapping['machine-learning'];
        
        // Sample video tutorials for each topic
        const topicVideos = [
          {
            id: '1',
            title: `${topic.title} Fundamentals`,
            description: 'Learn the basics and core concepts of ' + topic.title,
            link: topicVideoData.fundamentals.link,
            duration: topicVideoData.fundamentals.duration,
            level: topicVideoData.fundamentals.level
          },
          {
            id: '2',
            title: `Advanced ${topic.title} Techniques`,
            description: 'Deep dive into advanced concepts and applications',
            link: topicVideoData.advanced.link,
            duration: topicVideoData.advanced.duration,
            level: topicVideoData.advanced.level
          },
          {
            id: '3',
            title: `${topic.title} Project Tutorial`,
            description: 'Build a complete project using ' + topic.title,
            link: topicVideoData.project.link,
            duration: topicVideoData.project.duration,
            level: topicVideoData.project.level
          },
          {
            id: '4',
            title: `${topic.title} Best Practices`,
            description: 'Learn industry best practices and standards',
            link: topicVideoData.bestPractices.link,
            duration: topicVideoData.bestPractices.duration,
            level: topicVideoData.bestPractices.level
          },
          {
            id: '5',
            title: `${topic.title} Case Studies`,
            description: 'Real-world applications and case studies',
            link: topicVideoData.caseStudies.link,
            duration: topicVideoData.caseStudies.duration,
            level: topicVideoData.caseStudies.level
          },
          {
            id: '6',
            title: `${topic.title} Hands-on Workshop`,
            description: 'Interactive workshop with practical exercises',
            link: topicVideoData.workshop.link,
            duration: topicVideoData.workshop.duration,
            level: topicVideoData.workshop.level
          },
          {
            id: '7',
            title: `${topic.title} Industry Applications`,
            description: 'How ' + topic.title + ' is used in various industries',
            link: topicVideoData.applications.link,
            duration: topicVideoData.applications.duration,
            level: topicVideoData.applications.level
          },
          {
            id: '8',
            title: `${topic.title} Future Trends`,
            description: 'Emerging trends and future developments in ' + topic.title,
            link: topicVideoData.trends.link,
            duration: topicVideoData.trends.duration,
            level: topicVideoData.trends.level
          },
          {
            id: '9',
            title: `${topic.title} Quick Start Guide`,
            description: 'Get started with ' + topic.title + ' in under an hour',
            link: topicVideoData.quickStart.link,
            duration: topicVideoData.quickStart.duration,
            level: topicVideoData.quickStart.level
          },
          {
            id: '10',
            title: `${topic.title} Expert Panel Discussion`,
            description: 'Industry experts discuss ' + topic.title + ' challenges and solutions',
            link: topicVideoData.expertPanel.link,
            duration: topicVideoData.expertPanel.duration,
            level: topicVideoData.expertPanel.level
          }
        ];
        setFilteredVideos(topicVideos);
      }
    } else {
      // If no topic selected, show all videos
      const allVideos = allTopics.flatMap(topic => {
        const topicVideoData = videoMapping[topic.slug as keyof typeof videoMapping] || videoMapping['machine-learning'];
        
        return [
          {
            id: `${topic.slug}-1`,
            title: `${topic.title} Fundamentals`,
            description: 'Learn the basics and core concepts of ' + topic.title,
            link: topicVideoData.fundamentals.link,
            duration: topicVideoData.fundamentals.duration,
            level: topicVideoData.fundamentals.level,
            topic: topic.title
          },
          {
            id: `${topic.slug}-2`,
            title: `Advanced ${topic.title} Techniques`,
            description: 'Deep dive into advanced concepts and applications',
            link: topicVideoData.advanced.link,
            duration: topicVideoData.advanced.duration,
            level: topicVideoData.advanced.level,
            topic: topic.title
          },
          {
            id: `${topic.slug}-3`,
            title: `${topic.title} Project Tutorial`,
            description: 'Build a complete project using ' + topic.title,
            link: topicVideoData.project.link,
            duration: topicVideoData.project.duration,
            level: topicVideoData.project.level,
            topic: topic.title
          },
          {
            id: `${topic.slug}-4`,
            title: `${topic.title} Best Practices`,
            description: 'Learn industry best practices and standards',
            link: topicVideoData.bestPractices.link,
            duration: topicVideoData.bestPractices.duration,
            level: topicVideoData.bestPractices.level,
            topic: topic.title
          },
          {
            id: `${topic.slug}-5`,
            title: `${topic.title} Case Studies`,
            description: 'Real-world applications and case studies',
            link: topicVideoData.caseStudies.link,
            duration: topicVideoData.caseStudies.duration,
            level: topicVideoData.caseStudies.level,
            topic: topic.title
          }
        ];
      });
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
