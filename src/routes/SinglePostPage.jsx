import Comments from '../components/Comments';
import PostMenuAction from '../components/PostMenuAction';
import Search from '../components/Search';
import IKImage from './../components/IKImage';
import { Link } from 'react-router-dom';

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            fugiat!
          </h1>
          <div className="flex item-center gap-2 text-gray-400 text-sm">
            <span>Written By:</span>
            <Link className="text-blue-800">Jane Doe</Link>
            <span>Published on:</span>
            <Link className="text-blue-800">Regional Customs</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam saepe
            ducimus libero beatae eligendi illo exercitationem reprehenderit
            accusamus harum quibusdam! Explicabo illum provident consequatur ab.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <IKImage src="postImg.jpeg" className="rounded-2xl" w="600" />
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            officiis eos repudiandae magni quos inventore tenetur adipisci
            consequatur in? Esse facilis dignissimos doloribus numquam
            voluptates assumenda, vel laboriosam reiciendis fugit? Animi quasi
            voluptatibus sequi, consectetur fuga temporibus necessitatibus porro
            harum? Quo repellat necessitatibus enim hic? Mollitia beatae
            accusamus, iure eius minima accusantium neque ratione non eaque
            nesciunt quod officiis ab natus, rerum, sunt inventore? Animi totam
            quaerat molestias corporis ullam eos velit amet adipisci natus quasi
            blanditiis voluptatum, commodi dolore repellat odit dignissimos ad
            explicabo voluptate, impedit iste vitae facilis fugit! Soluta odit
            quos corporis saepe nulla perspiciatis debitis odio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            officiis eos repudiandae magni quos inventore tenetur adipisci
            consequatur in? Esse facilis dignissimos doloribus numquam
            voluptates assumenda, vel laboriosam reiciendis fugit? Animi quasi
            voluptatibus sequi, consectetur fuga temporibus necessitatibus porro
            harum? Quo repellat necessitatibus enim hic? Mollitia beatae
            accusamus, iure eius minima accusantium neque ratione non eaque
            nesciunt quod officiis ab natus, rerum, sunt inventore? Animi totam
            quaerat molestias corporis ullam eos velit amet adipisci natus quasi
            blanditiis voluptatum, commodi dolore repellat odit dignissimos ad
            explicabo voluptate, impedit iste vitae facilis fugit! Soluta odit
            quos corporis saepe nulla perspiciatis debitis odio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            officiis eos repudiandae magni quos inventore tenetur adipisci
            consequatur in? Esse facilis dignissimos doloribus numquam
            voluptates assumenda, vel laboriosam reiciendis fugit? Animi quasi
            voluptatibus sequi, consectetur fuga temporibus necessitatibus porro
            harum? Quo repellat necessitatibus enim hic? Mollitia beatae
            accusamus, iure eius minima accusantium neque ratione non eaque
            nesciunt quod officiis ab natus, rerum, sunt inventore? Animi totam
            quaerat molestias corporis ullam eos velit amet adipisci natus quasi
            blanditiis voluptatum, commodi dolore repellat odit dignissimos ad
            explicabo voluptate, impedit iste vitae facilis fugit! Soluta odit
            quos corporis saepe nulla perspiciatis debitis odio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            officiis eos repudiandae magni quos inventore tenetur adipisci
            consequatur in? Esse facilis dignissimos doloribus numquam
            voluptates assumenda, vel laboriosam reiciendis fugit? Animi quasi
            voluptatibus sequi, consectetur fuga temporibus necessitatibus porro
            harum? Quo repellat necessitatibus enim hic? Mollitia beatae
            accusamus, iure eius minima accusantium neque ratione non eaque
            nesciunt quod officiis ab natus, rerum, sunt inventore? Animi totam
            quaerat molestias corporis ullam eos velit amet adipisci natus quasi
            blanditiis voluptatum, commodi dolore repellat odit dignissimos ad
            explicabo voluptate, impedit iste vitae facilis fugit! Soluta odit
            quos corporis saepe nulla perspiciatis debitis odio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            officiis eos repudiandae magni quos inventore tenetur adipisci
            consequatur in? Esse facilis dignissimos doloribus numquam
            voluptates assumenda, vel laboriosam reiciendis fugit? Animi quasi
            voluptatibus sequi, consectetur fuga temporibus necessitatibus porro
            harum? Quo repellat necessitatibus enim hic? Mollitia beatae
            accusamus, iure eius minima accusantium neque ratione non eaque
            nesciunt quod officiis ab natus, rerum, sunt inventore? Animi totam
            quaerat molestias corporis ullam eos velit amet adipisci natus quasi
            blanditiis voluptatum, commodi dolore repellat odit dignissimos ad
            explicabo voluptate, impedit iste vitae facilis fugit! Soluta odit
            quos corporis saepe nulla perspiciatis debitis odio!
          </p>
        </div>
        {/* Menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <IKImage
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link>Jane Doe</Link>
            </div>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet.</p>
            <div className="flex gap-2">
              <Link>
                <IKImage src="facebook.svg" />
              </Link>
              <Link>
                <IKImage src="instagram.svg" />
              </Link>
            </div>
          </div>

          <PostMenuAction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline">Festivals & Rituals</Link>
            <Link className="underline">Regional Customs</Link>
            <Link className="underline">Folk Art & Music</Link>
            <Link className="underline">Traditional Clothing</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
