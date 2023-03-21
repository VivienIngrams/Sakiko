import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const {actions} = heroData;

const About: FC = memo(() => {
  const {profileImageSrc, bookImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-orange-900" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        <div
          className={classNames('col-span-1 flex flex-col items-center gap-y-6', {'md:col-span-4': !!profileImageSrc})}>
          <div className="flex flex-col items-center gap-y-2">
            <h2 className="text-center text-2xl font-bold text-white">About me</h2>
            <p className="prose prose-sm text-center text-gray-300 sm:prose-base">{description}</p>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
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
