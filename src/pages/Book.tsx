import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import Section from '../components/Layout/Section';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import {aboutData, SectionId} from '../data/data';

const Book: FC = memo(() => {
  const {profileImageSrc, aboutItems, bookImage1, bookImage2, bookImage3} = aboutData;
  return (
    <>
      <Header />
      <Section className="bg-[#002147]" sectionId={SectionId.Book}>
        <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
          <div
            className={classNames('col-span-1 flex flex-col items-center gap-y-6', {
              'md:col-span-4': !!profileImageSrc,
            })}>
            <div className="flex flex-col items-center gap-y-5"></div>
            <h2 className="text-center text-2xl font-thin uppercase text-white">Book</h2>
            <ul className="grid grid-cols-1  gap-2 sm:grid-cols-3 sm:gap-x-40 md:gap-x-50">
              {aboutItems.map(({label, text, Icon}, idx) => (
                <li className="col-span-1 flex  gap-x-2" key={idx}>
                  {Icon && <Icon className="h-5 w-5 text-white" />}
                  <span className=" font-normal text-white">{label}:</span>
                  <span className="text-gray-300">{text}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap flex-col sm:flex-row justify-center ">
              {!!profileImageSrc && (
                <div className="col-span-1 m-10 flex justify-center md:justify-start">
             
                  <div className="relative overflow-hidden  h-60 w-40  sm:h-80 sm:w-50 md:w-60 md:h-90 xl:h-120 xl:w-70">
                    <Image alt="about-me-image" layout="fill" objectFit="cover" src={bookImage1} />
                  </div>
                </div>
              )}
              {!!profileImageSrc && (
                <div className="col-span-1 m-10 flex justify-center md:justify-start">
              
              <div className="relative overflow-hidden  h-60 w-40  sm:h-80 sm:w-50 md:w-60 md:h-90 xl:h-120 xl:w-70">
                    <Image alt="about-me-image" layout="fill" objectFit="cover" src={bookImage2} />
                  </div>
                </div>
              )}
              {!!profileImageSrc && (
                <div className="col-span-1 m-10 flex justify-center md:justify-start">
                
                <div className="relative overflow-hidden  h-60 w-40  sm:h-80 sm:w-50 md:w-60 md:h-90 xl:h-120 xl:w-70">
                    <Image alt="about-me-image" layout="fill" objectFit="cover" src={bookImage3} />
                  </div>
                </div>
              )}{' '}
            </div>{' '}
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
});

Book.displayName = 'Book';
export default Book;
