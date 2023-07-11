import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import Section from '../components/Layout/Section';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import {aboutData, SectionId} from '../data/data';

const About: FC = memo(() => {
  const {profileImageSrc, bookImageSrc, description, description2} = aboutData;
  return (
    <>
      <Header />
      <Section className="bg-black" sectionId={SectionId.About}>
        <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
          <div
            className={classNames('col-span-1 flex flex-col items-center gap-y-6', {
              'md:col-span-4': !!profileImageSrc,
            })}>
            <div className="flex w-auto flex-col items-center gap-y-2">
              <h2 className="mb-10 text-center text-2xl font-thin uppercase text-white">About me</h2>
              <div className="flex ">
                {!!profileImageSrc && (
                  <div className="col-span-1 m-5 flex justify-center md:justify-start">
                    <div className="relative h-40 w-40 overflow-hidden rounded-xl md:h-32 md:w-32">
                      <Image alt="about-me-image" layout="fill" objectFit="cover" src={profileImageSrc} />
                    </div>
                  </div>
                )}
                {!!profileImageSrc && (
                  <div className="col-span-1 m-5 flex justify-center md:justify-start">
                    <div className="relative h-40 w-40 overflow-hidden rounded-xl md:h-32 md:w-32">
                      <Image alt="about-me-image" layout="fill" objectFit="cover" src={bookImageSrc} />
                    </div>
                  </div>
                )}{' '}
              </div>
              <p className="prose prose-sm p-5 text-center font-khand font-thin text-gray-300 sm:prose-base">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
});

About.displayName = 'About';
export default About;
