import { Link } from "react-router-dom";
import IKImage from "./IKImage";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}
        <IKImage
          src="featured1.jpeg"
          className="rounded-3xl object-cover "
          w="895"
        />
        {/* Details */}
        <div className="flex item-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg ">Diwali & Diya's</Link>
          <span className="text-gray-500">2 Days ago</span>
        </div>
        {/* Title */}
        <Link to="/test" className="text-xl lg:3xl font-semibold lg:font-bold">
          Why to light diya's in Diwali.
        </Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <IKImage
              src="featured2.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          {/* Details and Title */}
          <div className="w-2/3">
            {/* Details */}
            <div className="flex item-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Dussera & Cleaning</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Why to clean everything before Dussera?
            </Link>
          </div>
        </div>
        {/* Third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <IKImage
              src="featured2.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          {/* Details and Title */}
          <div className="w-2/3">
            {/* Details */}
            <div className="flex item-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-800">Dussera & Cleaning</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Why to clean everything before Dussera?
            </Link>
          </div>
        </div>
        {/* Fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <IKImage
              src="featured2.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          {/* Details and Title */}
          <div className="w-2/3">
            {/* Details */}
            <div className="flex item-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-blue-800">Dussera & Cleaning</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Why to clean everything before Dussera?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
