
import dynamic from 'next/dynamic';
import Image from 'next/image';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Section from '../components/Layout/Section';
import Footer from '../components/Sections/Footer';
import Socials from '../components/Socials';
import {heroData, homePageMeta, SectionId} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {imageSrc, name} = heroData;

  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      {/* <Hero /> */}
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
          <div className="z-10  max-w-screen-lg px-4 lg:px-0">
            <div className="flex flex-col items-center gap-y-6 rounded-xl  text-center  ">
              <h1 className="mt-5 font-urban text-4xl font-thin text-white sm:text-5xl lg:text-7xl">{name}</h1>
              {heroData.description}
              <div className="flex gap-x-4 text-neutral-100">
                <Socials />
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
