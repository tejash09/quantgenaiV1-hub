import { Question } from '../components/Quiz';

export const machineLearningQuestions: Question[] = [
  {
    id: 1,
    question: 'What is the main goal of supervised learning?',
    options: [
      'To find patterns in unlabeled data',
      'To learn from labeled data and make predictions',
      'To learn through trial and error',
      'To reduce the dimensionality of data'
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: 'Which of the following is an example of unsupervised learning?',
    options: [
      'Spam email detection',
      'Customer segmentation',
      'Image classification',
      'Sentiment analysis'
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: 'What is overfitting in machine learning?',
    options: [
      'When a model performs well on training data but poorly on new data',
      'When a model fails to learn the underlying pattern in the data',
      'When a model takes too long to train',
      'When a model has too few parameters'
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: 'What is the purpose of feature engineering?',
    options: [
      'To reduce the number of features in a dataset',
      'To select and transform input variables to improve model performance',
      'To visualize the data',
      'To clean the dataset'
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: 'Which evaluation metric is best for imbalanced classification problems?',
    options: [
      'Accuracy',
      'Precision',
      'F1-score',
      'Mean squared error'
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: 'What is the main advantage of using cross-validation?',
    options: [
      'It reduces training time',
      'It provides a more reliable estimate of model performance',
      'It automatically selects the best features',
      'It prevents overfitting'
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: 'Which algorithm is commonly used for binary classification?',
    options: [
      'K-means clustering',
      'Linear regression',
      'Logistic regression',
      'Principal Component Analysis'
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: 'What is the purpose of regularization in machine learning?',
    options: [
      'To increase model complexity',
      'To prevent overfitting by adding a penalty term',
      'To speed up training',
      'To improve feature selection'
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: 'Which of the following is a common activation function in neural networks?',
    options: [
      'Sigmoid',
      'Mean squared error',
      'Gradient descent',
      'K-nearest neighbors'
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: 'What is the main difference between batch gradient descent and stochastic gradient descent?',
    options: [
      'Batch gradient descent is faster',
      'Stochastic gradient descent uses the entire dataset for each update',
      'Batch gradient descent uses the entire dataset for each update',
      'Stochastic gradient descent always converges to a better solution'
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    question: 'Which of the following is a common application of machine learning in healthcare?',
    options: [
      'Disease diagnosis',
      'Patient scheduling',
      'Hospital cleaning',
      'Medical supply ordering'
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: 'What is the purpose of a confusion matrix?',
    options: [
      'To visualize the performance of a classification model',
      'To reduce the dimensionality of data',
      'To select the best features',
      'To normalize the data'
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: 'Which of the following is a common technique for handling missing data?',
    options: [
      'Deleting all rows with missing values',
      'Imputation with mean or median',
      'Ignoring the missing values',
      'Replacing missing values with zeros'
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: 'What is the main advantage of using ensemble methods?',
    options: [
      'They are always faster than single models',
      'They combine multiple models to improve performance',
      'They require less data',
      'They are easier to interpret'
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: 'Which of the following is a common application of machine learning in finance?',
    options: [
      'Fraud detection',
      'Customer service',
      'Office management',
      'Employee scheduling'
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: 'What is the main difference between classification and regression?',
    options: [
      'Classification predicts continuous values, regression predicts discrete values',
      'Classification predicts discrete values, regression predicts continuous values',
      'Classification is supervised, regression is unsupervised',
      'Classification uses neural networks, regression uses decision trees'
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: 'Which of the following is NOT a common loss function for regression?',
    options: [
      'Mean Squared Error',
      'Cross-Entropy Loss',
      'Mean Absolute Error',
      'Huber Loss'
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: 'What is the purpose of the learning rate in gradient descent?',
    options: [
      'To control the size of the steps taken during optimization',
      'To determine the number of training epochs',
      'To set the initial weights of the model',
      'To control the regularization strength'
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: 'Which of the following is a common technique for handling imbalanced datasets?',
    options: [
      'Oversampling the minority class',
      'Undersampling the majority class',
      'Using class weights',
      'All of the above'
    ],
    correctAnswer: 3
  },
  {
    id: 20,
    question: 'What is the main advantage of using a decision tree?',
    options: [
      'It always provides the best accuracy',
      'It is easy to interpret and explain',
      'It works well with high-dimensional data',
      'It requires minimal computational resources'
    ],
    correctAnswer: 1
  },
  {
    id: 21,
    question: 'Which of the following is NOT a common activation function in neural networks?',
    options: [
      'ReLU',
      'Sigmoid',
      'Tanh',
      'Mean Squared Error'
    ],
    correctAnswer: 3
  },
  {
    id: 22,
    question: 'What is the purpose of batch normalization?',
    options: [
      'To reduce the number of parameters in the model',
      'To normalize the input data',
      'To stabilize and speed up training',
      'To prevent overfitting'
    ],
    correctAnswer: 2
  },
  {
    id: 23,
    question: 'Which of the following is a common application of reinforcement learning?',
    options: [
      'Game playing',
      'Image classification',
      'Text summarization',
      'Customer segmentation'
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    question: 'What is the main difference between bagging and boosting?',
    options: [
      'Bagging trains models in parallel, boosting trains models sequentially',
      'Bagging reduces bias, boosting reduces variance',
      'Bagging is used for regression, boosting is used for classification',
      'Bagging requires more computational resources than boosting'
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: 'Which of the following is NOT a common dimensionality reduction technique?',
    options: [
      'Principal Component Analysis',
      't-SNE',
      'Linear Discriminant Analysis',
      'Gradient Descent'
    ],
    correctAnswer: 3
  },
  {
    id: 26,
    question: 'What is the purpose of early stopping in neural network training?',
    options: [
      'To prevent overfitting',
      'To speed up training',
      'To improve model accuracy',
      'To reduce memory usage'
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    question: 'Which of the following is a common application of natural language processing?',
    options: [
      'Sentiment analysis',
      'Image recognition',
      'Time series forecasting',
      'Anomaly detection'
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    question: 'What is the main advantage of using a convolutional neural network (CNN) for image processing?',
    options: [
      'It requires less training data',
      'It automatically learns spatial hierarchies of features',
      'It is faster to train than other neural networks',
      'It works better with text data'
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    question: 'Which of the following is NOT a common optimization algorithm?',
    options: [
      'Stochastic Gradient Descent',
      'Adam',
      'RMSprop',
      'K-means'
    ],
    correctAnswer: 3
  },
  {
    id: 30,
    question: 'What is the purpose of dropout in neural networks?',
    options: [
      'To reduce the number of parameters',
      'To prevent overfitting',
      'To speed up training',
      'To improve model interpretability'
    ],
    correctAnswer: 1
  },
  {
    id: 31,
    question: 'Which of the following is a common application of time series analysis?',
    options: [
      'Stock price prediction',
      'Image classification',
      'Text translation',
      'Customer segmentation'
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    question: 'What is the main difference between a generative and discriminative model?',
    options: [
      'Generative models learn the joint probability, discriminative models learn the conditional probability',
      'Generative models are faster to train',
      'Generative models always perform better',
      'Discriminative models require less data'
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: 'Which of the following is NOT a common evaluation metric for classification?',
    options: [
      'Accuracy',
      'Precision',
      'Recall',
      'Mean Squared Error'
    ],
    correctAnswer: 3
  },
  {
    id: 34,
    question: 'What is the purpose of word embeddings in NLP?',
    options: [
      'To reduce the vocabulary size',
      'To represent words as dense vectors',
      'To speed up text processing',
      'To improve grammar checking'
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    question: 'Which of the following is a common application of anomaly detection?',
    options: [
      'Fraud detection',
      'Image classification',
      'Text summarization',
      'Customer segmentation'
    ],
    correctAnswer: 0
  },
  {
    id: 36,
    question: 'What is the main advantage of using a recurrent neural network (RNN)?',
    options: [
      'It requires less memory',
      'It can process sequential data',
      'It is faster to train',
      'It works better with images'
    ],
    correctAnswer: 1
  },
  {
    id: 37,
    question: 'Which of the following is NOT a common technique for feature selection?',
    options: [
      'Recursive Feature Elimination',
      'Principal Component Analysis',
      'L1 Regularization',
      'Gradient Descent'
    ],
    correctAnswer: 3
  },
  {
    id: 38,
    question: 'What is the purpose of attention mechanisms in neural networks?',
    options: [
      'To reduce the number of parameters',
      'To focus on relevant parts of the input',
      'To speed up training',
      'To improve model interpretability'
    ],
    correctAnswer: 1
  },
  {
    id: 39,
    question: 'Which of the following is a common application of computer vision?',
    options: [
      'Object detection',
      'Text translation',
      'Time series forecasting',
      'Customer segmentation'
    ],
    correctAnswer: 0
  },
  {
    id: 40,
    question: 'What is the main difference between a shallow and deep neural network?',
    options: [
      'Deep networks are always better',
      'Deep networks have more layers',
      'Shallow networks are faster to train',
      'Shallow networks require less data'
    ],
    correctAnswer: 1
  },
  {
    id: 41,
    question: 'Which of the following is NOT a common technique for data augmentation?',
    options: [
      'Image rotation',
      'Noise addition',
      'Feature scaling',
      'Text translation'
    ],
    correctAnswer: 2
  },
  {
    id: 42,
    question: 'What is the purpose of transfer learning?',
    options: [
      'To reduce the number of parameters',
      'To leverage knowledge from pre-trained models',
      'To speed up training',
      'To improve model interpretability'
    ],
    correctAnswer: 1
  },
  {
    id: 43,
    question: 'Which of the following is a common application of recommender systems?',
    options: [
      'Product recommendations',
      'Image classification',
      'Text translation',
      'Time series forecasting'
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    question: 'What is the main advantage of using a transformer architecture?',
    options: [
      'It requires less memory',
      'It can process long-range dependencies',
      'It is faster to train',
      'It works better with images'
    ],
    correctAnswer: 1
  },
  {
    id: 45,
    question: 'Which of the following is NOT a common technique for handling missing data?',
    options: [
      'Mean imputation',
      'Median imputation',
      'Mode imputation',
      'Gradient descent'
    ],
    correctAnswer: 3
  },
  {
    id: 46,
    question: 'What is the purpose of hyperparameter tuning?',
    options: [
      'To reduce the number of parameters',
      'To find the best model configuration',
      'To speed up training',
      'To improve model interpretability'
    ],
    correctAnswer: 1
  },
  {
    id: 47,
    question: 'Which of the following is a common application of clustering?',
    options: [
      'Customer segmentation',
      'Image classification',
      'Text translation',
      'Time series forecasting'
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    question: 'What is the main advantage of using a support vector machine (SVM)?',
    options: [
      'It always provides the best accuracy',
      'It works well with high-dimensional data',
      'It requires minimal computational resources',
      'It is easy to interpret'
    ],
    correctAnswer: 1
  },
  {
    id: 49,
    question: 'Which of the following is NOT a common technique for model deployment?',
    options: [
      'Containerization',
      'API development',
      'Batch processing',
      'Gradient descent'
    ],
    correctAnswer: 3
  },
  {
    id: 50,
    question: 'What is the purpose of A/B testing in machine learning?',
    options: [
      'To reduce the number of parameters',
      'To compare different model versions',
      'To speed up training',
      'To improve model interpretability'
    ],
    correctAnswer: 1
  }
];

export const deepLearningQuestions: Question[] = [
  {
    id: 1,
    question: 'What is the main difference between deep learning and traditional machine learning?',
    options: [
      'Deep learning uses more data',
      'Deep learning uses neural networks with multiple layers',
      'Deep learning is faster',
      'Deep learning requires less computational power'
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: 'Which of the following is NOT a type of neural network?',
    options: [
      'Convolutional Neural Network (CNN)',
      'Recurrent Neural Network (RNN)',
      'Decision Tree Network',
      'Transformer Network'
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: 'What is the purpose of an activation function in a neural network?',
    options: [
      'To increase the number of parameters',
      'To introduce non-linearity',
      'To reduce training time',
      'To store data'
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: 'Which of the following is a common application of deep learning?',
    options: [
      'Image recognition',
      'Simple calculations',
      'Data storage',
      'File compression'
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: 'What is the purpose of backpropagation?',
    options: [
      'To store data',
      'To update the weights of a neural network',
      'To increase the number of layers',
      'To reduce memory usage'
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: 'What is a neural network?',
    options: [
      'A computer program that mimics the human brain',
      'A type of calculator',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: 'What is the purpose of input layer in a neural network?',
    options: [
      'To receive data',
      'To store data',
      'To play music',
      'To create art'
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: 'What is the output layer in a neural network?',
    options: [
      'The layer that gives the final result',
      'The first layer',
      'A way to store data',
      'A type of calculator'
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: 'What are hidden layers in a neural network?',
    options: [
      'Layers between input and output that process data',
      'Layers that are invisible',
      'Layers that store data',
      'Layers that play music'
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: 'What is training in deep learning?',
    options: [
      'Teaching the model using data',
      'Making the model run faster',
      'Storing more data',
      'Creating new data'
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: 'What is a dataset in deep learning?',
    options: [
      'Collection of examples used for training',
      'A type of computer',
      'A way to store files',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: 'What is a feature in deep learning?',
    options: [
      'An input variable used for prediction',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: 'What is a label in deep learning?',
    options: [
      'The correct answer we want to predict',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: 'What is a prediction in deep learning?',
    options: [
      'The output from the model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: 'What is accuracy in deep learning?',
    options: [
      'How often the model is correct',
      'How fast the model runs',
      'How much data it can store',
      'How many layers it has'
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: 'What is a model in deep learning?',
    options: [
      'A trained neural network',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: 'What is a parameter in deep learning?',
    options: [
      'A value the model learns during training',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: 'What is a hyperparameter in deep learning?',
    options: [
      'A setting we choose before training',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: 'What is an epoch in deep learning?',
    options: [
      'One complete pass through the training data',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: 'What is a batch in deep learning?',
    options: [
      'A group of training examples',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    question: 'What is a loss function in deep learning?',
    options: [
      'Measures how wrong the model is',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    question: 'What is optimization in deep learning?',
    options: [
      'Making the model better',
      'Making the computer faster',
      'Storing more data',
      'Creating new data'
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    question: 'What is a weight in deep learning?',
    options: [
      'A value that connects neurons',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    question: 'What is a bias in deep learning?',
    options: [
      'An extra parameter in each neuron',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: 'What is a neuron in deep learning?',
    options: [
      'A basic unit that processes information',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    question: 'What is a layer in deep learning?',
    options: [
      'A group of neurons',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    question: 'What is a CNN in deep learning?',
    options: [
      'A type of neural network for images',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    question: 'What is an RNN in deep learning?',
    options: [
      'A type of neural network for sequences',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    question: 'What is a transformer in deep learning?',
    options: [
      'A type of neural network for text',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    question: 'What is transfer learning in deep learning?',
    options: [
      'Using a pre-trained model',
      'Making a new model',
      'Storing more data',
      'Creating new data'
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    question: 'What is fine-tuning in deep learning?',
    options: [
      'Adjusting a pre-trained model',
      'Making a new model',
      'Storing more data',
      'Creating new data'
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    question: 'What is a pre-trained model?',
    options: [
      'A model already trained on data',
      'A new model',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: 'What is inference in deep learning?',
    options: [
      'Using a trained model to make predictions',
      'Training a model',
      'Storing data',
      'Creating data'
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    question: 'What is a GPU in deep learning?',
    options: [
      'A type of computer chip for faster training',
      'A type of robot',
      'A way to store data',
      'A type of calculator'
    ],
    correctAnswer: 0
  },
  {
    id: 35,
    question: 'What is a tensor in deep learning?',
    options: [
      'A multi-dimensional array of numbers',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 36,
    question: 'What is a framework in deep learning?',
    options: [
      'A software library for building models',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 37,
    question: 'What is TensorFlow?',
    options: [
      'A popular deep learning framework',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    question: 'What is PyTorch?',
    options: [
      'A popular deep learning framework',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 39,
    question: 'What is a validation set?',
    options: [
      'Data used to check model performance',
      'Data used for training',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 40,
    question: 'What is a test set?',
    options: [
      'Data used to evaluate final model',
      'Data used for training',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 41,
    question: 'What is data augmentation?',
    options: [
      'Creating more training data',
      'Making the computer faster',
      'Storing more data',
      'Creating new models'
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    question: 'What is a learning rate?',
    options: [
      'How fast the model learns',
      'How fast the computer runs',
      'How much data is stored',
      'How many layers are used'
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: 'What is regularization?',
    options: [
      'Preventing overfitting',
      'Making the model faster',
      'Storing more data',
      'Creating new data'
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    question: 'What is dropout?',
    options: [
      'A technique to prevent overfitting',
      'A way to store data',
      'A type of computer',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    question: 'What is batch normalization?',
    options: [
      'A technique to improve training',
      'A way to store data',
      'A type of computer',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    question: 'What is a convolutional layer?',
    options: [
      'A layer that processes images',
      'A way to store data',
      'A type of computer',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 47,
    question: 'What is a pooling layer?',
    options: [
      'A layer that reduces size',
      'A way to store data',
      'A type of computer',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    question: 'What is a fully connected layer?',
    options: [
      'A layer where all neurons are connected',
      'A way to store data',
      'A type of computer',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    question: 'What is a softmax layer?',
    options: [
      'A layer that gives probabilities',
      'A way to store data',
      'A type of computer',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: 'What is a sigmoid layer?',
    options: [
      'A layer that gives values between 0 and 1',
      'A way to store data',
      'A type of computer',
      'A type of robot'
    ],
    correctAnswer: 0
  }
];

export const nlpQuestions: Question[] = [
  {
    id: 1,
    question: 'What is the main goal of Natural Language Processing?',
    options: [
      'To make computers understand human language',
      'To create new languages',
      'To store text data',
      'To compress text files'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'Which of the following is a common NLP task?',
    options: [
      'Text classification',
      'Image recognition',
      'Sound processing',
      'Video editing'
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: 'What is a word embedding?',
    options: [
      'A way to store text files',
      'A numerical representation of words',
      'A type of font',
      'A way to compress text'
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: 'Which of the following is NOT an NLP application?',
    options: [
      'Chatbots',
      'Text translation',
      'Image recognition',
      'Sentiment analysis'
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: 'What is tokenization in NLP?',
    options: [
      'Breaking text into words or phrases',
      'Creating new words',
      'Storing text data',
      'Compressing text files'
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: 'What is text classification?',
    options: [
      'Categorizing text into groups',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: 'What is sentiment analysis?',
    options: [
      'Understanding emotions in text',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: 'What is a chatbot?',
    options: [
      'A program that talks with humans',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: 'What is text translation?',
    options: [
      'Converting text from one language to another',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: 'What is text summarization?',
    options: [
      'Creating a shorter version of text',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: 'What is a language model?',
    options: [
      'A program that understands language',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: 'What is part-of-speech tagging?',
    options: [
      'Identifying words as nouns, verbs, etc.',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: 'What is named entity recognition?',
    options: [
      'Finding names of people, places, etc.',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: 'What is text generation?',
    options: [
      'Creating new text automatically',
      'Storing text files',
      'Deleting text',
      'Printing text'
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: 'What is a corpus in NLP?',
    options: [
      'A collection of text documents',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: 'What is text preprocessing?',
    options: [
      'Cleaning and preparing text data',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: 'What is stemming in NLP?',
    options: [
      'Reducing words to their root form',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: 'What is lemmatization?',
    options: [
      'Converting words to their base form',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: 'What is a stop word?',
    options: [
      'A common word that is often removed',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: 'What is a bag of words?',
    options: [
      'A way to represent text as numbers',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    question: 'What is TF-IDF?',
    options: [
      'A way to measure word importance',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    question: 'What is a word vector?',
    options: [
      'A numerical representation of a word',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    question: 'What is Word2Vec?',
    options: [
      'A popular word embedding method',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    question: 'What is a sequence model?',
    options: [
      'A model that processes text in order',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: 'What is attention in NLP?',
    options: [
      'Focusing on important parts of text',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    question: 'What is a transformer in NLP?',
    options: [
      'A type of neural network for text',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    question: 'What is BERT?',
    options: [
      'A popular language model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    question: 'What is GPT?',
    options: [
      'A popular text generation model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    question: 'What is text similarity?',
    options: [
      'Measuring how similar two texts are',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    question: 'What is text clustering?',
    options: [
      'Grouping similar texts together',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    question: 'What is text extraction?',
    options: [
      'Getting specific information from text',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    question: 'What is text parsing?',
    options: [
      'Breaking text into parts',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: 'What is text normalization?',
    options: [
      'Making text consistent',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    question: 'What is text cleaning?',
    options: [
      'Removing unwanted parts from text',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 35,
    question: 'What is text augmentation?',
    options: [
      'Creating more text data',
      'Storing text files',
      'Deleting text',
      'Printing text'
    ],
    correctAnswer: 0
  },
  {
    id: 36,
    question: 'What is a language identifier?',
    options: [
      'A tool that detects the language of text',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 37,
    question: 'What is text alignment?',
    options: [
      'Matching text in different languages',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    question: 'What is text segmentation?',
    options: [
      'Breaking text into smaller parts',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 39,
    question: 'What is text chunking?',
    options: [
      'Grouping words into meaningful units',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 40,
    question: 'What is text dependency parsing?',
    options: [
      'Finding relationships between words',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 41,
    question: 'What is text coreference resolution?',
    options: [
      'Finding when words refer to the same thing',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    question: 'What is text semantic role labeling?',
    options: [
      'Identifying the roles of words in sentences',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: 'What is text relation extraction?',
    options: [
      'Finding relationships between entities',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    question: 'What is text event extraction?',
    options: [
      'Finding events mentioned in text',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    question: 'What is text temporal analysis?',
    options: [
      'Understanding time in text',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    question: 'What is text spatial analysis?',
    options: [
      'Understanding location in text',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 47,
    question: 'What is text sentiment polarity?',
    options: [
      'Whether text is positive or negative',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    question: 'What is text subjectivity?',
    options: [
      'Whether text is factual or opinionated',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    question: 'What is text readability?',
    options: [
      'How easy text is to understand',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: 'What is text complexity?',
    options: [
      'How difficult text is to understand',
      'Creating new text',
      'Storing text files',
      'Deleting text'
    ],
    correctAnswer: 0
  }
];

export const roboticsQuestions: Question[] = [
  {
    id: 1,
    question: 'What is the main purpose of robotics?',
    options: [
      'To create machines that can perform tasks automatically',
      'To store data',
      'To create art',
      'To play music'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'Which of the following is a common component of robots?',
    options: [
      'Sensors',
      'Paint brushes',
      'Musical instruments',
      'Books'
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: 'What is the purpose of sensors in robots?',
    options: [
      'To collect information about the environment',
      'To play music',
      'To create art',
      'To store data'
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: 'Which of the following is NOT a common type of robot?',
    options: [
      'Industrial robot',
      'Service robot',
      'Musical robot',
      'Medical robot'
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: 'What is the main difference between robots and computers?',
    options: [
      'Robots can interact with the physical world',
      'Robots can only process data',
      'Robots are always smaller',
      'Robots are always cheaper'
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: 'What is a robot arm?',
    options: [
      'A mechanical arm that can move and grab things',
      'A type of computer',
      'A way to store data',
      'A type of sensor'
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: 'What is a robot gripper?',
    options: [
      'A tool that helps robots hold objects',
      'A type of computer',
      'A way to store data',
      'A type of sensor'
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: 'What is robot programming?',
    options: [
      'Teaching robots what to do',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: 'What is robot control?',
    options: [
      'Making robots move correctly',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: 'What is robot navigation?',
    options: [
      'Helping robots find their way',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: 'What is a robot joint?',
    options: [
      'A part that allows movement',
      'A type of computer',
      'A way to store data',
      'A type of sensor'
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: 'What is robot vision?',
    options: [
      'How robots see things',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: 'What is robot learning?',
    options: [
      'Robots getting better at tasks',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: 'What is robot safety?',
    options: [
      'Making sure robots are safe to use',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: 'What is robot maintenance?',
    options: [
      'Keeping robots working well',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: 'What is a robot controller?',
    options: [
      'The brain of the robot',
      'A type of computer',
      'A way to store data',
      'A type of sensor'
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: 'What is robot accuracy?',
    options: [
      'How precise robots can be',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: 'What is robot speed?',
    options: [
      'How fast robots can move',
      'Making robots smarter',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: 'What is robot power?',
    options: [
      'How robots get energy',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: 'What is robot communication?',
    options: [
      'How robots talk to each other',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    question: 'What is robot coordination?',
    options: [
      'How robots work together',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    question: 'What is robot flexibility?',
    options: [
      'How robots can do different tasks',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    question: 'What is robot reliability?',
    options: [
      'How well robots work over time',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    question: 'What is robot precision?',
    options: [
      'How exact robots can be',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: 'What is robot mobility?',
    options: [
      'How robots can move around',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    question: 'What is robot autonomy?',
    options: [
      'How robots can work alone',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    question: 'What is robot intelligence?',
    options: [
      'How smart robots are',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    question: 'What is robot adaptation?',
    options: [
      'How robots can change for new tasks',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    question: 'What is robot efficiency?',
    options: [
      'How well robots use energy',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    question: 'What is robot durability?',
    options: [
      'How long robots can work',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    question: 'What is robot calibration?',
    options: [
      'Making sure robots work correctly',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    question: 'What is robot feedback?',
    options: [
      'Information robots get about their actions',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: 'What is robot stability?',
    options: [
      'How well robots stay balanced',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    question: 'What is robot synchronization?',
    options: [
      'Making robots work together in time',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 35,
    question: 'What is robot optimization?',
    options: [
      'Making robots work better',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 36,
    question: 'What is robot simulation?',
    options: [
      'Testing robots in a computer',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 37,
    question: 'What is robot testing?',
    options: [
      'Checking if robots work right',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    question: 'What is robot debugging?',
    options: [
      'Fixing problems in robots',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 39,
    question: 'What is robot monitoring?',
    options: [
      'Watching how robots work',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 40,
    question: 'What is robot tracking?',
    options: [
      'Following where robots go',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 41,
    question: 'What is robot mapping?',
    options: [
      'Making maps of places',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    question: 'What is robot localization?',
    options: [
      'Finding where robots are',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: 'What is robot planning?',
    options: [
      'Deciding what robots should do',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    question: 'What is robot decision making?',
    options: [
      'Choosing what to do next',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    question: 'What is robot problem solving?',
    options: [
      'Finding solutions to challenges',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    question: 'What is robot learning from demonstration?',
    options: [
      'Learning by watching humans',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 47,
    question: 'What is robot reinforcement learning?',
    options: [
      'Learning by trying and getting feedback',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    question: 'What is robot supervised learning?',
    options: [
      'Learning from examples',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    question: 'What is robot unsupervised learning?',
    options: [
      'Learning without examples',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: 'What is robot deep learning?',
    options: [
      'Learning using neural networks',
      'Making robots faster',
      'Storing data in robots',
      'Creating new robots'
    ],
    correctAnswer: 0
  }
];

export const dronesQuestions: Question[] = [
  {
    id: 1,
    question: 'What is a drone?',
    options: [
      'An unmanned aerial vehicle',
      'A type of computer',
      'A musical instrument',
      'A type of car'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'Which of the following is a common use of drones?',
    options: [
      'Aerial photography',
      'Playing music',
      'Writing books',
      'Painting pictures'
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: 'What is the main advantage of using drones?',
    options: [
      'They can access hard-to-reach places',
      'They can play music',
      'They can write books',
      'They can paint pictures'
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: 'Which of the following is NOT a common drone component?',
    options: [
      'Propellers',
      'Camera',
      'Paint brush',
      'GPS'
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: 'What is the purpose of GPS in drones?',
    options: [
      'To determine location',
      'To play music',
      'To create art',
      'To store data'
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: 'What is a drone controller?',
    options: [
      'A device to fly the drone',
      'A type of computer',
      'A musical instrument',
      'A type of car'
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: 'What is drone stability?',
    options: [
      'How well the drone stays balanced',
      'How fast it can fly',
      'How much it can carry',
      'How long it can fly'
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: 'What is drone altitude?',
    options: [
      'How high the drone can fly',
      'How fast it can fly',
      'How much it can carry',
      'How long it can fly'
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: 'What is drone speed?',
    options: [
      'How fast the drone can move',
      'How high it can fly',
      'How much it can carry',
      'How long it can fly'
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: 'What is drone payload?',
    options: [
      'What the drone can carry',
      'How fast it can fly',
      'How high it can fly',
      'How long it can fly'
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: 'What is drone battery life?',
    options: [
      'How long the drone can fly',
      'How fast it can fly',
      'How high it can fly',
      'How much it can carry'
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: 'What is drone range?',
    options: [
      'How far the drone can go',
      'How fast it can fly',
      'How high it can fly',
      'How much it can carry'
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: 'What is drone navigation?',
    options: [
      'How the drone finds its way',
      'How fast it can fly',
      'How high it can fly',
      'How much it can carry'
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: 'What is drone control?',
    options: [
      'How the drone is flown',
      'How fast it can fly',
      'How high it can fly',
      'How much it can carry'
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: 'What is drone safety?',
    options: [
      'Making sure drones are safe to use',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: 'What is drone maintenance?',
    options: [
      'Keeping drones working well',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: 'What is drone calibration?',
    options: [
      'Making sure drones work correctly',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: 'What is drone feedback?',
    options: [
      'Information drones get about their flight',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: 'What is drone stability control?',
    options: [
      'Keeping drones balanced',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: 'What is drone collision avoidance?',
    options: [
      'Preventing drones from hitting things',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    question: 'What is drone obstacle detection?',
    options: [
      'Finding things in the way',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    question: 'What is drone mapping?',
    options: [
      'Making maps of areas',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    question: 'What is drone surveying?',
    options: [
      'Looking at areas from above',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    question: 'What is drone inspection?',
    options: [
      'Checking things from above',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: 'What is drone delivery?',
    options: [
      'Bringing things to people',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    question: 'What is drone photography?',
    options: [
      'Taking pictures from above',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    question: 'What is drone videography?',
    options: [
      'Taking videos from above',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    question: 'What is drone racing?',
    options: [
      'Flying drones in competitions',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    question: 'What is drone autonomy?',
    options: [
      'Drones flying by themselves',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    question: 'What is drone programming?',
    options: [
      'Teaching drones what to do',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    question: 'What is drone simulation?',
    options: [
      'Practicing flying in a computer',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    question: 'What is drone testing?',
    options: [
      'Checking if drones work right',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: 'What is drone debugging?',
    options: [
      'Fixing problems in drones',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    question: 'What is drone monitoring?',
    options: [
      'Watching how drones fly',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 35,
    question: 'What is drone tracking?',
    options: [
      'Following where drones go',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 36,
    question: 'What is drone localization?',
    options: [
      'Finding where drones are',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 37,
    question: 'What is drone planning?',
    options: [
      'Deciding where drones should go',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    question: 'What is drone decision making?',
    options: [
      'Choosing what to do next',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 39,
    question: 'What is drone problem solving?',
    options: [
      'Finding solutions to challenges',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 40,
    question: 'What is drone learning?',
    options: [
      'Drones getting better at tasks',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 41,
    question: 'What is drone adaptation?',
    options: [
      'Drones changing for new tasks',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    question: 'What is drone efficiency?',
    options: [
      'How well drones use energy',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: 'What is drone durability?',
    options: [
      'How long drones can work',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    question: 'What is drone reliability?',
    options: [
      'How well drones work over time',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    question: 'What is drone precision?',
    options: [
      'How exact drones can be',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    question: 'What is drone accuracy?',
    options: [
      'How correct drones can be',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 47,
    question: 'What is drone speed control?',
    options: [
      'Controlling how fast drones fly',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    question: 'What is drone altitude control?',
    options: [
      'Controlling how high drones fly',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    question: 'What is drone direction control?',
    options: [
      'Controlling where drones go',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: 'What is drone position control?',
    options: [
      'Controlling where drones are',
      'Making drones faster',
      'Making drones fly higher',
      'Making drones carry more'
    ],
    correctAnswer: 0
  }
];

export const quantumComputingQuestions: Question[] = [
  {
    id: 1,
    question: 'What is quantum computing?',
    options: [
      'Computing using quantum mechanics',
      'A type of regular computer',
      'A musical instrument',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'What is a qubit?',
    options: [
      'The basic unit of quantum information',
      'A type of computer chip',
      'A musical note',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: 'What is the main advantage of quantum computers?',
    options: [
      'They can solve certain problems faster',
      'They are always smaller',
      'They are always cheaper',
      'They can play music better'
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: 'Which of the following is NOT a quantum computing concept?',
    options: [
      'Superposition',
      'Entanglement',
      'Classical bits',
      'Quantum gates'
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: 'What is quantum superposition?',
    options: [
      'A qubit can be in multiple states at once',
      'A type of computer memory',
      'A musical technique',
      'A type of robot movement'
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: 'What is quantum entanglement?',
    options: [
      'When qubits are connected',
      'A type of computer cable',
      'A musical chord',
      'A type of robot joint'
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: 'What is a quantum gate?',
    options: [
      'A basic quantum operation',
      'A computer door',
      'A musical instrument',
      'A robot part'
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: 'What is quantum measurement?',
    options: [
      'Reading a qubit\'s state',
      'Measuring computer size',
      'Measuring sound',
      'Measuring robot speed'
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: 'What is quantum coherence?',
    options: [
      'How long quantum states last',
      'How computers work together',
      'How music sounds',
      'How robots move'
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: 'What is quantum decoherence?',
    options: [
      'When quantum states break down',
      'When computers stop',
      'When music stops',
      'When robots break'
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: 'What is quantum error correction?',
    options: [
      'Fixing quantum mistakes',
      'Fixing computer errors',
      'Fixing music errors',
      'Fixing robot errors'
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: 'What is a quantum algorithm?',
    options: [
      'A set of quantum instructions',
      'A computer program',
      'A musical score',
      'A robot program'
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: 'What is quantum parallelism?',
    options: [
      'Doing many calculations at once',
      'Running many computers',
      'Playing many songs',
      'Using many robots'
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: 'What is quantum interference?',
    options: [
      'How quantum states combine',
      'How computers connect',
      'How sounds mix',
      'How robots interact'
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: 'What is quantum tunneling?',
    options: [
      'Moving through barriers',
      'Moving through walls',
      'Moving through air',
      'Moving through water'
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: 'What is a quantum circuit?',
    options: [
      'A sequence of quantum gates',
      'A computer circuit',
      'An electrical circuit',
      'A robot circuit'
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: 'What is quantum annealing?',
    options: [
      'Finding the best solution',
      'Making computers hot',
      'Making music warm',
      'Making robots move'
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: 'What is quantum supremacy?',
    options: [
      'When quantum computers beat classical ones',
      'When computers win',
      'When music wins',
      'When robots win'
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: 'What is quantum simulation?',
    options: [
      'Simulating quantum systems',
      'Simulating computers',
      'Simulating music',
      'Simulating robots'
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: 'What is quantum cryptography?',
    options: [
      'Secure communication using quantum',
      'Computer security',
      'Music security',
      'Robot security'
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    question: 'What is quantum teleportation?',
    options: [
      'Moving quantum information',
      'Moving computers',
      'Moving music',
      'Moving robots'
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    question: 'What is quantum memory?',
    options: [
      'Storing quantum information',
      'Computer memory',
      'Music memory',
      'Robot memory'
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    question: 'What is quantum sensing?',
    options: [
      'Measuring with quantum precision',
      'Computer sensing',
      'Music sensing',
      'Robot sensing'
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    question: 'What is quantum networking?',
    options: [
      'Connecting quantum computers',
      'Computer networking',
      'Music networking',
      'Robot networking'
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: 'What is quantum optimization?',
    options: [
      'Finding the best solution',
      'Making computers better',
      'Making music better',
      'Making robots better'
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    question: 'What is quantum machine learning?',
    options: [
      'Learning using quantum computers',
      'Computer learning',
      'Music learning',
      'Robot learning'
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    question: 'What is quantum chemistry?',
    options: [
      'Studying molecules with quantum computers',
      'Computer chemistry',
      'Music chemistry',
      'Robot chemistry'
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    question: 'What is quantum finance?',
    options: [
      'Financial calculations with quantum',
      'Computer finance',
      'Music finance',
      'Robot finance'
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    question: 'What is quantum artificial intelligence?',
    options: [
      'AI using quantum computers',
      'Computer AI',
      'Music AI',
      'Robot AI'
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    question: 'What is quantum computing hardware?',
    options: [
      'Physical quantum computer parts',
      'Computer parts',
      'Music equipment',
      'Robot parts'
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    question: 'What is quantum computing software?',
    options: [
      'Programs for quantum computers',
      'Computer programs',
      'Music programs',
      'Robot programs'
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    question: 'What is quantum computing research?',
    options: [
      'Studying quantum computers',
      'Computer research',
      'Music research',
      'Robot research'
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: 'What is quantum computing development?',
    options: [
      'Building quantum computers',
      'Building computers',
      'Building music',
      'Building robots'
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    question: 'What is quantum computing testing?',
    options: [
      'Checking quantum computers',
      'Checking computers',
      'Checking music',
      'Checking robots'
    ],
    correctAnswer: 0
  },
  {
    id: 35,
    question: 'What is quantum computing debugging?',
    options: [
      'Fixing quantum computer problems',
      'Fixing computers',
      'Fixing music',
      'Fixing robots'
    ],
    correctAnswer: 0
  },
  {
    id: 36,
    question: 'What is quantum computing monitoring?',
    options: [
      'Watching quantum computers',
      'Watching computers',
      'Watching music',
      'Watching robots'
    ],
    correctAnswer: 0
  },
  {
    id: 37,
    question: 'What is quantum computing security?',
    options: [
      'Protecting quantum computers',
      'Protecting computers',
      'Protecting music',
      'Protecting robots'
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    question: 'What is quantum computing maintenance?',
    options: [
      'Keeping quantum computers working',
      'Keeping computers working',
      'Keeping music working',
      'Keeping robots working'
    ],
    correctAnswer: 0
  },
  {
    id: 39,
    question: 'What is quantum computing calibration?',
    options: [
      'Setting up quantum computers',
      'Setting up computers',
      'Setting up music',
      'Setting up robots'
    ],
    correctAnswer: 0
  },
  {
    id: 40,
    question: 'What is quantum computing optimization?',
    options: [
      'Making quantum computers better',
      'Making computers better',
      'Making music better',
      'Making robots better'
    ],
    correctAnswer: 0
  },
  {
    id: 41,
    question: 'What is quantum computing scalability?',
    options: [
      'Making quantum computers bigger',
      'Making computers bigger',
      'Making music bigger',
      'Making robots bigger'
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    question: 'What is quantum computing reliability?',
    options: [
      'How well quantum computers work',
      'How well computers work',
      'How well music works',
      'How well robots work'
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: 'What is quantum computing efficiency?',
    options: [
      'How well quantum computers use energy',
      'How well computers use energy',
      'How well music uses energy',
      'How well robots use energy'
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    question: 'What is quantum computing speed?',
    options: [
      'How fast quantum computers work',
      'How fast computers work',
      'How fast music works',
      'How fast robots work'
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    question: 'What is quantum computing accuracy?',
    options: [
      'How correct quantum computers are',
      'How correct computers are',
      'How correct music is',
      'How correct robots are'
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    question: 'What is quantum computing precision?',
    options: [
      'How exact quantum computers are',
      'How exact computers are',
      'How exact music is',
      'How exact robots are'
    ],
    correctAnswer: 0
  },
  {
    id: 47,
    question: 'What is quantum computing stability?',
    options: [
      'How stable quantum computers are',
      'How stable computers are',
      'How stable music is',
      'How stable robots are'
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    question: 'What is quantum computing durability?',
    options: [
      'How long quantum computers last',
      'How long computers last',
      'How long music lasts',
      'How long robots last'
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    question: 'What is quantum computing innovation?',
    options: [
      'New ideas in quantum computing',
      'New computer ideas',
      'New music ideas',
      'New robot ideas'
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: 'What is quantum computing future?',
    options: [
      'What quantum computers might do',
      'What computers might do',
      'What music might do',
      'What robots might do'
    ],
    correctAnswer: 0
  }
];

export const genaiQuestions: Question[] = [
  {
    id: 1,
    question: 'What is Generative AI?',
    options: [
      'AI that can create new content',
      'AI that only analyzes data',
      'A type of robot',
      'A musical instrument'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'Which of the following is a common application of Generative AI?',
    options: [
      'Creating images',
      'Playing music',
      'Building robots',
      'Writing books by hand'
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: 'What is the main difference between Generative AI and other AI?',
    options: [
      'It can create new content',
      'It is always faster',
      'It is always smaller',
      'It is always cheaper'
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: 'Which of the following is NOT a type of Generative AI?',
    options: [
      'Text-to-Image models',
      'Large Language Models',
      'Traditional calculators',
      'Music generation models'
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: 'What is the purpose of training data in Generative AI?',
    options: [
      'To learn patterns and create new content',
      'To play music',
      'To build robots',
      'To store files'
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: 'What is text generation in Generative AI?',
    options: [
      'Creating new text automatically',
      'Storing text files',
      'Deleting text',
      'Printing text'
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: 'What is image generation in Generative AI?',
    options: [
      'Creating new images automatically',
      'Storing image files',
      'Deleting images',
      'Printing images'
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: 'What is music generation in Generative AI?',
    options: [
      'Creating new music automatically',
      'Storing music files',
      'Deleting music',
      'Playing music'
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: 'What is a prompt in Generative AI?',
    options: [
      'Instructions given to the AI',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: 'What is style transfer in Generative AI?',
    options: [
      'Applying one style to another image',
      'Storing styles',
      'Deleting styles',
      'Creating new styles'
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: 'What is a generative model?',
    options: [
      'An AI that can create new content',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: 'What is a discriminator in Generative AI?',
    options: [
      'A model that tells real from fake',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: 'What is a GAN?',
    options: [
      'A type of generative model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: 'What is a VAE?',
    options: [
      'A type of generative model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: 'What is a transformer in Generative AI?',
    options: [
      'A type of neural network',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: 'What is a latent space in Generative AI?',
    options: [
      'A space where features are represented',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: 'What is a noise vector in Generative AI?',
    options: [
      'Random input to generate content',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: 'What is a generator in Generative AI?',
    options: [
      'A model that creates new content',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: 'What is a discriminator in Generative AI?',
    options: [
      'A model that tells real from fake',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: 'What is a loss function in Generative AI?',
    options: [
      'Measures how good the generation is',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    question: 'What is a training set in Generative AI?',
    options: [
      'Data used to teach the model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    question: 'What is a validation set in Generative AI?',
    options: [
      'Data used to check the model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    question: 'What is a test set in Generative AI?',
    options: [
      'Data used to evaluate the model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    question: 'What is a batch in Generative AI?',
    options: [
      'A group of training examples',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: 'What is an epoch in Generative AI?',
    options: [
      'One complete pass through the data',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    question: 'What is a learning rate in Generative AI?',
    options: [
      'How fast the model learns',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    question: 'What is a parameter in Generative AI?',
    options: [
      'A value the model learns',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    question: 'What is a hyperparameter in Generative AI?',
    options: [
      'A setting we choose before training',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    question: 'What is a neural network in Generative AI?',
    options: [
      'A model inspired by the brain',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    question: 'What is a layer in Generative AI?',
    options: [
      'A group of neurons',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    question: 'What is a neuron in Generative AI?',
    options: [
      'A basic unit that processes information',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    question: 'What is a weight in Generative AI?',
    options: [
      'A value that connects neurons',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: 'What is a bias in Generative AI?',
    options: [
      'An extra parameter in each neuron',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    question: 'What is an activation function in Generative AI?',
    options: [
      'A function that decides if a neuron fires',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 35,
    question: 'What is a gradient in Generative AI?',
    options: [
      'The direction to improve the model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 36,
    question: 'What is backpropagation in Generative AI?',
    options: [
      'How the model learns from mistakes',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 37,
    question: 'What is optimization in Generative AI?',
    options: [
      'Making the model better',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    question: 'What is a GPU in Generative AI?',
    options: [
      'A chip that helps train models faster',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 39,
    question: 'What is a tensor in Generative AI?',
    options: [
      'A multi-dimensional array of numbers',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 40,
    question: 'What is a framework in Generative AI?',
    options: [
      'A software library for building models',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 41,
    question: 'What is TensorFlow?',
    options: [
      'A popular deep learning framework',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    question: 'What is PyTorch?',
    options: [
      'A popular deep learning framework',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: 'What is a validation set in Generative AI?',
    options: [
      'Data used to check model performance',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    question: 'What is a test set in Generative AI?',
    options: [
      'Data used to evaluate final model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    question: 'What is data augmentation in Generative AI?',
    options: [
      'Creating more training data',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    question: 'What is a learning rate in Generative AI?',
    options: [
      'How fast the model learns',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 47,
    question: 'What is regularization in Generative AI?',
    options: [
      'Preventing overfitting',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    question: 'What is dropout in Generative AI?',
    options: [
      'A technique to prevent overfitting',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    question: 'What is batch normalization in Generative AI?',
    options: [
      'A technique to improve training',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: 'What is transfer learning in Generative AI?',
    options: [
      'Using a pre-trained model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  }
]; 

export const llmsQuestions: Question[] = [
  {
    id: 1,
    question: 'What is a Large Language Model (LLM)?',
    options: [
      'An AI that understands and generates text',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'What is the main purpose of an LLM?',
    options: [
      'To understand and generate human-like text',
      'To play music',
      'To build robots',
      'To store files'
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: 'What is training data for an LLM?',
    options: [
      'Text used to teach the model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: 'What is a token in an LLM?',
    options: [
      'A piece of text the model processes',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: 'What is a prompt in an LLM?',
    options: [
      'The input text given to the model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: 'What is text generation in an LLM?',
    options: [
      'Creating new text automatically',
      'Storing text files',
      'Deleting text',
      'Printing text'
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: 'What is text completion in an LLM?',
    options: [
      'Finishing incomplete text',
      'Storing text files',
      'Deleting text',
      'Printing text'
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: 'What is text summarization in an LLM?',
    options: [
      'Creating a shorter version of text',
      'Storing text files',
      'Deleting text',
      'Printing text'
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: 'What is text translation in an LLM?',
    options: [
      'Converting text to another language',
      'Storing text files',
      'Deleting text',
      'Printing text'
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: 'What is text classification in an LLM?',
    options: [
      'Categorizing text into groups',
      'Storing text files',
      'Deleting text',
      'Printing text'
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: 'What is a parameter in an LLM?',
    options: [
      'A value the model learns',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: 'What is a hyperparameter in an LLM?',
    options: [
      'A setting we choose before training',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: 'What is fine-tuning in an LLM?',
    options: [
      'Teaching the model new things',
      'Making the model faster',
      'Storing more data',
      'Creating new data'
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: 'What is a pre-trained model in an LLM?',
    options: [
      'A model already trained on data',
      'A new model',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: 'What is inference in an LLM?',
    options: [
      'Using the model to make predictions',
      'Training the model',
      'Storing data',
      'Creating data'
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: 'What is a transformer in an LLM?',
    options: [
      'A type of neural network',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: 'What is attention in an LLM?',
    options: [
      'Focusing on important parts of text',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: 'What is a layer in an LLM?',
    options: [
      'A group of neurons',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: 'What is a neuron in an LLM?',
    options: [
      'A basic unit that processes information',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: 'What is a weight in an LLM?',
    options: [
      'A value that connects neurons',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    question: 'What is a bias in an LLM?',
    options: [
      'An extra parameter in each neuron',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    question: 'What is an activation function in an LLM?',
    options: [
      'A function that decides if a neuron fires',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    question: 'What is a gradient in an LLM?',
    options: [
      'The direction to improve the model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    question: 'What is backpropagation in an LLM?',
    options: [
      'How the model learns from mistakes',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: 'What is optimization in an LLM?',
    options: [
      'Making the model better',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    question: 'What is a GPU in an LLM?',
    options: [
      'A chip that helps train models faster',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    question: 'What is a tensor in an LLM?',
    options: [
      'A multi-dimensional array of numbers',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    question: 'What is a framework in an LLM?',
    options: [
      'A software library for building models',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    question: 'What is TensorFlow?',
    options: [
      'A popular deep learning framework',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    question: 'What is PyTorch?',
    options: [
      'A popular deep learning framework',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    question: 'What is a validation set in an LLM?',
    options: [
      'Data used to check model performance',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    question: 'What is a test set in an LLM?',
    options: [
      'Data used to evaluate final model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: 'What is data augmentation in an LLM?',
    options: [
      'Creating more training data',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    question: 'What is a learning rate in an LLM?',
    options: [
      'How fast the model learns',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 35,
    question: 'What is regularization in an LLM?',
    options: [
      'Preventing overfitting',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 36,
    question: 'What is dropout in an LLM?',
    options: [
      'A technique to prevent overfitting',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 37,
    question: 'What is batch normalization in an LLM?',
    options: [
      'A technique to improve training',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    question: 'What is transfer learning in an LLM?',
    options: [
      'Using a pre-trained model',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 39,
    question: 'What is a context window in an LLM?',
    options: [
      'How much text the model can see at once',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 40,
    question: 'What is a temperature in an LLM?',
    options: [
      'How random the model\'s output is',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 41,
    question: 'What is top-k sampling in an LLM?',
    options: [
      'Choosing from the k most likely next words',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    question: 'What is top-p sampling in an LLM?',
    options: [
      'Choosing from words that sum to probability p',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: 'What is beam search in an LLM?',
    options: [
      'Keeping multiple possible sequences',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    question: 'What is a loss function in an LLM?',
    options: [
      'Measures how wrong the model is',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    question: 'What is perplexity in an LLM?',
    options: [
      'How well the model predicts text',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    question: 'What is a tokenizer in an LLM?',
    options: [
      'Breaks text into tokens',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 47,
    question: 'What is a vocabulary in an LLM?',
    options: [
      'All the words the model knows',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    question: 'What is a sequence in an LLM?',
    options: [
      'A series of tokens',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    question: 'What is a batch in an LLM?',
    options: [
      'A group of sequences',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: 'What is an epoch in an LLM?',
    options: [
      'One complete pass through the data',
      'A type of computer',
      'A way to store data',
      'A type of robot'
    ],
    correctAnswer: 0
  }
]; 