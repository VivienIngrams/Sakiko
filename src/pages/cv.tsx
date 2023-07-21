import classNames from 'classnames';
import {MongoClient} from 'mongodb';
import Link from 'next/link';
import {FC, memo} from 'react';

import Section from '../components/Layout/Section';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import ResumeSection, {TimelineItems} from '../components/Sections/ResumeSection';
import {education, heroData, SectionId} from '../data/data';

const {actions} = heroData;

const password: string = process.env.MONGODB_PASSWORD || '';
const encodedPassword: string = encodeURIComponent(password);

interface CVProps {
  cvData: {
    company: string;
    role: string;
    date: string;
    piece: string;
    id: string;
  }[];
}

const Cv: FC<CVProps> = memo(props => {
  return (
    <>
      <Header />
      <Section className="bg-[#190c41]" sectionId={SectionId.CV}>
        <div className="flex w-full justify-center gap-x-4 py-20 ">
          {actions.map(({href, text, primary, Icon}) => (
            <a
              className={classNames(
                ' flex gap-x-2 rounded-full border-2 border-red-900 bg-neutral-200/50 py-2 px-4 text-sm font-medium text-red-900 hover:bg-neutral-400/50 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                primary ? 'border-red-900 ring-red-900' : 'border-red-900 ring-red-900',
              )}
              href={href}
              key={text}>
              {text}
              {Icon && <Icon className="h-5 w-5 text-red-900 sm:h-6 sm:w-6" />}
            </a>
          ))}
        </div>{' '}
        <div className="flex flex-col divide-y-2 divide-neutral-300 text-white">
          <ResumeSection title="Work Experience">
            {props.cvData.map((item, index) => (
              <TimelineItems item={item} key={`${item.company}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection title="Training">
            {education.map((item, index) => (
              <TimelineItems item={item} key={`${item.company}-${index}`} />
            ))}
          </ResumeSection>
          <div className=" pb-8">
            <div className="flex justify-center">
              <Link href="/update" passHref>
                <a>LOGIN</a>
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
});

Cv.displayName = 'Resume';
export default Cv;

export async function getStaticProps() {
  try {
    const client = await MongoClient.connect(
      `mongodb+srv://vivien:${encodedPassword}@cluster0.9j3scal.mongodb.net/cv?retryWrites=true&w=majority`,
    );
    const db = client.db();
    const cvCollection = db.collection('cv');

    const cvData = await cvCollection.find().sort({_id: -1}).toArray();

    client.close();

    return {
      props: {
        cvData: cvData.map(cvEntry => ({
          company: cvEntry.data.company,
          role: cvEntry.data.role,
          date: cvEntry.data.date,
          piece: cvEntry.data.piece,
          id: cvEntry._id.toString(),
        })),
      },
      revalidate: 10000,
    };
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);

    return {
      props: {
        cvData: [],
      },
    };
  }
}
