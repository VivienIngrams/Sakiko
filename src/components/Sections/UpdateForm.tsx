import classNames from 'classnames';
import {FC, FormEvent, memo, useRef} from 'react';

import {cvData, GalleryData, GalleryVideo, UpdateFormProps} from '../../data/dataDef';

const UpdateForm: FC<UpdateFormProps> = memo(({onAddPhoto, onAddVideo, onAddExperience}) => {
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

      const galleryData: GalleryData = {
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

      const videoData: GalleryVideo = {
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
  );
});

UpdateForm.displayName = 'UpdateForm';
export default UpdateForm;
