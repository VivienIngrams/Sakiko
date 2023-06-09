import {DownloadIcon} from '@heroicons/react/outline';

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
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
import {About, GalleryItem, Hero, HomepageMeta, Social, TimelineItem} from './dataDef';

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
  CV: 'CV',
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
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">Dancer  Choreographer  Model  Actress</p>
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
    {label: 'Date of Birth', text: '18th June 1989'},
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
  {
    image: porfolioImage11,
  },
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
    image: stageImage1,
  },
  {
    image: stageImage2,
  },
  {
    image: stageImage3,
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
    image: stageImage7,
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
  {
    image: stageImage15,
  },
  {
    image: stageImage16,
  },
  {
    image: stageImage17,
  },
];

/**
 * CV section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2006',
    location: 'France',
    title: "L'Ecole Nationale Supérieure de Danse de Marseille",
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022 - Present',
    location: 'Dancer',
    title: 'CCN de Caen',
    content: <p>3 works for 12</p>,
  },
  {
    date: '2021 - Present',
    location: 'Dancer',
    title: 'Compagnie Sine Qua Non Art',
    content: <p>YUREI</p>,
  },
  {
    date: '2020 - Present',
    location: 'Dancer',
    title: 'Compagnie La Bazooka',
    content: (
      <div>
        <p>Pillowgraphies</p>
        <p>Monstres indiens</p>
      </div>
    ),
  },
  {
    date: '2020',
    location: 'Dancer',
    title: 'Gisèle Vienne and Etienne Bideau-Ray',
    content: (
      <div>
        <p>Showroom Dummies #4</p>
      </div>
    ),
  },
  {
    date: '2019',
    location: 'Dancer',
    title: 'Chatha',
    content: (
      <div>
        <p>L'Amour sourcier</p>
        <p>Narcose</p>
      </div>
    ),
  },

  {
    date: 'March 2008 - February 2019',
    location: 'Dancer',
    title: 'CCN Ballet de Lorraine',
    content: (
      <div>
        <p>« Opal Loop/ Cloud installation #72503 » : Trisha Brown</p>
        <p>« Shaker Loops » : Andonis Foniadakis</p>
        <p>« Murmuration » : Rachid Ouramdane</p>
        <p>« ELEMENTEN l - Room » : Cindy Van Aker</p>
        <p>« Objets re-trouvés » Mathilde Monnier</p>
        <p>« Transposition #1,2 » : Emanuel Gat</p>
        <p>« Vertiginous»,« The Ville Parody of Address » : William Forsythe</p>
        <p>« Fabrication » « Sounddance » « Rain Forest » « Duets » : Merce Cunningham</p>
        <p>« In The Upper Room » « Nine Sinatra Songs » : Twyla tharp</p>
        <p>« Sketches from Chronicle » : Martha Graham</p>
        <p>« Devoted » : Cecilia Bengolea and François Chaignaud</p>
        <p>« Cela nous concerne tous » : Miguel Gutierrez</p>
        <p>« HOK solo pour ensemble » : Alban Richard</p>
        <p>« Record of ancient things » : Petter Jacobsson and Thomas Caley</p>
        <p>« Corps De Ballet » : Noé Soulier</p>
        <p>« Hedda » : Ingun Bjornsgaard</p>
        <p>« Showroomdummises #3 » : Gisele Vienne</p>
        <p>« Mariage » : Tero Saarinen</p>
        <p> « Le Sacre du printemps » : Ginette Laurin</p>
        <p>« Rave » : Karole Armitage</p>
        <p> « Petrouchka » : Michel Fokine</p>
        <p> « Les noces » : Bronislava Nijinska </p>
        <p> « Tragic love » : Steven Petronio</p>
        <p> « Hymnen » : Didier Deschamps and Lia Rodriguez</p>
        <p> « Organic beat » : Paolo Ribeiro</p>
        <p> « L’après-midi d’un faune » : Michel Fokine</p>
      </div>
    ),
  },
  {
    date: '2008',
    location: 'Dancer',
    title: "Ballet d'Europe",
    content: <p>Mireille</p>,
  },
  {
    date: '2007',
    location: 'Apprentice dancer',
    title: 'Ballet National de Marseille',
    content: <p>Concerto Barocco</p>,
  },
];

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com/sakiko.oishi?igshid=YjNmNGQ3MDY='},
  // {label: 'Facebook', Icon: FacebookIcon, href: 'https://facebook.com/SakikoOISHI'},
];
