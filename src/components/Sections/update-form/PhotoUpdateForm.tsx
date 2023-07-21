import classNames from 'classnames';
import {FC, FormEvent, memo, useRef} from 'react';

import {GalleryPhoto, PhotoUpdateFormProps} from '../../../data/dataDef';

const PhotoUpdateForm: FC<PhotoUpdateFormProps> = memo(({onAddPhoto}) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const categoryInputRef = useRef<HTMLInputElement>(null);

  function submitPhotoHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (imageInputRef.current && categoryInputRef.current) {
      const enteredImage = imageInputRef.current.value;
      const enteredCategory = categoryInputRef.current.value;

      const galleryData: GalleryPhoto = {
        image: enteredImage,
        category: enteredCategory,
      };

      onAddPhoto(galleryData);
      imageInputRef.current.value = '';
      categoryInputRef.current.value = '';
    }
  }

  return (
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
  );
});

PhotoUpdateForm.displayName = 'PhotoUpdateForm';
export default PhotoUpdateForm;
