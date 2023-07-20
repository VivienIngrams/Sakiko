import classNames from 'classnames';
// import {MongoClient} from 'mongodb';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {FC, memo} from 'react';

import Section from '../../components/Layout/Section';
import Footer from '../../components/Sections/Footer';
import Header from '../../components/Sections/Header';
import {galleryItemsDance, galleryItemsHands, galleryItemsModel, galleryItemsStage, SectionId} from '../../data/data';
import {GalleryItem} from '../../data/dataDef';

// const password: string = process.env.MONGODB_PASSWORD || '';
// const encodedPassword: string = encodeURIComponent(password);

// interface PhotoProps {
//   photoData: {
//     image: string;
//     category: string;
//     id: string;
//   }[];
// }

// const Gallery: FC<PhotoProps> = memo((props) => {
//   console.log(props.photoData);
const Gallery: FC = memo(() => {

  const router = useRouter();

  let section: GalleryItem[] = [];

  switch (router.query.category) {
    case 'dance':
      section = galleryItemsDance;
      break;
    case 'model':
      section = galleryItemsModel;
      break;
    case 'stage':
      section = galleryItemsStage;
      break;
    case 'hands':
      section = galleryItemsHands;
      break;
  }

  return (
    <>
      <Header />
      <Section className="bg-[#190c41]" sectionId={SectionId.Gallery}>
        <div className="mb-20 flex flex-col justify-items-center gap-y-8">
          <h2 className="self-center text-xl font-thin uppercase text-white">{router.query.category}</h2>
          <div className=" w-full columns-1 md:columns-2 ">
            {section.map((item, index) => {
              const {image} = item;
              return (
                <div className="pb-6" key={index}>
                  <div
                    className={classNames(
                      'relative h-max w-full overflow-hidden shadow-lg shadow-black/30 lg:shadow-xl',
                    )}>
                    <Image alt="Sakiko" layout="responsive" placeholder="blur" src={image} />
                    {/* <ItemOverlay item={item} /> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
});

Gallery.displayName = 'Gallery';
export default Gallery;


// export async function getStaticPaths() {
//   const client = await MongoClient.connect(
//           `mongodb+srv://vivien:${encodedPassword}@cluster0.9j3scal.mongodb.net/photo?retryWrites=true&w=majority`,
//         );
//         const db = client.db();
//         const photoCollection = db.collection('photo');

//         const photos = await photoCollection.find().toArray();

//       client.close();

//   return {
//   fallback: false,
//     paths: photos.map(photo => ({params: {category: photo.data.category}}))
//   };
// }

// export async function getStaticProps() {
//   try {
//     const client = await MongoClient.connect(
//       `mongodb+srv://vivien:${encodedPassword}@cluster0.9j3scal.mongodb.net/photo?retryWrites=true&w=majority`,
//     );
//     const db = client.db();
//     const photoCollection = db.collection('photo');

//     const photoData = await photoCollection.find().toArray();

//     client.close();

//     return {
//       props: {
//         photoData: photoData.map(photo => ({
//           image: photo.data.image,
//           category: photo.data.category,
//           id: photo._id.toString(),
//         })),
//       },
//       revalidate: 10000,
//     };
//   } catch (error) {
//     console.error('Error fetching data from MongoDB:', error);

//     return {
//       props: {
//         photoData: [],
//       },
//     };
//   }
// }
