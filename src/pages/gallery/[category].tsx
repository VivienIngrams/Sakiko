import classNames from 'classnames';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {FC, memo} from 'react';

import Section from '../../components/Layout/Section';
import Footer from '../../components/Sections/Footer';
import Header from '../../components/Sections/Header';
import {galleryItemsDance, galleryItemsHands, galleryItemsModel, galleryItemsStage, SectionId} from '../../data/data';
import {GalleryItem} from '../../data/dataDef';

const Model: FC = memo(() => {
  const router = useRouter();

  let section: GalleryItem[] = [];

  switch (router.query.category) {
    case 'dance':
      section = galleryItemsDance;
      break;
    case 'model':
      section = galleryItemsModel;
      break;
    case 'stage':
      section = galleryItemsStage;
      break;
    case 'hands':
      section = galleryItemsHands;
      break;
  }

  return (
    <>
      <Header />
      <Section className="bg-black" sectionId={SectionId.Gallery}>
        <div className="mb-20 flex flex-col gap-y-8">
          <h2 className="self-center text-xl font-thin uppercase text-white">{router.query.category}</h2>
          <div className=" w-full columns-2 md:columns-3 lg:columns-4">
            {section.map((item, index) => {
              const {image} = item;
              return (
                <div className="pb-6" key={`${index}`}>
                  <div
                    className={classNames(
                      'relative h-max w-full overflow-hidden shadow-lg shadow-black/30 lg:shadow-xl',
                    )}>
                    <Image alt="Sakiko" layout="responsive" placeholder="blur" src={image} />
                    {/* <ItemOverlay item={item} /> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
});

Model.displayName = 'Model';
export default Model;


// export async function getStaticPaths() {
//   return {
//   fallback: false,
//     paths: [
//       {
//         params: {
//           category: 'dance',
//         },
//       },
//       {
//         params: {
//           category: 'model',
//         },
//       },
//       {
//         params: {
//           category: 'stage',
//         },
//       },
//       {
//         params: {
//           category: 'hands',
//         },
//       },
//     ],
//   };
// }

// export async function getStaticProps() {
// // fetch data from mongodb
//   return {
//     props: {
//       photoData: {
//         image: 'https://agendaculturalporto.org/wp-content/uploads/2023/04/Van-Gogh-Alfandega-do-Porto.jpg',
//         category: 'dance',
//       }
//     }
//   }
// }