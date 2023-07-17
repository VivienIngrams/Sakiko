import {MongoClient} from 'mongodb';
import {NextApiRequest, NextApiResponse} from 'next';


interface photoData {
  image: string;
  category: string;
}

interface cvData {
  company: string;
  role: string;
  date: string;
  piece: string;
}

const password: string = process.env.MONGODB_PASSWORD || ''; 
const encodedPassword: string = encodeURIComponent(password);


async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
   if(req.body.image) {
     const data: photoData = req.body;
     try {
       const client = await MongoClient.connect(`mongodb+srv://vivien:${encodedPassword}@cluster0.9j3scal.mongodb.net/photo?retryWrites=true&w=majority`);
       const db = client.db();
       const photoCollection = db.collection('photo');
       
       const result = await photoCollection.insertOne({data});
 
       console.log(result);
 
       res.status(200).json({message: 'Success'});
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        res.status(500).json({message: 'Server error'});
      }
    }
   }    if(req.body.company) {
    const data: cvData = req.body;
    try {
      const client = await MongoClient.connect(`mongodb+srv://vivien:${encodedPassword}@cluster0.9j3scal.mongodb.net/cv?retryWrites=true&w=majority`);
      const db = client.db();
      const cvCollection = db.collection('cv');
      
      const result = await cvCollection.insertOne({data});

      console.log(result);

      res.status(200).json({message: 'Success'});
     } catch (error) {
       console.error('Error connecting to MongoDB:', error);
       res.status(500).json({message: 'Server error'});
     }
   }
  }


export default handler;
