
import { MongoClient, ServerApiVersion } from 'mongodb';

// Replace with your actual MongoDB connection string
// Note: In production, this should come from environment variables
const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.zmychm0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with appropriate options
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Database and collection names
const dbName = 'quantgenailabs';
const usersCollection = 'users';

// Connect to the database
export const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB");
    return client.db(dbName);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
};

// Get users collection
export const getUsersCollection = async () => {
  const db = await connectToDatabase();
  return db.collection(usersCollection);
};

// Close the connection
export const closeConnection = async () => {
  await client.close();
  console.log("MongoDB connection closed");
};
