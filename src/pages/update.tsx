import classNames from 'classnames';
import {FC, FormEvent, memo, useRef} from 'react';

import Section from '../components/Layout/Section';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import {SectionId} from '../data/data';

interface galleryData {
  image: string;
  description: string;
}

function onAddPhoto(data: galleryData): galleryData {
  console.log(data);
  return data;
}

const Update: FC = memo(() => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (imageInputRef.current && descriptionInputRef.current) {
      const enteredImage = imageInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;

      const galleryData: galleryData = {
        image: enteredImage,
        description: enteredDescription,
      };

      onAddPhoto(galleryData);
      imageInputRef.current.value = '';
      descriptionInputRef.current.value = '';
    }
  }

  return (
    <>
      <Header />
      <Section className="bg-black m-20" sectionId={SectionId.Update}>
        <form onSubmit={submitHandler}>
          <div className={classNames('flex flex-col items-center justify-centre ')}>
            <div className="p-5">
              <label className=" p-2 font-normal text-white" htmlFor="image">
                Photo Image
              </label>
              <input id="image" ref={imageInputRef} required type="url" />
            </div>
            <div>
              <label className=" p-2 font-normal text-white" htmlFor="description">
                Description
              </label>
              <input id="address" ref={descriptionInputRef} required type="text" />
            </div>
            <div className="bg-white m-10 p-2 font-normal">
              <button type="submit">Add Photo</button>
            </div>
          </div>
        </form>
      </Section>
      <Footer />
    </>
  );
});

Update.displayName = 'Update';
export default Update;
