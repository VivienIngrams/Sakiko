
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';


const Book: FC = memo(() => {
  const {profileImageSrc,  aboutItems, bookImage1, bookImage2, bookImage3} = aboutData;
  return (
    <Section className="bg-orange-900" sectionId={SectionId.Book}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        <div className={classNames('col-span-1 flex flex-col items-center gap-y-6', {'md:col-span-4': !!profileImageSrc})}>
          <div className="flex flex-col items-center gap-y-2">
            </div>
            <h2 className="text-2xl font-thin uppercase text-white text-center">Book</h2>
       
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex justify-center gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-normal text-white">{label}:</span>
                <span className=" text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
          <div className='flex flex-wrap justify-center'>
          {!!profileImageSrc && (
          <div className="col-span-1 m-5 flex justify-center md:justify-start">
            <div className="relative h-40 w-40 overflow-hidden rounded-xl md:h-50 md:w-32">
              <Image alt="about-me-image" layout="fill" objectFit="cover" src={bookImage1} />
            </div>
          </div>
        )}
        {!!profileImageSrc && (
          <div className="col-span-1 m-5 flex justify-center md:justify-start">
            <div className="relative h-40 w-40 overflow-hidden rounded-xl md:h-50 md:w-32">
              <Image alt="about-me-image" layout="fill" objectFit="cover" src={bookImage2} />
            </div>
          </div>
        )}
{!!profileImageSrc && (
          <div className="col-span-1 m-5 flex justify-center md:justify-start">
            <div className="relative h-40 w-40 overflow-hidden rounded-xl md:h-50 md:w-32">
              <Image alt="about-me-image" layout="fill" objectFit="cover" src={bookImage3} />
            </div>
          </div>
        )}     </div>   </div>
      </div>
    </Section>
  );
});

Book.displayName = 'Book';
export default Book;
