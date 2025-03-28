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
  videoTutorials: VideoTutorial[];
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

export type VideoTutorial = {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
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
      },
      {
        id: 'ml-paper-3',
        title: 'Explaining and Harnessing Adversarial Examples',
        authors: 'Ian J. Goodfellow, Jonathon Shlens, Christian Szegedy',
        year: '2015',
        link: 'https://arxiv.org/abs/1412.6572',
        abstract: 'This paper explains why neural networks are vulnerable to adversarial examples and proposes a fast method of generating them.'
      },
      {
        id: 'ml-paper-4',
        title: 'XGBoost: A Scalable Tree Boosting System',
        authors: 'Tianqi Chen, Carlos Guestrin',
        year: '2016',
        link: 'https://arxiv.org/abs/1603.02754',
        abstract: 'This paper describes the XGBoost system, which is a highly effective and widely used gradient boosting implementation.'
      },
      {
        id: 'ml-paper-5',
        title: 'The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks',
        authors: 'Jonathan Frankle, Michael Carbin',
        year: '2019',
        link: 'https://arxiv.org/abs/1803.03635',
        abstract: 'This paper introduces the concept that within large neural networks exist smaller subnetworks that can be trained to similar performance.'
      },
      {
        id: 'ml-paper-6',
        title: 'Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks',
        authors: 'Shaoqing Ren, Kaiming He, Ross Girshick, Jian Sun',
        year: '2016',
        link: 'https://arxiv.org/abs/1506.01497',
        abstract: 'A seminal paper in the field of object detection, introducing a faster and more accurate approach for detecting objects in images.'
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
      },
      {
        id: 'ml-resource-3',
        title: 'Fast.ai: Practical Deep Learning for Coders',
        type: 'Course',
        link: 'https://www.fast.ai/',
        description: 'A practical approach to deep learning with a top-down teaching method'
      },
      {
        id: 'ml-resource-4',
        title: 'Machine Learning Mastery',
        type: 'Tutorial',
        link: 'https://machinelearningmastery.com/start-here/',
        description: 'A comprehensive set of tutorials covering various machine learning concepts and applications'
      },
      {
        id: 'ml-resource-5',
        title: 'Pattern Recognition and Machine Learning',
        type: 'Book',
        link: '#',
        description: 'Christopher Bishop\'s comprehensive textbook on machine learning and pattern recognition techniques'
      },
      {
        id: 'ml-resource-6',
        title: 'Applied Machine Learning',
        type: 'Course',
        link: 'https://www.youtube.com/playlist?list=PL_pVmAaAnxIQGzQS2oI3OWEPT-dpmwTfA',
        description: 'Cornell University\'s course focusing on practical applications of machine learning'
      }
    ],
    videoTutorials: [
      {
        id: 'ml-video-1',
        title: 'Machine Learning Fundamentals',
        duration: '45:22',
        thumbnail: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/9sQEP87_RYs',
        description: 'An introduction to the core concepts of machine learning with practical examples.'
      },
      {
        id: 'ml-video-2',
        title: 'Neural Networks Explained',
        duration: '38:15',
        thumbnail: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
        description: 'A visual and intuitive explanation of neural networks and how they work.'
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
      },
      {
        id: 'dl-paper-3',
        title: 'Generative Adversarial Nets',
        authors: 'Ian J. Goodfellow et al.',
        year: '2014',
        link: 'https://arxiv.org/abs/1406.2661',
        abstract: 'This paper introduces GANs, which create a framework for training generative models through an adversarial process.'
      },
      {
        id: 'dl-paper-4',
        title: 'Adam: A Method for Stochastic Optimization',
        authors: 'Diederik P. Kingma, Jimmy Ba',
        year: '2015',
        link: 'https://arxiv.org/abs/1412.6980',
        abstract: 'This paper presents Adam, an algorithm for first-order gradient-based optimization of stochastic objective functions.'
      },
      {
        id: 'dl-paper-5',
        title: 'Dropout: A Simple Way to Prevent Neural Networks from Overfitting',
        authors: 'Nitish Srivastava et al.',
        year: '2014',
        link: 'https://www.jmlr.org/papers/volume15/srivastava14a/srivastava14a.pdf',
        abstract: 'This paper presents dropout, a technique for addressing the problem of overfitting in neural networks.'
      },
      {
        id: 'dl-paper-6',
        title: 'U-Net: Convolutional Networks for Biomedical Image Segmentation',
        authors: 'Olaf Ronneberger, Philipp Fischer, Thomas Brox',
        year: '2015',
        link: 'https://arxiv.org/abs/1505.04597',
        abstract: 'This paper introduces the U-Net architecture, which has become a standard for image segmentation tasks, especially in medical imaging.'
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
      },
      {
        id: 'dl-resource-3',
        title: 'MIT 6.S191: Introduction to Deep Learning',
        type: 'Course',
        link: 'http://introtodeeplearning.com/',
        description: 'MIT\'s introductory course to deep learning methods and applications'
      },
      {
        id: 'dl-resource-4',
        title: 'TensorFlow Tutorials',
        type: 'Tutorial',
        link: 'https://www.tensorflow.org/tutorials',
        description: 'Official TensorFlow tutorials covering various deep learning applications'
      },
      {
        id: 'dl-resource-5',
        title: 'PyTorch for Deep Learning: Zero to GANs',
        type: 'Course',
        link: 'https://jovian.ai/learn/deep-learning-with-pytorch-zero-to-gans',
        description: 'A beginner-friendly course on deep learning using PyTorch'
      },
      {
        id: 'dl-resource-6',
        title: 'Neural Networks and Deep Learning',
        type: 'Book',
        link: 'http://neuralnetworksanddeeplearning.com/',
        description: 'A free online book explaining neural networks and deep learning concepts with clear explanations'
      }
    ],
    videoTutorials: [
      {
        id: 'dl-video-1',
        title: 'Deep Learning Crash Course',
        duration: '52:10',
        thumbnail: 'https://images.unsplash.com/photo-1522094626083-4d9be62319aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/VyWAvY2CF9c',
        description: 'A comprehensive crash course covering key deep learning concepts and architectures.'
      },
      {
        id: 'dl-video-2',
        title: 'Building Neural Networks with PyTorch',
        duration: '41:28',
        thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/c36lUUr864M',
        description: 'Learn how to build and train neural networks using the PyTorch framework.'
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
      },
      {
        id: 'nlp-paper-3',
        title: 'GPT-3: Language Models are Few-Shot Learners',
        authors: 'Tom B. Brown et al.',
        year: '2020',
        link: 'https://arxiv.org/abs/2005.14165',
        abstract: 'Introduces GPT-3, demonstrating that language models can perform tasks without task-specific training examples.'
      },
      {
        id: 'nlp-paper-4',
        title: 'Distributed Representations of Words and Phrases and their Compositionality',
        authors: 'Tomas Mikolov et al.',
        year: '2013',
        link: 'https://arxiv.org/abs/1310.4546',
        abstract: 'Introduces word2vec, a method for learning high-quality word vectors from large datasets.'
      },
      {
        id: 'nlp-paper-5',
        title: 'GloVe: Global Vectors for Word Representation',
        authors: 'Jeffrey Pennington, Richard Socher, Christopher D. Manning',
        year: '2014',
        link: 'https://nlp.stanford.edu/pubs/glove.pdf',
        abstract: 'Presents GloVe, an unsupervised learning algorithm for generating vector representations of words.'
      },
      {
        id: 'nlp-paper-6',
        title: 'Sequence to Sequence Learning with Neural Networks',
        authors: 'Ilya Sutskever, Oriol Vinyals, Quoc V. Le',
        year: '2014',
        link: 'https://arxiv.org/abs/1409.3215',
        abstract: 'Introduces a general sequence learning approach using LSTM networks that can map sequences to sequences.'
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
      },
      {
        id: 'nlp-resource-3',
        title: 'Hugging Face Course',
        type: 'Tutorial',
        link: 'https://huggingface.co/course',
        description: 'Learn how to use the Hugging Face ecosystem for NLP tasks'
      },
      {
        id: 'nlp-resource-4',
        title: 'Natural Language Processing Specialization',
        type: 'Course',
        link: 'https://www.coursera.org/specializations/natural-language-processing',
        description: 'DeepLearning.AI\'s specialization covering modern NLP techniques'
      },
      {
        id: 'nlp-resource-5',
        title: 'Transformers for Natural Language Processing',
        type: 'Book',
        link: '#',
        description: 'A practical guide to implementing transformer models for NLP tasks'
      },
      {
        id: 'nlp-resource-6',
        title: 'Applied Text Mining and Analytics',
        type: 'Course',
        link: 'https://www.coursera.org/learn/text-mining-analytics',
        description: 'Course on practical text mining and analytics for business applications'
      }
    ],
    videoTutorials: [
      {
        id: 'nlp-video-1',
        title: 'Introduction to NLP and Transformers',
        duration: '49:35',
        thumbnail: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/xI0HHN5XKDo',
        description: 'Learn the fundamentals of NLP and how transformer models have revolutionized the field.'
      },
      {
        id: 'nlp-video-2',
        title: 'Building a Chatbot with Python',
        duration: '37:42',
        thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/Da-iHgrmHYg',
        description: 'A step-by-step tutorial on creating your own chatbot using Python and NLP techniques.'
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
      },
      {
        id: 'rob-paper-3',
        title: 'VisuoMotor Control: Learning to Manipulate by Seeing and Feeling',
        authors: 'J. Bohg et al.',
        year: '2019',
        link: 'https://arxiv.org/abs/1901.11103',
        abstract: 'This paper explores how visual and tactile perception can be integrated for robotic manipulation.'
      },
      {
        id: 'rob-paper-4',
        title: 'Dexterous Manipulation with Deep Reinforcement Learning: Efficient, General, and Low-Cost',
        authors: 'A. Kumar et al.',
        year: '2021',
        link: 'https://arxiv.org/abs/2004.00704',
        abstract: 'Demonstrates how robots can learn dexterous manipulation skills through reinforcement learning.'
      },
      {
        id: 'rob-paper-5',
        title: 'Learning Quadrupedal Locomotion over Challenging Terrain',
        authors: 'J. Hwangbo et al.',
        year: '2019',
        link: 'https://www.science.org/doi/10.1126/scirobotics.aau5872',
        abstract: 'This paper shows how legged robots can learn to navigate difficult terrains using reinforcement learning.'
      },
      {
        id: 'rob-paper-6',
        title: 'SLAM: Simultaneous Localization and Mapping: Part I',
        authors: 'H. Durrant-Whyte, T. Bailey',
        year: '2006',
        link: 'https://ieeexplore.ieee.org/document/1638022',
        abstract: 'A foundational paper on SLAM techniques used for robot navigation and mapping.'
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
      },
      {
        id: 'rob-resource-3',
        title: 'ROS (Robot Operating System) Tutorials',
        type: 'Tutorial',
        link: 'http://wiki.ros.org/ROS/Tutorials',
        description: 'Hands-on tutorials for the Robot Operating System framework'
      },
      {
        id: 'rob-resource-4',
        title: 'Robot Academy',
        type: 'Course',
        link: 'https://robotacademy.net.au/',
        description: 'Free video lessons on robotics and related mathematics by QUT'
      },
      {
        id: 'rob-resource-5',
        title: 'Probabilistic Robotics',
        type: 'Book',
        link: '#',
        description: 'A comprehensive reference on probabilistic techniques in robotics by Sebastian Thrun'
      },
      {
        id: 'rob-resource-6',
        title: 'MIT 6.141: Robotics Systems and Science',
        type: 'Course',
        link: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-141-robotics-systems-and-science-spring-2005/',
        description: 'MIT\'s course covering the fundamentals of robotics systems and control'
      }
    ],
    videoTutorials: [
      {
        id: 'rob-video-1',
        title: 'Introduction to Robotics',
        duration: '53:18',
        thumbnail: 'https://images.unsplash.com/photo-1561144257-e32e8271dce9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/fn3KWM1kuAw',
        description: 'A comprehensive introduction to robotics principles, mechanics, and control systems.'
      },
      {
        id: 'rob-video-2',
        title: 'Building Your First Robot with Arduino',
        duration: '42:15',
        thumbnail: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/QjfF7DIEmi4',
        description: 'Step-by-step guide to building a simple robot using Arduino microcontrollers.'
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
      },
      {
        id: 'drone-paper-3',
        title: 'Autonomous Drone Racing: A Survey',
        authors: 'Philipp Foehn et al.',
        year: '2021',
        link: 'https://arxiv.org/abs/2103.08624',
        abstract: 'This survey reviews the state of the art in autonomous drone racing and identifies key research challenges.'
      },
      {
        id: 'drone-paper-4',
        title: 'Deep Reinforcement Learning for Autonomous Drone Racing',
        authors: 'Yunlong Song et al.',
        year: '2021',
        link: 'https://arxiv.org/abs/2103.08624',
        abstract: 'This paper explores reinforcement learning approaches for autonomous drone racing through challenging environments.'
      },
      {
        id: 'drone-paper-5',
        title: 'Design, Modeling and Control of a UAV for Pollination',
        authors: 'J. Kim et al.',
        year: '2018',
        link: '#',
        abstract: 'This paper presents a drone system designed for assisting in crop pollination to address declining bee populations.'
      },
      {
        id: 'drone-paper-6',
        title: 'Autonomous UAV Navigation Using Reinforcement Learning',
        authors: 'K. Kang, S. Belkhale, G. Kahn et al.',
        year: '2019',
        link: 'https://arxiv.org/abs/1901.00533',
        abstract: 'This paper demonstrates how UAVs can learn navigation policies through reinforcement learning techniques.'
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
      },
      {
        id: 'drone-resource-3',
        title: 'Unmanned Aircraft Systems',
        type: 'Book',
        link: '#',
        description: 'Comprehensive textbook on drone technology, design, and applications'
      },
      {
        id: 'drone-resource-4',
        title: 'Aerial Robotics Specialization',
        type: 'Course',
        link: 'https://www.coursera.org/specializations/robotics',
        description: 'University of Pennsylvania\'s specialization on drone mechanics and control'
      },
      {
        id: 'drone-resource-5',
        title: 'Programming Drones with Tello',
        type: 'Tutorial',
        link: 'https://github.com/damiafuentes/DJITelloPy',
        description: 'Python library and tutorials for programming Tello drones'
      },
      {
        id: 'drone-resource-6',
        title: 'FAA Part 107 Commercial Drone License Preparation',
        type: 'Course',
        link: 'https://www.faa.gov/uas/commercial_operators',
        description: 'Resources for preparing for the FAA\'s commercial drone pilot certification'
      }
    ],
    videoTutorials: [
      {
        id: 'drone-video-1',
        title: 'Drone Flight Basics',
        duration: '38:22',
        thumbnail: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/QjfF7DIEmi4',
        description: 'Learn the fundamentals of drone flight controls, safety, and basic maneuvers.'
      },
      {
        id: 'drone-video-2',
        title: 'Advanced Drone Programming',
        duration: '45:10',
        thumbnail: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/xR0kJqcwxMQ',
        description: 'Explore advanced programming techniques for autonomous drone navigation and obstacle avoidance.'
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
      },
      {
        id: 'qc-paper-3',
        title: 'Demonstrating a Quantum Advantage',
        authors: 'F. Arute et al.',
        year: '2019',
        link: 'https://www.nature.com/articles/s41586-019-1666-5',
        abstract: 'This paper demonstrates quantum advantage where a quantum processor performed a target computation significantly faster than the world\'s fastest supercomputer.'
      },
      {
        id: 'qc-paper-4',
        title: 'Quantum Error Correction for Beginners',
        authors: 'S. J. Devitt, K. Nemoto, W. J. Munro',
        year: '2013',
        link: 'https://arxiv.org/abs/0905.2794',
        abstract: 'An introduction to quantum error correction, a critical component for practical quantum computing.'
      },
      {
        id: 'qc-paper-5',
        title: 'Quantum Machine Learning',
        authors: 'J. Biamonte, P. Wittek, et al.',
        year: '2017',
        link: 'https://www.nature.com/articles/nature23474',
        abstract: 'This review discusses the intersection of quantum computing and machine learning, highlighting potential advantages.'
      },
      {
        id: 'qc-paper-6',
        title: 'Blueprint for a Scalable Photonic Fault-Tolerant Quantum Computer',
        authors: 'T. R. Tan et al.',
        year: '2020',
        link: 'https://arxiv.org/abs/2010.02905',
        abstract: 'This paper outlines a blueprint for building a large-scale fault-tolerant quantum computer using photonic qubits.'
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
      },
      {
        id: 'qc-resource-3',
        title: 'Qiskit Textbook',
        type: 'Tutorial',
        link: 'https://qiskit.org/textbook/preface.html',
        description: 'Open-source textbook for learning quantum computing through Qiskit'
      },
      {
        id: 'qc-resource-4',
        title: 'Quantum Computing: An Applied Approach',
        type: 'Book',
        link: '#',
        description: 'Practical textbook on quantum computing algorithms and applications'
      },
      {
        id: 'qc-resource-5',
        title: 'Introduction to Quantum Computing',
        type: 'Course',
        link: 'https://www.coursera.org/learn/quantum-computing-algorithms',
        description: 'St. Petersburg State University\'s course covering quantum computing fundamentals'
      },
      {
        id: 'qc-resource-6',
        title: 'Microsoft Quantum Documentation',
        type: 'Tutorial',
        link: 'https://docs.microsoft.com/en-us/quantum/',
        description: 'Microsoft\'s extensive documentation and tutorials for quantum development'
      }
    ],
    videoTutorials: [
      {
        id: 'qc-video-1',
        title: 'Quantum Computing Explained',
        duration: '47:15',
        thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/Lbndu5EIWvI',
        description: 'A beginner-friendly introduction to quantum computing concepts and applications.'
      },
      {
        id: 'qc-video-2',
        title: 'Programming Quantum Computers',
        duration: '39:42',
        thumbnail: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/F_Riqjdh2oM',
        description: 'Learn the basics of programming quantum algorithms using popular quantum computing frameworks.'
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
      },
      {
        id: 'genai-paper-3',
        title: 'High-Resolution Image Synthesis with Latent Diffusion Models',
        authors: 'Robin Rombach et al.',
        year: '2022',
        link: 'https://arxiv.org/abs/2112.10752',
        abstract: 'This paper introduces Stable Diffusion, a latent diffusion model for high-resolution image synthesis.'
      },
      {
        id: 'genai-paper-4',
        title: 'StyleGAN: A Style-Based Generator Architecture for Generative Adversarial Networks',
        authors: 'T. Karras, S. Laine, T. Aila',
        year: '2019',
        link: 'https://arxiv.org/abs/1812.04948',
        abstract: 'This paper presents StyleGAN, a generative adversarial network that enables high-quality image generation with explicit control of different visual features.'
      },
      {
        id: 'genai-paper-5',
        title: 'MuseNet: Generating Musical Compositions with Deep Neural Networks',
        authors: 'OpenAI',
        year: '2019',
        link: 'https://openai.com/research/musenet',
        abstract: 'This paper introduces MuseNet, a deep neural network that can generate 4-minute musical compositions with 10 different instruments.'
      },
      {
        id: 'genai-paper-6',
        title: 'MusicLM: Generating Music From Text',
        authors: 'Andrea Agostinelli et al.',
        year: '2023',
        link: 'https://arxiv.org/abs/2301.11325',
        abstract: 'This paper presents a model for generating high-fidelity music from text descriptions, trained on a large dataset of music-text pairs.'
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
      },
      {
        id: 'genai-resource-3',
        title: 'GANs Specialization',
        type: 'Course',
        link: 'https://www.coursera.org/specializations/generative-adversarial-networks-gans',
        description: 'DeepLearning.AI\'s specialization on Generative Adversarial Networks'
      },
      {
        id: 'genai-resource-4',
        title: 'Deep Learning for Audio Synthesis',
        type: 'Tutorial',
        link: 'https://github.com/magenta/magenta',
        description: 'Google Magenta\'s tutorials for generating music and audio with deep learning'
      },
      {
        id: 'genai-resource-5',
        title: 'The Illustrated Stable Diffusion',
        type: 'Article',
        link: 'https://jalammar.github.io/illustrated-stable-diffusion/',
        description: 'Visual explanation of how Stable Diffusion works for image generation'
      },
      {
        id: 'genai-resource-6',
        title: 'Advanced GANs Course',
        type: 'Course',
        link: '#',
        description: 'In-depth course on advanced techniques for Generative Adversarial Networks'
      }
    ],
    videoTutorials: [
      {
        id: 'genai-video-1',
        title: 'Introduction to Generative AI',
        duration: '51:30',
        thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/3oVc3pWJ3bw',
        description: 'An overview of generative AI technologies and their applications in various fields.'
      },
      {
        id: 'genai-video-2',
        title: 'Creating Art with Stable Diffusion',
        duration: '35:45',
        thumbnail: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/a5KaVYxQb8Q',
        description: 'Learn how to generate stunning artwork using Stable Diffusion and prompt engineering techniques.'
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
      },
      {
        id: 'llm-paper-3',
        title: 'GPT-4 Technical Report',
        authors: 'OpenAI',
        year: '2023',
        link: 'https://arxiv.org/abs/2303.08774',
        abstract: 'Technical details on GPT-4, a large multimodal model capable of sophisticated reasoning across image and text inputs.'
      },
      {
        id: 'llm-paper-4',
        title: 'Language Models are Few-Shot Learners',
        authors: 'Tom B. Brown et al.',
        year: '2020',
        link: 'https://arxiv.org/abs/2005.14165',
        abstract: 'Introduces GPT-3, demonstrating that very large language models can perform tasks without task-specific training data.'
      },
      {
        id: 'llm-paper-5',
        title: 'Constitutional AI: Harmlessness from AI Feedback',
        authors: 'Yuntao Bai et al.',
        year: '2022',
        link: 'https://arxiv.org/abs/2212.08073',
        abstract: 'Introduces a method for training AI systems to be helpful, harmless, and honest without direct human feedback.'
      },
      {
        id: 'llm-paper-6',
        title: 'Llama 2: Open Foundation and Fine-Tuned Chat Models',
        authors: 'Hugo Touvron et al.',
        year: '2023',
        link: 'https://arxiv.org/abs/2307.09288',
        abstract: 'Presents Llama 2, an open-source large language model available for both research and commercial use.'
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
      },
      {
        id: 'llm-resource-3',
        title: 'Natural Language Processing with Transformers',
        type: 'Book',
        link: 'https://www.oreilly.com/library/view/natural-language-processing/9781098136789/',
        description: 'Comprehensive guide to using transformer models for various NLP tasks'
      },
      {
        id: 'llm-resource-4',
        title: 'LangChain Documentation',
        type: 'Tutorial',
        link: 'https://python.langchain.com/docs/get_started/introduction.html',
        description: 'Framework for developing applications powered by language models'
      },
      {
        id: 'llm-resource-5',
        title: 'Prompt Engineering Guide',
        type: 'Tutorial',
        link: 'https://platform.openai.com/docs/guides/prompt-engineering',
        description: 'Techniques and best practices for effective prompt engineering with LLMs'
      },
      {
        id: 'llm-resource-6',
        title: 'ChatGPT Prompt Engineering for Developers',
        type: 'Course',
        link: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/',
        description: 'DeepLearning.AI and OpenAI\'s course on prompt engineering techniques'
      }
    ],
    videoTutorials: [
      {
        id: 'llm-video-1',
        title: 'Understanding Large Language Models',
        duration: '48:20',
        thumbnail: 'https://images.unsplash.com/photo-1677442135968-6d89469c5f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/zjkBMFhNj_g',
        description: 'A deep dive into how large language models work and how they\'re changing AI applications.'
      },
      {
        id: 'llm-video-2',
        title: 'Building Applications with LLMs',
        duration: '37:15',
        thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        videoUrl: 'https://www.youtube.com/embed/pxqFN3WbxPI',
        description: 'Learn how to integrate large language models into practical applications using modern frameworks.'
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
    ),
    videoTutorials: topics.flatMap(topic => 
      topic.videoTutorials.filter(
        video => 
          video.title.toLowerCase().includes(query) || 
          video.description.toLowerCase().includes(query)
      ).map(video => ({ ...video, topicSlug: topic.slug }))
    )
  };
  
  return results;
};
