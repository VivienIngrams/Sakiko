import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

import Section from '../../components/Layout/Section';
import Footer from '../../components/Sections/Footer';
import Header from '../../components/Sections/Header';
import {education, experience, heroData, SectionId} from '../../data/data';

const {actions} = heroData;

const CV: FC = memo(() => {
  return (
    <>
    <Header />
    <Section className="bg-neutral-100" sectionId={SectionId.CV}>
    <div className="flex w-full justify-center gap-x-4">
                {actions.map(({href, text, primary, Icon}) => (
                  <a
                    className={classNames(
                      'flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-red-900 ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                      primary ? 'border-gray-900 ring-gray-900' : 'border-red-900 ring-red-900',
                    )}
                    href={href}
                    key={text}>
                    {text}
                    {Icon && <Icon className="h-5 w-5 text-red-900 sm:h-6 sm:w-6" />}
                  </a>
                ))}
              </div>{' '}
      <div className="flex flex-col divide-y-2 divide-neutral-300">
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
    <Footer /></>
  );
});

CV.displayName = 'Resume';
export default CV;

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max mb-5">
          <h2 className="text-xl font-bold uppercase text-orange-800 ">{title}</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-800" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';


// eslint-disable-next-line import/first
import {TimelineItem} from '../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
