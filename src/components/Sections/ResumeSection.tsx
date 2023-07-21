import {FC, memo, PropsWithChildren} from 'react';

import {TimelineItem} from '../../data/dataDef';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative mb-5 h-max">
          <h2 className="text-xl font-bold uppercase text-red-800 ">{title}</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-red-800" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;

export const TimelineItems: FC<{item: TimelineItem}> = memo(({item}) => {
  const {company, date, role, piece} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{role}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
        <h2 className="text-xl font-bold text-neutral-400">{company}</h2>
        <div> {piece}</div>
      </div>
    </div>
  );
});

TimelineItems.displayName = 'TimelineItems';
