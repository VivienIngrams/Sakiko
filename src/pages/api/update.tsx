import {MongoClient} from 'mongodb';
import {NextApiRequest, NextApiResponse} from 'next';


interface Data {
  image: string;
  category: string;
}

const password: string = process.env.MONGODB_PASSWORD || ''; 
const encodedPassword: string = encodeURIComponent(password);


async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data: Data = req.body;


    try {
      const client = await MongoClient.connect(`mongodb+srv://vivien:${encodedPassword}@cluster0.9j3scal.mongodb.net/?retryWrites=true&w=majority`);
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
