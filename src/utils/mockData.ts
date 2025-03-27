
export type Topic = {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  videoUrl: string;
  image: string;
  papers: Paper[];
  resources: Resource[];
};

export type Paper = {
  id: string;
  title: string;
  authors: string;
  year: string;
  link: string;
  abstract: string;
};

export type Resource = {
  id: string;
  title: string;
  type: 'Book' | 'Course' | 'Tutorial' | 'Article' | 'Video';
  link: string;
  description: string;
};

export const topics: Topic[] = [
  {
    id: '1',
    title: 'Machine Learning',
    slug: 'machine-learning',
    shortDescription: 'Algorithms that improve automatically through experience',
    description: 'Machine learning is a field of inquiry devoted to understanding and building methods that "learn" – that is, methods that leverage data to improve performance on some set of tasks. It is seen as a part of artificial intelligence.',
    videoUrl: 'https://www.youtube.com/embed/9sQEP87_RYs',
    image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    papers: [
      {
        id: 'ml-paper-1',
        title: 'A Few Useful Things to Know About Machine Learning',
        authors: 'Pedro Domingos',
        year: '2012',
        link: 'https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf',
        abstract: 'This paper provides a very high-level overview of machine learning concepts and best practices.'
      },
      {
        id: 'ml-paper-2',
        title: 'Machine Learning: Trends, Perspectives, and Prospects',
        authors: 'M. I. Jordan, T. M. Mitchell',
        year: '2015',
        link: '#',
        abstract: 'A survey of machine learning and where it may be headed.'
      }
    ],
    resources: [
      {
        id: 'ml-resource-1',
        title: 'Machine Learning Coursera Course',
        type: 'Course',
        link: 'https://www.coursera.org/learn/machine-learning',
        description: 'Stanford University\'s famous course by Andrew Ng'
      },
      {
        id: 'ml-resource-2',
        title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow',
        type: 'Book',
        link: '#',
        description: 'Concepts, tools, and techniques to build intelligent systems'
      }
    ]
  },
  {
    id: '2',
    title: 'Deep Learning',
    slug: 'deep-learning',
    shortDescription: 'Neural networks with multiple layers that learn representations',
    description: 'Deep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.',
    videoUrl: 'https://www.youtube.com/embed/5tvA8ByFCdY',
    image: 'https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    papers: [
      {
        id: 'dl-paper-1',
        title: 'Deep Learning',
        authors: 'Y. LeCun, Y. Bengio, G. Hinton',
        year: '2015',
        link: 'https://www.nature.com/articles/nature14539',
        abstract: 'Review paper that presents the basics of deep learning.'
      },
      {
        id: 'dl-paper-2',
        title: 'ImageNet Classification with Deep Convolutional Neural Networks',
        authors: 'A. Krizhevsky, I. Sutskever, G. E. Hinton',
        year: '2012',
        link: '#',
        abstract: 'The paper that rekindled interest in CNNs and deep learning.'
      }
    ],
    resources: [
      {
        id: 'dl-resource-1',
        title: 'Deep Learning Specialization',
        type: 'Course',
        link: 'https://www.coursera.org/specializations/deep-learning',
        description: 'A series of courses teaching the foundations of deep learning'
      },
      {
        id: 'dl-resource-2',
        title: 'Deep Learning',
        type: 'Book',
        link: 'https://www.deeplearningbook.org/',
        description: 'The "Bible" of deep learning by Goodfellow, Bengio, and Courville'
      }
    ]
  },
  {
    id: '3',
    title: 'Natural Language Processing',
    slug: 'nlp',
    shortDescription: 'AI that enables computers to understand and generate human language',
    description: 'Natural language processing (NLP) is a subfield of artificial intelligence concerned with the interactions between computers and human language, in particular how to program computers to process and analyze large amounts of natural language data.',
    videoUrl: 'https://www.youtube.com/embed/fOvTtapxa9c',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    papers: [
      {
        id: 'nlp-paper-1',
        title: 'Attention Is All You Need',
        authors: 'A. Vaswani et al.',
        year: '2017',
        link: 'https://arxiv.org/abs/1706.03762',
        abstract: 'Introduces the Transformer architecture which revolutionized NLP.'
      },
      {
        id: 'nlp-paper-2',
        title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
        authors: 'J. Devlin, M. Chang, K. Lee, K. Toutanova',
        year: '2018',
        link: '#',
        abstract: 'Introduces BERT, which advanced the state of the art in many NLP tasks.'
      }
    ],
    resources: [
      {
        id: 'nlp-resource-1',
        title: 'Natural Language Processing with Deep Learning',
        type: 'Course',
        link: 'http://web.stanford.edu/class/cs224n/',
        description: 'Stanford\'s famous NLP course by Christopher Manning'
      },
      {
        id: 'nlp-resource-2',
        title: 'Speech and Language Processing',
        type: 'Book',
        link: 'https://web.stanford.edu/~jurafsky/slp3/',
        description: 'Comprehensive textbook on NLP by Jurafsky and Martin'
      }
    ]
  },
  {
    id: '4',
    title: 'Robotics',
    slug: 'robotics',
    shortDescription: 'Design, construction, and use of machines to perform tasks',
    description: 'Robotics is an interdisciplinary field that integrates computer science and engineering. Robotics involves design, construction, operation, and use of robots, as well as computer systems for their perception, control, sensory feedback, and information processing.',
    videoUrl: 'https://www.youtube.com/embed/fn3KWM1kuAw',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80',
    papers: [
      {
        id: 'rob-paper-1',
        title: 'A Roadmap for US Robotics: From Internet to Robotics',
        authors: 'H. Christensen et al.',
        year: '2016',
        link: '#',
        abstract: 'A look at the future of robotics research and applications.'
      },
      {
        id: 'rob-paper-2',
        title: 'Learning Human-like Hand-Eye Coordination using Deep Reinforcement Learning',
        authors: 'S. Levine et al.',
        year: '2016',
        link: '#',
        abstract: 'Using deep RL to teach robots fine motor skills.'
      }
    ],
    resources: [
      {
        id: 'rob-resource-1',
        title: 'Modern Robotics: Mechanics, Planning, and Control',
        type: 'Book',
        link: 'http://hades.mech.northwestern.edu/index.php/Modern_Robotics',
        description: 'A comprehensive introduction to robotics'
      },
      {
        id: 'rob-resource-2',
        title: 'Robotics: Aerial Robotics',
        type: 'Course',
        link: 'https://www.coursera.org/learn/robotics-flight',
        description: 'Learn to develop dynamic models and controllers for flying robots'
      }
    ]
  },
  {
    id: '5',
    title: 'Drones',
    slug: 'drones',
    shortDescription: 'Unmanned aerial vehicles with autonomous capabilities',
    description: 'Drones, or unmanned aerial vehicles (UAVs), are aircraft without human pilots on board. They can be remotely controlled or fly autonomously through software-controlled flight plans, working in conjunction with onboard sensors and GPS.',
    videoUrl: 'https://www.youtube.com/embed/QjfF7DIEmi4',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    papers: [
      {
        id: 'drone-paper-1',
        title: 'Vision-Based Navigation for Autonomous Drones',
        authors: 'D. Scaramuzza et al.',
        year: '2014',
        link: '#',
        abstract: 'Overview of vision-based navigation systems for drones.'
      },
      {
        id: 'drone-paper-2',
        title: 'Drone-carried Networks: Challenges, Solutions, and Future Directions',
        authors: 'M. Mozaffari et al.',
        year: '2019',
        link: '#',
        abstract: 'A look at using drones for wireless communication networks.'
      }
    ],
    resources: [
      {
        id: 'drone-resource-1',
        title: 'DIY Drones',
        type: 'Tutorial',
        link: 'https://diydrones.com/',
        description: 'Community of drone enthusiasts sharing knowledge'
      },
      {
        id: 'drone-resource-2',
        title: 'Drone Programming with Python',
        type: 'Course',
        link: '#',
        description: 'Learn to program autonomous flight paths with Python'
      }
    ]
  },
  {
    id: '6',
    title: 'Quantum Computing',
    slug: 'quantum-computing',
    shortDescription: 'Computing using quantum-mechanical phenomena',
    description: 'Quantum computing is a type of computation that harnesses the collective properties of quantum states, such as superposition, interference, and entanglement, to perform calculations. It uses quantum bits or qubits which can exist in multiple states simultaneously.',
    videoUrl: 'https://www.youtube.com/embed/Lbndu5EIWvI',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    papers: [
      {
        id: 'qc-paper-1',
        title: 'Quantum Supremacy Using a Programmable Superconducting Processor',
        authors: 'Google AI Quantum and Collaborators',
        year: '2019',
        link: 'https://www.nature.com/articles/s41586-019-1666-5',
        abstract: 'Google\'s quantum supremacy experiment.'
      },
      {
        id: 'qc-paper-2',
        title: 'Quantum Computing in the NISQ era and beyond',
        authors: 'J. Preskill',
        year: '2018',
        link: '#',
        abstract: 'Overview of near-term quantum computing and its limitations.'
      }
    ],
    resources: [
      {
        id: 'qc-resource-1',
        title: 'Quantum Computing for the Very Curious',
        type: 'Article',
        link: 'https://quantum.country/qcvc',
        description: 'Accessible introduction to quantum computing concepts'
      },
      {
        id: 'qc-resource-2',
        title: 'Quantum Mechanics and Quantum Computation',
        type: 'Course',
        link: 'https://www.edx.org/learn/quantum-mechanics/university-of-california-berkeley-quantum-mechanics-and-quantum-computation',
        description: 'Berkeley course on quantum computing foundations'
      }
    ]
  },
  {
    id: '7',
    title: 'Generative AI',
    slug: 'genai',
    shortDescription: 'AI systems that can generate new content and ideas',
    description: 'Generative AI refers to artificial intelligence systems that can generate new content such as text, images, audio, and video that resembles human-created work. These models use deep learning architectures to identify patterns in existing data and create new outputs that reflect those patterns.',
    videoUrl: 'https://www.youtube.com/embed/3oVc3pWJ3bw',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    papers: [
      {
        id: 'genai-paper-1',
        title: 'Generative Adversarial Networks',
        authors: 'Ian J. Goodfellow et al.',
        year: '2014',
        link: 'https://arxiv.org/abs/1406.2661',
        abstract: 'The original paper introducing GANs, a framework for training generative models.'
      },
      {
        id: 'genai-paper-2',
        title: 'DALL·E 2: Hierarchical Text-Conditional Image Generation with CLIP Latents',
        authors: 'A. Ramesh et al.',
        year: '2022',
        link: 'https://arxiv.org/abs/2204.06125',
        abstract: 'Research paper on DALL·E 2, a system for creating images from text descriptions.'
      }
    ],
    resources: [
      {
        id: 'genai-resource-1',
        title: 'Generative Deep Learning',
        type: 'Book',
        link: 'https://www.oreilly.com/library/view/generative-deep-learning/9781492041931/',
        description: 'Comprehensive guide to building generative models with practical examples'
      },
      {
        id: 'genai-resource-2',
        title: 'Stable Diffusion Tutorial',
        type: 'Tutorial',
        link: 'https://huggingface.co/docs/diffusers/main/en/tutorials/stable_diffusion',
        description: 'Learn how to use Stable Diffusion for image generation'
      }
    ]
  },
  {
    id: '8',
    title: 'Large Language Models',
    slug: 'llms',
    shortDescription: 'Advanced AI models that understand and generate human language',
    description: 'Large Language Models (LLMs) are advanced AI systems trained on vast amounts of text data that can understand, generate, and manipulate human language. These models have billions or even trillions of parameters and can perform various language tasks from translation to creative writing.',
    videoUrl: 'https://www.youtube.com/embed/zjkBMFhNj_g',
    image: 'https://images.unsplash.com/photo-1677442135968-6d89469c5f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    papers: [
      {
        id: 'llm-paper-1',
        title: 'Attention Is All You Need',
        authors: 'A. Vaswani et al.',
        year: '2017',
        link: 'https://arxiv.org/abs/1706.03762',
        abstract: 'Introduces the Transformer architecture that forms the foundation of modern LLMs.'
      },
      {
        id: 'llm-paper-2',
        title: 'Training language models to follow instructions with human feedback',
        authors: 'Long Ouyang et al.',
        year: '2022',
        link: 'https://arxiv.org/abs/2203.02155',
        abstract: 'Describes the RLHF technique used to align language models with human preferences.'
      }
    ],
    resources: [
      {
        id: 'llm-resource-1',
        title: 'Hugging Face Transformers Library',
        type: 'Tutorial',
        link: 'https://huggingface.co/transformers/',
        description: 'State-of-the-art framework for working with pre-trained language models'
      },
      {
        id: 'llm-resource-2',
        title: 'Building LLM applications for production',
        type: 'Course',
        link: 'https://www.deeplearning.ai/short-courses/building-applications-with-vector-databases/',
        description: 'Learn how to build LLM-powered applications that can scale'
      }
    ]
  }
];

export const getAllTopics = () => {
  return topics;
};

export const getTopicBySlug = (slug: string) => {
  return topics.find(topic => topic.slug === slug);
};

export const searchContent = (query: string) => {
  query = query.toLowerCase();
  const results = {
    topics: topics.filter(
      topic => 
        topic.title.toLowerCase().includes(query) || 
        topic.description.toLowerCase().includes(query)
    ),
    papers: topics.flatMap(topic => 
      topic.papers.filter(
        paper => 
          paper.title.toLowerCase().includes(query) || 
          paper.abstract.toLowerCase().includes(query)
      ).map(paper => ({ ...paper, topicSlug: topic.slug }))
    ),
    resources: topics.flatMap(topic => 
      topic.resources.filter(
        resource => 
          resource.title.toLowerCase().includes(query) || 
          resource.description.toLowerCase().includes(query)
      ).map(resource => ({ ...resource, topicSlug: topic.slug }))
    )
  };
  
  return results;
};
