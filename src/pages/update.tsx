// import classNames from 'classnames';
// import {FC, memo, useRef} from 'react';

// import Section from '../components/Layout/Section';
// import Footer from '../components/Sections/Footer';
// import Header from '../components/Sections/Header';
// import {SectionId} from '../data/data';




//   function onAddMeetup(data: ) {
//     return data;
//   }
  
// const Update: FC = memo(() => {

//     const imageInputRef = useRef();
//     const descriptionInputRef = useRef();
  
//     function submitHandler(event) {
//       event.preventDefault();

//       const enteredImage = imageInputRef.current.value;
//       const enteredDescription = descriptionInputRef.current.value;
  
//       const meetupData: Object = {
//         image: enteredImage,
//         description: enteredDescription,
//       };
  
//       onAddMeetup(meetupData) {
//         return meetupData;
//       };
    
//   return (
//     <>
//       <Header />
//       <Section className="bg-black" sectionId={SectionId.Update}>
//         <div className={classNames('grid grid-cols-1 gap-y-4')}>
//         <form  onSubmit={submitHandler}>
//         <div >
//           <label htmlFor='image'>Meetup Image</label>
//           <input type='url' required id='image' ref={imageInputRef} />
//         </div>
//         <div>
//           <label htmlFor='description'>Description</label>
//           <input type='text' required id='address' ref={descriptionInputRef} /> 
//         </div>
//         <div >
//           <button>Add Meetup</button>
//         </div>
//       </form>
//         </div>
//       </Section>
//       <Footer />
//     </>
//   );
// });

// Update.displayName = 'Update';
// export default Update;
