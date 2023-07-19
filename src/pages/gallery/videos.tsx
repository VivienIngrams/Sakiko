import classNames from 'classnames';
import {FC, memo} from 'react';

import Section from '../../components/Layout/Section';
import Footer from '../../components/Sections/Footer';
import Header from '../../components/Sections/Header';
import {galleryItemsVideos, SectionId} from '../../data/data';

const Videos: FC = memo(() => {
  return (
    <>
      <Header />
      <Section className="bg-[#190c41]" sectionId={SectionId.Gallery}>
        <div className="mb-20 flex flex-col items-center gap-y-8">
          <h2 className="self-center text-xl font-thin uppercase text-white">Videos</h2>
          <div className="grid max-w-full grid-cols-1 gap-y-8 ">
            {galleryItemsVideos.map((item, index) => {
              const {src} = item;
              return (
                <div className="w-full" key={`${index}`}>
                  <div className={classNames('relative h-max w-full')}>
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      height="315"
                      src={src}
                      
                      title="video"
                      width="560"></iframe>
                    {/* <ItemOverlay item={item} /> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
});

Videos.displayName = 'Videos';
export default Videos;
