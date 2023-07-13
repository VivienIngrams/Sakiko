import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {galleryItemsStage} from '../../data/data';

const OnStage: FC = memo(() => {
  return (
    <div className="mb-20 flex flex-col gap-y-8">
    <h2 className="self-center text-xl font-bold text-white">On Stage</h2>
    <div className=" w-full columns-2 md:columns-3 lg:columns-4">
      {galleryItemsStage.map((item, index) => {
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
  );
});

OnStage.displayName = 'OnStage';
export default OnStage;
