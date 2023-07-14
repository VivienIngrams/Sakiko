import classNames from 'classnames';
import {FC, FormEvent, memo, useRef} from 'react';

import Section from '../components/Layout/Section';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import {SectionId} from '../data/data';

interface galleryData {
  image: string;
  category: string;
}

interface cvData {
  company: string;
  role: string;
  date: string;
  piece: string;
}

function onAddPhoto(data: galleryData): galleryData {
  console.log(data);
  return data;
}

function onAddExperience(data: cvData): cvData {
  console.log(data);
  return data;
}

const Update: FC = memo(() => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const categoryInputRef = useRef<HTMLInputElement>(null);
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
      <Section className="m-20 bg-black" sectionId={SectionId.Update}>
        <div className='flex justify-around'>
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
            <div className="m-10 bg-white p-2 font-normal">
              <button type="submit">Add Photo</button>
            </div>
          </div>
        </form>
        <form onSubmit={submitCvHandler}>
        <h2 className="text-center text-2xl font-thin uppercase text-white">Gallery pages</h2>
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
            <div className="m-10 bg-white p-2 font-normal">
              <button type="submit">Add Experience</button>
            </div>
          </div>
        </form>
        </div>
      </Section>
      <Footer />
    </>
  );
});

Update.displayName = 'Update';
export default Update;
