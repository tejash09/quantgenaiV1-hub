
import bcrypt from 'bcryptjs';
import { getUsersCollection } from './mongodb';

export type User = {
  _id?: string;
  id?: string;
  name: string;
  email: string;
  password?: string;
};

// Create a new user
export const createUser = async (name: string, email: string, password: string): Promise<User | null> => {
  try {
    const collection = await getUsersCollection();
    
    // Check if user already exists
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create new user object
    const newUser = {
      name,
      email,
      password: hashedPassword,
      createdAt: new Date()
    };
    
    // Insert user into the simulated database
    const result = await collection.insertOne(newUser);
    
    // Return user without password
    return {
      id: result.insertedId.toString(),
      name,
      email
    };
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Verify user credentials
export const verifyUser = async (email: string, password: string): Promise<User | null> => {
  try {
    const collection = await getUsersCollection();
    
    // Find the user by email
    const user = await collection.findOne({ email });
    if (!user) {
      return null;
    }
    
    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }
    
    // Return user without password
    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email
    };
  } catch (error) {
    console.error('Error verifying user:', error);
    throw error;
  }
};
