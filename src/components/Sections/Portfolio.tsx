// import {ExternalLinkIcon} from '@heroicons/react/outline';
import { ExternalLinkIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

// import ReactPlayer from 'react-player';
// import {FC, memo} from 'react';
import {isMobile} from '../../config';
import {
  portfolioItemsDance,
  portfolioItemsHands,
  portfolioItemsModel,
  portfolioItemsStage,
  SectionId,
} from '../../data/data';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
// import {PortfolioItem} from '../../data/dataDef';
// import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';
import VideoPlayer from './Video';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-1000" sectionId={SectionId.Portfolio}>
      <div className="mb-20 flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Dancer</h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItemsDance.map((item, index) => {
            const {image} = item;
            return (
              <div className="pb-6" key={`${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt="Sakiko" layout="responsive" placeholder="blur" src={image} />
                  {/* <ItemOverlay item={item} /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-20 flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Model</h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItemsModel.map((item, index) => {
            const {image} = item;
            return (
              <div className="pb-6" key={`${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt="Sakiko" layout="responsive" placeholder="blur" src={image} />
                  {/* <ItemOverlay item={item} /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>{' '}
      <div className="mb-20 flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Hands</h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItemsHands.map((item, index) => {
            const {image} = item;
            return (
              <div className="pb-6" key={`${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt="Sakiko" layout="responsive" placeholder="blur" src={image} />
                  {/* <ItemOverlay item={item} /> */}
                  {/* <ReactPlayer  url='https://www.instagram.com/p/CWSXNKVo7KO/' /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-20 flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">On Stage</h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItemsStage.map((item, index) => {
            const {image} = item;
            return (
              <div className="pb-6" key={`${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt="Sakiko" layout="responsive" placeholder="blur" src={image} />
                  {/* <ItemOverlay item={item} /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

useEffect(() => {
  // Avoid hydration styling errors by setting mobile in useEffect
  if (isMobile) {
    setMobile(true);
  }
}, []);
useDetectOutsideClick(linkRef, () => setShowOverlay(false));

const handleItemClick = useCallback(
  (event: MouseEvent<HTMLElement>) => {
    if (mobile && !showOverlay) {
      event.preventDefault();
      setShowOverlay(!showOverlay);
    }
  },
  [mobile, showOverlay],
);

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ExternalLinkIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});
