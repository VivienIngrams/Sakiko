import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
// import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
// import About from './About';
// import Resume from './resume';
// import Book from './Book';
import Hero from '../components/Sections/Hero';
// import Home from '../components/Sections/Home';
// import Portfolio from './Gallery';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {

  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <Footer />
    </Page>
  );
});

export default Home;
