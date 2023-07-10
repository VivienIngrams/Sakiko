import {FC, memo} from 'react';

import Socials from '../Socials';

const Footer: FC = memo(() => (
  <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pt-14 sm:pb-8">
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-neutral-300">
        <Socials />
      </div>
      <span className="text-sm text-neutral-400">sakiko_oishi@yahoo.com</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
