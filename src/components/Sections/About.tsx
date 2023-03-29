import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const {actions} = heroData;

const About: FC = memo(() => {
  const {profileImageSrc, bookImageSrc, description, description2} = aboutData;
  return (
    <Section className="bg-red-900" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        <div
          className={classNames('col-span-1 flex flex-col items-center gap-y-6', {'md:col-span-4': !!profileImageSrc})}>
          <div className="flex flex-col items-center gap-y-2">
            <h2 className="text-center uppercase Khand text-2xl font-thin text-white">About me</h2>
            {!!profileImageSrc && (
              <div className="col-span-1 flex justify-center md:justify-start">
                <div className="relative h-40 w-40 overflow-hidden rounded-xl md:h-32 md:w-32">
                  <Image alt="about-me-image" layout="fill" objectFit="cover" src={profileImageSrc} />
                </div>
              </div>
            )}
            <p className="prose prose-sm p-5 font-thin text-center text-gray-300 sm:prose-base">{description}</p>
            {!!profileImageSrc && (
              <div className="col-span-1 flex justify-center md:justify-start">
                <div className="relative h-40 w-40 overflow-hidden rounded-xl md:h-32 md:w-32">
                  <Image alt="about-me-image" layout="fill" objectFit="cover" src={bookImageSrc} />
                </div>
              </div>
            )}{' '}
            <p className="prose prose-sm p-5 font-thin text-center text-gray-300 sm:prose-base">{description2}</p>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-gray-900 ring-gray-900' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>{' '}
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
