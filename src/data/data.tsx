import {DownloadIcon} from '@heroicons/react/outline';

import FacebookIcon from '../components/Icon/FacebookIcon';
// import pdf from '../assets/resume.pdf';
import InstagramIcon from '../components/Icon/InstagramIcon';
import stageImage1 from '../images/portfolio/1.jpg';
import stageImage2 from '../images/portfolio/2.jpg';
import stageImage3 from '../images/portfolio/3.jpg';
import stageImage4 from '../images/portfolio/4.jpg';
import stageImage5 from '../images/portfolio/5.jpg';
import stageImage6 from '../images/portfolio/6.jpg';
import stageImage7 from '../images/portfolio/7.jpg';
import stageImage8 from '../images/portfolio/8.jpg';
import stageImage9 from '../images/portfolio/9.jpg';
import stageImage10 from '../images/portfolio/10.jpg';
import stageImage11 from '../images/portfolio/11.jpg';
import stageImage12 from '../images/portfolio/12.jpg';
import stageImage13 from '../images/portfolio/13.jpg';
import stageImage14 from '../images/portfolio/14.jpg';
import stageImage15 from '../images/portfolio/15.jpg';
import stageImage16 from '../images/portfolio/16.jpg';
import stageImage17 from '../images/portfolio/17.jpg';
import profilepic from '../images/portfolio/book.jpg';
import bookImage from '../images/portfolio/book(1).jpg';
import porfolioImage18 from '../images/portfolio/book(2).jpg';
import porfolioImage19 from '../images/portfolio/kikk.jpg';
import porfolioImage22 from '../images/portfolio/kiko.jpg';
import porfolioImage20 from '../images/portfolio/model.jpg';
import porfolioImage21 from '../images/portfolio/model_.jpg';
import heroImage from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import porfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import porfolioImage14 from '../images/portfolio/portfolio-14.jpg';
import porfolioImage15 from '../images/portfolio/portfolio-15.jpg';
import porfolioImage16 from '../images/portfolio/portfolio-16.jpg';
import porfolioImage17 from '../images/portfolio/portfolio-17.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-18.jpg';
import porfolioImage27 from '../images/portfolio/portfolio-19.jpg';
import porfolioImage26 from '../images/portfolio/portfolio-20.jpg';
import porfolioImage24 from '../images/portfolio/portfolio-21.jpg';
import porfolioImage25 from '../images/portfolio/portfolio-22.jpg';
import porfolioImage23 from '../images/portfolio/sakiko.jpg';
import {About, GalleryItem, GalleryVideo, Hero, HomepageMeta, Social, TimelineItem} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'SAKIKO OISHI',
  description: 'Sakiko Oishi, dancer and model portfolio site',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'home',
  About: 'about',
  Book: 'book',
  Gallery: 'gallery',
  CV: 'cv',
  Update: 'update',
  Login: 'login',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `SAKIKO OISHI`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">Dancer - Choreographer - Model - Actress</p>
    </>
  ),
  actions: [
    {
      href: '/sakikooishi.pdf',
      text: 'CV',
      primary: true,
      Icon: DownloadIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  bookImageSrc: bookImage,
  description: `I am a professional freelance dancer and model. I have created roles with internationally renowned choreographers such as Francois Chaignaud, Gisèle Vienne, Miguel Gutierrez and Mathilde Monnier and performed repertory by Twyla Tharp, William Forsythe, Trisha Brown, Merce Cunningham and Martha Graham.`,
  description2: `Born in Japan, I came to France to train at the École national supérieur de danse de Marseille and went on to dance with the CCN Ballet de Lorraine, Ballet national de Marseille, Ballet d'Europe, CCN de Caen, la Bazooka, Compagnie Sine Qua Non Art and model for Hermes and Heineken advertisement campaigns.`,
  aboutItems: [
    {label: 'Nationality', text: 'Japanese'},
    {label: 'Age', text: '34'},
    {label: 'Height', text: '166cm'},
    {label: 'Weight', text: '47kg'},
    {label: 'Bust', text: '78cm'},
    {label: 'Waist', text: '65cm'},
    {label: 'Hip', text: '76cm'},
    {label: 'Dress', text: '36'},
    {label: 'Shoe', text: '37'},
    {label: 'Hair', text: 'Dark brown'},
    {label: 'Eyes', text: 'Brown'},
  ],
  bookImage1: porfolioImage18,
  bookImage2: porfolioImage20,
  bookImage3: porfolioImage21,
};

/**
 * Gallery section
 */
export const galleryItemsDance: GalleryItem[] = [
  {
    image: porfolioImage24,
  },
  {
    image: porfolioImage3,
  },
  {
    image: porfolioImage10,
  },

  {
    image: porfolioImage6,
  },
  {
    image: porfolioImage4,
  },

  {
    image: porfolioImage8,
  },
  {
    image: porfolioImage9,
  },
  {
    image: porfolioImage7,
  },

  {
    image: porfolioImage16,
  },
  {
    image: porfolioImage5,
  },
];
export const galleryItemsModel: GalleryItem[] = [
  {
    image: porfolioImage2,
  },

  {
    image: porfolioImage25,
  },
  {
    image: porfolioImage27,
  },
  // {
  //   image: porfolioImage11,
  // },
  {
    image: porfolioImage12,
  },

  {
    image: porfolioImage26,
  },

  {
    image: porfolioImage13,
  },
  {
    image: porfolioImage14,
  },
  {
    image: porfolioImage15,
  },

  {
    image: porfolioImage23,
  },
];
export const galleryItemsHands: GalleryItem[] = [
  {
    image: porfolioImage1,
  },
  {
    image: porfolioImage17,
  },

  {
    image: porfolioImage19,
  },
  {
    image: porfolioImage22,
  },
];
export const galleryItemsStage: GalleryItem[] = [
  {
    image: stageImage2,
  },
  {
    image: stageImage3,
  },
  {
    image: stageImage1,
  },
  {
    image: stageImage4,
  },
  {
    image: stageImage5,
  },

  {
    image: stageImage6,
  },
  {
    image: stageImage17,
  },
  {
    image: stageImage7,
  },
  {
    image: stageImage15,
  },
  {
    image: stageImage8,
  },
  {
    image: stageImage9,
  },
  {
    image: stageImage10,
  },
  {
    image: stageImage16,
  },
  {
    image: stageImage11,
  },
  {
    image: stageImage12,
  },
  {
    image: stageImage13,
  },
  {
    image: stageImage14,
  },
];

export const galleryItemsVideos: GalleryVideo[] = [
  {
    src: 'https://www.youtube.com/embed/2wZzwb1Denc',
    title: 'Voyou',
  },
  {
    src: 'https://www.youtube.com/embed/JGsJU5NyJho',
    title: 'Chapelier Fou, Il Trastevere',
  },
  {
    src: 'https://www.instagram.com/p/CWSXNKVo7KO/embed',
    title: 'Hermès, Les Mains',
  },

];

/**
 * CV section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2004-2006',
    role: 'France',
    company: "L'Ecole Nationale Supérieure de Danse de Marseille",
    piece: '',
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2023',
    role: 'Video clip',
    company: 'Voyou',
    piece: "L'Hiver",
  },
  {
    date: '2023',
    role: 'Actress',
    company: 'Emily in Paris',
    piece: 'Darren Star',
  },
  {
    date: '2022',
    role: 'Video clip',
    company: 'Arnaud Robotini',
    piece: 'Fix Me',
  },
  {
    date: '2021',
    role: 'Actress',
    company: 'Murder Mystery 2',
    piece: 'Jeremy Garelick',
  },
  {
    date: '2022',
    role: 'Video clip',
    company: 'Gabriel Tur',
    piece: 'Le star',
  },
  {
    date: '2022 - Present',
    role: 'Dancer',
    company: 'CCN de Caen',
    piece: '3 works for 12',
  },
  {
    date: '2021 - Present',
    role: 'Dancer',
    company: 'Compagnie Sine Qua Non Art',
    piece: 'YUREI',
  },
  {
    date: '2020',
    role: 'Video clip',
    company: 'Chapelier Fou',
    piece: 'Il Trastevere',
  },
  {
    date: '2020 - Present',
    role: 'Dancer',
    company: 'Compagnie La Bazooka',
    piece: 'Pillowgraphies, Monstres indiens',
  },
  {
    date: '2020',
    role: 'Dancer',
    company: 'Gisèle Vienne and Etienne Bideau-Ray',
    piece: 'Showroom Dummies #4',
  },
  {
    date: '2019',
    role: 'Dancer',
    company: 'Chatha',
    piece: "L'Amour sourcier, Narcose",
  },

  {
    date: 'March 2008 - February 2019',
    role: 'Dancer',
    company: 'CCN Ballet de Lorraine',
    piece:
      ' Trisha Brown, Andonis Foniadakis, Rachid Ouramdane,Cindy Van Aker, Mathilde Monnier, Emanuel Gat, William Forsythe, Merce Cunningham, Twyla Tharp, Martha Graham, Cecilia Bengolea and François Chaignaud, Miguel Gutierrez, Alban Richard,  Petter Jacobsson and Thomas Caley, Noé Soulier, Ingun Bjornsgaard, Gisele Vienne, Tero Saarinen, Ginette Laurin, Karole Armitage, Michel Fokine, Bronislava Nijinska, Steven Petronio, Didier Deschamps and Lia Rodriguez, Paolo Ribeiro, Michel Fokine',
  },
  {
    date: '2008',
    role: 'Dancer',
    company: "Ballet d'Europe",
    piece: 'Mireille',
  },
  {
    date: '2007',
    role: 'Apprentice dancer',
    company: 'Ballet National de Marseille',
    piece: 'Concerto Barocco',
  },
];

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com/sakiko.oishi?igshid=YjNmNGQ3MDY='},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://facebook.com/SakikoOISHI'},
];
