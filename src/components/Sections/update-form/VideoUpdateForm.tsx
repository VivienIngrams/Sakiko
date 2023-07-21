import classNames from 'classnames';
import {FC, FormEvent, memo, useRef} from 'react';

import {GalleryVideo, VideoUpdateFormProps} from '../../../data/dataDef';

const VideoUpdateForm: FC<VideoUpdateFormProps> = memo(({onAddVideo}) => {
  const videoInputRef = useRef<HTMLInputElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);

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
  return (
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
  );
});

VideoUpdateForm.displayName = 'VideoUpdateForm';
export default VideoUpdateForm;
