import classNames from 'classnames';
import {MongoClient} from 'mongodb';
import {FC, memo} from 'react';

import Section from '../../components/Layout/Section';
import Footer from '../../components/Sections/Footer';
import Header from '../../components/Sections/Header';
import {galleryItemsVideos, SectionId} from '../../data/data';

const password: string = process.env.MONGODB_PASSWORD || '';
const encodedPassword: string = encodeURIComponent(password);

interface videoProps {
  videoData: {
    src: string;
    title: string;
    id: string;
  }[];
}

const Videos: FC<videoProps> = memo((props) => {
  return (
    <>
      <Header />
      <Section className="bg-[#190c41]" sectionId={SectionId.Gallery}>
        <div className="mb-20 flex flex-col items-center gap-y-8">
          <h2 className="self-center text-xl font-thin uppercase text-white">Videos</h2>
          <div></div>
          <div className="grid max-w-full grid-cols-1 gap-y-8 ">
            {/* {props.videoData.map((item, index) => { */}
            {galleryItemsVideos.map((item, index) => {
              const {src} = item;
              return (
                <div className="w-full" key={index}>
                  <div className={classNames('relative h-max w-full')}>
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      height="315"
                      src={src}
                      
                      title="video"
                      width="560"></iframe>
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

Videos.displayName = 'Videos';
export default Videos;


export async function getStaticProps() {
  try {
    const client = await MongoClient.connect(
      `mongodb+srv://vivien:${encodedPassword}@cluster0.9j3scal.mongodb.net/video?retryWrites=true&w=majority`,
    );
    const db = client.db();
    const videoCollection = db.collection('video');

    const videoData = await videoCollection.find().toArray();

    client.close();

    return {
      props: {
        videoData: videoData.map(videoEntry => ({
          src: videoEntry.data.src,
          title: videoEntry.data.title,
          id: videoEntry._id.toString(),
        })),
      },
      revalidate: 10000,
    };
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);

    return {
      props: {
        videoData: [],
      },
    };
  }
}
