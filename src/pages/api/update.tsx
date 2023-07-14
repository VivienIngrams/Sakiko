import {MongoClient} from 'mongodb';
import {NextApiRequest, NextApiResponse} from 'next';

interface Data {
  image: string;
  category: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data: Data = req.body;

    const mongodbUrl: string = process.env.MONGDB_URL || ''; // Replace with the correct environment variable name

    try {
      const client = await MongoClient.connect(mongodbUrl);
      const db = client.db();
      const sakikoCollection = db.collection('sakiko');
      
      const result = await sakikoCollection.insertOne({data});

      console.log(result);

      res.status(200).json({message: 'Success'});
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      res.status(500).json({message: 'Server error'});
    }
  }
}

export default handler;
