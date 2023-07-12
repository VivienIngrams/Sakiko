
import Image from 'next/image';
import Link from 'next/link';
import {FC, memo, useMemo} from 'react';

import Page from '../components/Layout/Page';
import Section from '../components/Layout/Section';
import Footer from '../components/Sections/Footer';
import {heroData, homePageMeta, SectionId} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
// const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {imageSrc, name} = heroData;
  const navSections = useMemo(() => [SectionId.About, SectionId.Gallery, SectionId.Book, SectionId.CV], []);
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Section noPadding sectionId={SectionId.Hero}>
        <div className="items-top relative flex h-screen w-screen justify-center pt-14">
          <Image
            alt={`${name}-image`}
            className="absolute z-0"
            layout="fill"
            objectFit="cover"
            priority
            src={imageSrc}
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-70"></div>
          <div className="z-10  max-w-screen-lg px-4 lg:px-0 ">
            <div className="flex flex-col  items-center gap-y-6 rounded-xl  text-center ">
              <h1 className="mt-5 font-urban text-4xl font-thin text-white sm:text-5xl lg:text-7xl">{name}</h1>
              {heroData.description}
              
              <div className=" p-2 mt-5 capitalize max-w-screen-lg px-4 font-urban text-2xl font-thin text-white space-y-0  sm:text-3xl lg:px-0 lg:text-5xl">
                {navSections.map((section: string) => (
                  <div className="p-4" key={section}>
                    <Link href={`/${section}`} >{section}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </Page>
  );
});

export default Home;
