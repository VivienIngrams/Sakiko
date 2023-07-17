import classNames from 'classnames';
import {MongoClient} from 'mongodb';
import {FC, memo, PropsWithChildren} from 'react';

import Section from '../components/Layout/Section';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import {education, experience, heroData, SectionId} from '../data/data';

const {actions} = heroData;


const password: string = process.env.MONGODB_PASSWORD || ''; 
const encodedPassword: string = encodeURIComponent(password);


// ResumeSection = Modelling, Dance, Films, Video clips

const CV: FC = memo(() => {
  return (
    <>
      <Header />
      <Section className="bg-black" sectionId={SectionId.CV}>
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
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection title="Training">
            {education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
        </div>
      </Section>
      <Footer />
    </>
  );
});

CV.displayName = 'Resume';
export default CV;

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative mb-5 h-max">
          <h2 className="text-xl font-bold uppercase text-red-800 ">{title}</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-red-800" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';


// eslint-disable-next-line import/first
import {TimelineItem} from '../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, role, piece} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{role}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
        <h2 className="text-xl font-bold text-neutral-400">{title}</h2>
        <div> {piece}</div>
       
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';

export async function getStaticProps() {

  const client = await MongoClient.connect(`mongodb+srv://vivien:${encodedPassword}@cluster0.9j3scal.mongodb.net/cv?retryWrites=true&w=majority`);
  const db = client.db();
  const cvCollection = db.collection('cv');

  const cvData = await cvCollection.find().toArray();
console.log(cvData);
  client.close();

  return {
    props: {
      cvData: cvData.map((cvEntry) => ({
        company: cvEntry.data.company,
        role: cvEntry.data.role,
        date: cvEntry.data.date,
        piece: cvEntry.data.piece,
      }))
    },
    revalidate: 10000
  };
}
