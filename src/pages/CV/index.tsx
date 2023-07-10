import {FC, memo} from 'react';

import Section from '../../components/Layout/Section';
import Footer from '../../components/Sections/Footer';
import Header from '../../components/Sections/Header';
import {education, experience, SectionId} from '../../data/data';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const CV: FC = memo(() => {
  return (
    <>
    <Header />
    <Section className="bg-neutral-100" sectionId={SectionId.CV}>
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
