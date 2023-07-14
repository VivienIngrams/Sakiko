// import {ExternalLinkIcon} from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import {FC, memo} from 'react';

// import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
// import {PortfolioItem} from '../../data/dataDef';
// import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../../components/Layout/Section';
import Footer from '../../components/Sections/Footer';
// import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';
// import ReactPlayer from 'react-player';
// import {FC, memo} from 'react';
// import {isMobile} from '../../config';
import Header from '../../components/Sections/Header';
import {galleryItemsDance, galleryItemsHands, galleryItemsModel, galleryItemsStage, SectionId} from '../../data/data';
// import VideoPlayer from './Video';

const danceImage = galleryItemsDance[3].image;
const handsImage = galleryItemsHands[0].image;
const stageImage = galleryItemsStage[9].image;
const videosImage = galleryItemsDance[1].image;
const modelImage = galleryItemsModel[5].image;

const Gallery: FC = memo(() => {
  return (
    <>
      <Header />
      <Section className="bg-black " sectionId={SectionId.Gallery}>
        <div className="flex min-h-screen items-center justify-center ">
          <div className="flex flex-col justify-center md:max-w-screen-xl md:flex-row md:flex-wrap md:columns-3 ">
            <div className="col-span-1 m-5 flex justify-center">
              <Link href="/gallery/dance" passHref>
                <a className="flex flex-col justify-center">
                  <p className="text-center text-2xl font-thin uppercase text-white">Dance</p>
                  <div className="md:h-100 relative h-60 w-40 overflow-hidden  md:w-80">
                    <Image alt="about-me-image" layout="fill" objectFit="cover" src={danceImage} />
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-span-1 m-5 flex justify-center">
              <Link href="/gallery/hands" passHref>
                <a className="flex flex-col justify-center">
                  <p className="text-center text-2xl font-thin uppercase text-white">Hands</p>
                  <div className="md:h-100 relative h-60 w-40 overflow-hidden  md:w-80">
                    <Image alt="about-me-image" layout="fill" objectFit="cover" src={handsImage} />
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-span-1 m-5 flex justify-center">
              <Link href="/gallery/model" passHref>
                <a className="flex flex-col justify-center">
                  <p className="text-center text-2xl font-thin uppercase text-white">Model</p>
                  <div className="md:h-100 relative h-60 w-40 overflow-hidden  md:w-80">
                    <Image alt="about-me-image" layout="fill" objectFit="cover" src={modelImage} />
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-span-1 m-5 flex justify-center">
              <Link href="/gallery/stage" passHref>
                <a className="flex flex-col justify-center">
                  <p className="text-center text-2xl font-thin uppercase text-white">On Stage</p>
                  <div className="md:h-100 relative h-60 w-40 overflow-hidden  md:w-80">
                    <Image alt="about-me-image" layout="fill" objectFit="cover" src={stageImage} />
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-span-1 m-5 flex justify-center">
              <Link href="/gallery/videos" passHref>
                <a className="flex flex-col justify-center">
                  <p className="text-center text-2xl font-thin uppercase text-white">Videos</p>
                  <div className="md:h-100 relative h-60 w-40 overflow-hidden  md:w-80">
                    <Image alt="about-me-image" layout="fill" objectFit="cover" src={videosImage} />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
});

Gallery.displayName = 'Gallery';
export default Gallery;

// const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
//   const [mobile, setMobile] = useState(false);
//   const [showOverlay, setShowOverlay] = useState(false);
//   const linkRef = useRef<HTMLAnchorElement>(null);

// useEffect(() => {
//   // Avoid hydration styling errors by setting mobile in useEffect
//   if (isMobile) {
//     setMobile(true);
//   }
// }, []);
// useDetectOutsideClick(linkRef, () => setShowOverlay(false));

// const handleItemClick = useCallback(
//   (event: MouseEvent<HTMLElement>) => {
//     if (mobile && !showOverlay) {
//       event.preventDefault();
//       setShowOverlay(!showOverlay);
//     }
//   },
//   [mobile, showOverlay],
// );

//   return (
//     <a
//       className={classNames(
//         'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
//         {'opacity-0 hover:opacity-80': !mobile},
//         showOverlay ? 'opacity-80' : 'opacity-0',
//       )}
//       href={url}
//       onClick={handleItemClick}
//       ref={linkRef}
//       target="_blank">
//       <div className="relative h-full w-full p-4">
//         <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto">
//           <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
//           <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
//         </div>
//         <ExternalLinkIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
//       </div>
//     </a>
//   );
// });
