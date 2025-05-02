import { MongoClient, Db } from 'mongodb';
import 'dotenv/config';

let cachedDb: Db | null = null;

const MONGODB_URI = process.env.MONGO_CONNECTIONSTRING || '';

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI não definida no .env');
}

export async function connectToDatabase(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(MONGODB_URI);
  const dbName = client.db().databaseName || 'default-db';
  cachedDb = client.db(dbName);
  return cachedDb;
}
