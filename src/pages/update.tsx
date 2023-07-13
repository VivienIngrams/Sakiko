import classNames from 'classnames';
import {FC, memo} from 'react';

import Section from '../components/Layout/Section';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import {SectionId} from '../data/data';

const Update: FC = memo(() => {
 
  return (
    <>
      <Header />
      <Section className="bg-black" sectionId={SectionId.Update}>
        <div className={classNames('grid grid-cols-1 gap-y-4')}>
          
        </div>
      </Section>
      <Footer />
    </>
  );
});

Update.displayName = 'Update';
export default Update;
