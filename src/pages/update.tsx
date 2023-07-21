import {FC, memo, useState} from 'react';

import Section from '../components/Layout/Section';
import AuthForm from '../components/Sections/AuthForm';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import CvUpdateForm from '../components/Sections/update-form/CvUpdateForm';
import PhotoUpdateForm from '../components/Sections/update-form/PhotoUpdateForm';
import VideoUpdateForm from '../components/Sections/update-form/VideoUpdateForm';
import {SectionId} from '../data/data';
import {CvData, GalleryPhoto, GalleryVideo} from '../data/dataDef';

// const email: string = process.env.KIKO_EMAIL || '';
// const encodedEmail: string = encodeURIComponent(email);
// const password: string = process.env.KIKO_PASSWORD || '';
// const encodedPassword: string = encodeURIComponent(password);

async function onAddPhoto(data: GalleryPhoto): Promise<GalleryPhoto> {
  const response = await fetch('/api/update', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const photoData = await response.json();
  console.log(photoData);
  return photoData;
}

async function onAddVideo(data: GalleryVideo): Promise<GalleryVideo> {
  const response = await fetch('/api/update', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const videoData = await response.json();
  console.log(videoData);
  return videoData;
}

async function onAddExperience(data: CvData): Promise<CvData> {
  const response = await fetch('/api/update', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const cvData = await response.json();
  console.log(cvData);
  return cvData;
}

const Update: FC = memo(() => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginHandler(loginData) {
    if (loginData.email === 'sakiko_oishi@yahoo.com' && loginData.password === 'password') {
      setIsLoggedIn(true);
    }
    return;
  }
  return (
    <>
      <Header />
      {!isLoggedIn ? (
        <Section className="m-20 bg-[#190c41]" sectionId={SectionId.Login}>
          <AuthForm onLogin={loginHandler} />
        </Section>
      ) : (
        <Section className="m-20 bg-[#190c41]" sectionId={SectionId.Update}>
          <div className="flex flex-col justify-around sm:flex-row">
            <PhotoUpdateForm onAddPhoto={onAddPhoto} />
            <VideoUpdateForm onAddVideo={onAddVideo} />
            <CvUpdateForm onAddExperience={onAddExperience} />
          </div>
        </Section>
      )}
      <Footer />
    </>
  );
});

Update.displayName = 'Update';
export default Update;
