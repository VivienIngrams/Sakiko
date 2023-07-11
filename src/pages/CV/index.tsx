import classNames from 'classnames';
import {FC, memo} from 'react';

import Section from '../../components/Layout/Section';
import Footer from '../../components/Sections/Footer';
import Header from '../../components/Sections/Header';
import {education, experience, heroData, SectionId} from '../../data/data';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

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
