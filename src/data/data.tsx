import {DownloadIcon} from '@heroicons/react/outline';

// import pdf from '../assets/resume.pdf';
import InstagramIcon from '../components/Icon/InstagramIcon';
import profilepic from '../images/portfolio/book.jpg';
import bookImage from '../images/portfolio/book(1).jpg';
import porfolioImage18 from '../images/portfolio/book(2).jpg';
import porfolioImage19 from '../images/portfolio/kikk.jpg';
import porfolioImage22 from '../images/portfolio/kiko.jpg';
import porfolioImage20 from '../images/portfolio/model.jpg';
import porfolioImage21 from '../images/portfolio/model_.jpg';
// import porfolioImage23 from '../images/portfolio/Photo de Sakiko.jpg';
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
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sakiko Oishi',
  description: 'Sakiko Oishi, dancer and model portfolio site',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Portfolio: 'Photo Gallery',
  Resume: 'CV',
  Stats: 'stats',
  Book: 'Book',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Sakiko Oishi`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">Dancer and model</p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
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
  description: `I am a professional freelance dancer and model. I have created roles with internationally renowned choreographers such as Francois Chaignaud, Gisèle Vienne, Miguel Gutierrez and Mathilde Monnier and performed repertory by Twyla tharp, William Forsythe, Trisha Brown, Merce Cunningham and Martha Graham.`,
  description2: `Born in Japan, I came to France to train at the École national supérieur de danse de Marseille and went on to dance with the CCN Ballet de Lorraine, Ballet national de Marseille, Ballet d'Europe, CCN de Caen, la Bazooka, Compagnie Sine Qua Non Art and model for Hermes and Heineken advertisement campaigns.`,  aboutItems: [
    {label: 'Nationality', text: 'Japanese'},
    {label: 'Date of Birth', text: '18th June 1989'},
    {label: 'Height', text: '160cm'},
    {label: 'Weight', text: '47kg'},
    {label: 'Bust', text: '80cm'},
    {label: 'Waist', text: '60cm'},
    {label: 'Hip', text: '85cm'},
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
 * Portfolio section
 */
export const portfolioItemsDance: PortfolioItem[] = [
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
export const portfolioItemsModel: PortfolioItem[] = [
  {
    image: porfolioImage2,
  },

  {
    image: porfolioImage11,
  },
  {
    image: porfolioImage12,
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
export const portfolioItemsHands: PortfolioItem[] = [
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

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
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
    location: 'Danseuse freelance',
    title: 'CCN de Caen',
    content: <p>Nom de la pièce</p>,
  },
  {
    date: '2021 - Present',
    location: 'Danseuse freelance',
    title: 'Compagnie Sine Qua Non Art',
    content: <p>Nom de la pièce</p>,
  },
  {
    date: '2020 - Present',
    location: 'Danseuse freelance',
    title: 'Compagnie La Bazooka',
    content: <p>Nom de la pièce</p>,
  },

  {
    date: 'March 2008 - February 2019',
    location: 'Artiste Chorégraphique',
    title: 'CCN Ballet de Lorraine',
    content: (
      <div>
        <p>« Opal Loop/Cloud installation #72503 »: Trisha Brown</p>
        <p>« Shaker Loops » : Andonis Foniadakis</p>
        <p>« Murmuration » : Rachid Ouramdane</p>
        <p>« ELEMENTEN l - Room » : Cindy Van Aker</p>
        <p>« Objets re-trouvés » Mathilde Monnier</p>
        <p>« Transposition #1,2 » : Emanuel Gat</p>
        <p>« Vertiginous»,« The Ville Parody of Address »: William Forsythe</p>
        <p>« Fabrication » « Sounddance » « Rain Forest » « Duets »: Merce Cunningham</p>
        <p>« In The Upper Room » « Nine Sinatra Songs »: Twyla tharp</p>
        <p>« Sketches from Chronicle » : Martha Graham</p>
        <p>« Devoted » : Cecilia Bengolea and François Chaignaud</p>
        <p>« Cela nous concerne tous » : Miguel Gutierrez</p>
        <p>« HOK solo pour ensemble » : Alban Richard</p>
        <p>« Record of ancient things » : Petter Jacobsson et Thomas Caley</p>
        <p>« Corps De Ballet » : Noé Soulier</p>
        <p>« Hedda » : Ingun Bjornsgaard</p>
        <p>« Showroomdummises #3 » : Gisele Vienne</p>
        <p>« Mariage » : Tero Saarinen</p>
        <p> « Le sacre du printemps » : Ginette Laurin</p>
        <p>« Rave » : Karole Armitage</p>
        <p> « Petrouchka » : Michel Fokine</p>
        <p> « Les noces » : Bronislava Nijinska </p>
        <p> « Tragic love » : Steven Petronio</p>
        <p> « Hymnen » : Didier Deschamps et Lia Rodriguez</p>
        <p> « Organic beat » : Paolo Ribeiro</p>
        <p> « L’après-midi d’un faune » : Michel Fokine</p>
      </div>
    ),
  },
  {
    date: '2008',
    location: 'Danseuse supplémentaire',
    title: "Ballet d'Europe",
    content: <p>Mireille</p>,
  },
  {
    date: '2007',
    location: 'Danseuse stagiaire',
    title: 'Ballet National de Marseille',
    content: <p>Concerto Barocco</p>,
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },

  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/sakikichan?igshid=YmMyMTA2M2Y='},
];
