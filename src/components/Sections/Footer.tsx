import {FC, memo} from 'react';

import Socials from '../Socials';

const Footer: FC = memo(() => (
  <div className="fixed bottom-0 w-full bg-neutral-900/30 px-4 py-3 sm:px-8 sm:pt-5 sm:pb-5">
    <div className="flex flex-col items-center gap-y-2">
      <div className="flex gap-x-2 text-neutral-300">
        <Socials />
      </div>
      <span className="text-sm text-neutral-100 ">sakiko_oishi@yahoo.com</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
