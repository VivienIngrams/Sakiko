import {StaticImageData} from 'next/image';
import {FC, SVGProps} from 'react';

import {IconProps} from '../components/Icon/Icon';

export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl?: string;
  twitterCardType?: 'summary' | 'summary_large';
  twitterTitle?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterDomain?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
}

/**
 * Hero section
 */
export interface Hero {
  imageSrc: string;
  name: string;
  description: JSX.Element;
  actions: HeroActionItem[];
}

interface HeroActionItem {
  href: string;
  text: string;
  primary?: boolean;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

/**
 * About section
 */
export interface About {
  profileImageSrc?: string;
  bookImageSrc: string;
  description: string;
  aboutItems: AboutItem[];
  bookImage1: string;
  bookImage2: string;
  bookImage3: string;
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

/**
 * Gallery section
 */
export interface GalleryItem {
  image: string | StaticImageData;
}

export interface GalleryVideo {
  src: string;
  title: string;
}

export interface GalleryData {
  image: string;
  category: string;
}


/**
 * CV section
 */
export interface TimelineItem {
  date: string;
  role: string;
  company: string;
  piece: string;
}

export interface cvData {
  company: string;
  role: string;
  date: string;
  piece: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}

// Forms
// *
export interface AuthFormProps {
  onLogin: (loginData: {email: string; password: string}) => void;
}

export interface UpdateFormProps {
  onAddPhoto: (data: GalleryData) => void;
  onAddVideo: (data: GalleryVideo) => void;
  onAddExperience: (data: cvData) => void;
}
