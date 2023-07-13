import {FC, memo} from 'react';

const Videos: FC = memo(() => {
  return (
    <div className="mb-20 flex flex-col gap-y-8">
      <h2 className="self-center text-xl font-bold text-white">On Stage</h2>
      <div className=" w-full columns-2 md:columns-3 lg:columns-4"></div>
    </div>
  );
});

Videos.displayName = 'Videos';
export default Videos;
