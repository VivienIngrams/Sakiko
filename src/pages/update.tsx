import classNames from 'classnames';
import {FC, FormEvent, memo, useRef, useState} from 'react';

import AuthForm from '../components/AuthForm';
import Section from '../components/Layout/Section';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import {SectionId} from '../data/data';

interface galleryData {
  image: string;
  category: string;
}

interface videoData {
  src: string;
  title: string;
}

interface cvData {
  company: string;
  role: string;
  date: string;
  piece: string;
}

async function onAddPhoto(data: galleryData): Promise<galleryData> {
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

async function onAddVideo(data: videoData): Promise<videoData> {
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

async function onAddExperience(data: cvData): Promise<cvData> {
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
    if (loginData.email === 'sakiko@com' && loginData.password === 'password') {
      setIsLoggedIn(true);
    }
  }

  const imageInputRef = useRef<HTMLInputElement>(null);
  const categoryInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const companyInputRef = useRef<HTMLInputElement>(null);
  const roleInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const pieceInputRef = useRef<HTMLInputElement>(null);

  function submitPhotoHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (imageInputRef.current && categoryInputRef.current) {
      const enteredImage = imageInputRef.current.value;
      const enteredCategory = categoryInputRef.current.value;

      const galleryData: galleryData = {
        image: enteredImage,
        category: enteredCategory,
      };

      onAddPhoto(galleryData);
      imageInputRef.current.value = '';
      categoryInputRef.current.value = '';
    }
  }

  function submitVideoHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (videoInputRef.current && titleInputRef.current) {
      const enteredVideo = videoInputRef.current.value;
      const enteredTitle = titleInputRef.current.value;

      const videoData: videoData = {
        src: enteredVideo,
        title: enteredTitle,
      };

      onAddVideo(videoData);
      videoInputRef.current.value = '';
      titleInputRef.current.value = '';
    }
  }

  function submitCvHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (companyInputRef.current && roleInputRef.current && dateInputRef.current && pieceInputRef.current) {
      const enteredCompany = companyInputRef.current.value;
      const enteredRole = roleInputRef.current.value;
      const enteredDate = dateInputRef.current.value;
      const enteredPiece = pieceInputRef.current.value;

      const cvData: cvData = {
        company: enteredCompany,
        role: enteredRole,
        date: enteredDate,
        piece: enteredPiece,
      };

      onAddExperience(cvData);
      companyInputRef.current.value = '';
      roleInputRef.current.value = '';
      dateInputRef.current.value = '';
      pieceInputRef.current.value = '';
    }
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
            <form onSubmit={submitPhotoHandler}>
              <h2 className="text-center text-2xl font-thin uppercase text-white">Gallery pages</h2>
              <div className={classNames('flex flex-col items-end ')}>
                <div className="p-5">
                  <label className=" p-2 font-normal text-white" htmlFor="image">
                    Photo Image
                  </label>
                  <input id="image" ref={imageInputRef} required type="url" />
                </div>
                <div className="p-5">
                  <label className=" p-2 text-left font-normal text-white" htmlFor="category">
                    Category
                  </label>
                  <input id="category" ref={categoryInputRef} required type="text" />
                </div>
                <div className="m-10 rounded-2xl bg-neutral-400 p-2">
                  <button className="rounded-2xl" type="submit">
                    Add Photo
                  </button>
                </div>
              </div>
            </form>
            <form onSubmit={submitVideoHandler}>
              <h2 className="text-center text-2xl font-thin uppercase text-white">Videos</h2>
              <div className={classNames('flex flex-col items-end ')}>
                <div className="p-5">
                  <label className=" p-2 font-normal text-white" htmlFor="src">
                    Video link
                  </label>
                  <input id="src" ref={videoInputRef} required type="url" />
                </div>
                <div className="p-5">
                  <label className=" p-2 text-left font-normal text-white" htmlFor="title">
                    Title
                  </label>
                  <input id="title" ref={titleInputRef} required type="text" />
                </div>
                <div className="m-10 rounded-2xl bg-neutral-400 p-2">
                  <button className="rounded-2xl" type="submit">
                    Add Video
                  </button>
                </div>
              </div>
            </form>
            <form onSubmit={submitCvHandler}>
              <h2 className="text-center text-2xl font-thin uppercase text-white">Work Experience</h2>
              <div className={classNames('flex flex-col items-end')}>
                <div className="p-5">
                  <label className=" p-2 font-normal text-white" htmlFor="company">
                    Company
                  </label>
                  <input id="company" ref={companyInputRef} required type="text" />
                </div>
                <div className=" p-5">
                  <label className=" p-2 text-left font-normal text-white" htmlFor="role">
                    Role
                  </label>
                  <input id="role" ref={roleInputRef} required type="text" />
                </div>
                <div className="p-5">
                  <label className=" p-2 text-left font-normal text-white" htmlFor="date">
                    Date
                  </label>
                  <input id="date" ref={dateInputRef} required type="text" />
                </div>
                <div className="p-5">
                  <label className=" p-2 text-left font-normal text-white" htmlFor="piece">
                    Piece
                  </label>
                  <input id="piece" ref={pieceInputRef} required type="text" />
                </div>
                <div className="m-10 rounded-2xl bg-neutral-400 p-2 ">
                  <button className="rounded-2xl" type="submit">
                    Add Experience
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Section>
      )}
      <Footer />
    </>
  );
});

Update.displayName = 'Update';
export default Update;
