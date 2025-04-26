
// This is a browser-compatible simulation of MongoDB functionality
// In a real application, this would be implemented as a backend service

// In-memory storage for user data
const users = [
  {
    _id: '1',
    name: 'Demo User',
    email: 'demo@example.com',
    // Password: demo123
    password: '$2a$10$demohashedpasswordfordemouserthatisvalid',
    createdAt: new Date()
  }
];

// Simulates a MongoDB collection
export const getUsersCollection = async () => {
  // Return an object that mimics MongoDB collection methods
  return {
    findOne: async (query: { email?: string }) => {
      console.log('Finding user with query:', query);
      return users.find(user => user.email === query.email) || null;
    },
    
    insertOne: async (doc: any) => {
      console.log('Inserting new user:', doc);
      const _id = Math.random().toString(36).substring(2, 15);
      const newUser = { ...doc, _id };
      users.push(newUser);
      return { insertedId: _id };
    }
  };
};

// No need for actual connection in the browser
export const connectToDatabase = async () => {
  console.log('Simulating MongoDB connection');
  // Return a mock DB object
  return { collection: () => getUsersCollection() };
};

// No need to close connection in the browser
export const closeConnection = async () => {
  console.log('Simulating MongoDB connection close');
};
