import { Image } from "@imagekit/react";

const IKImage = ({ src, className, w, h, alt }) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src={src}
      className={className}
      alt={alt}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      width={w}
      height={h}
      transformation={[
        {
          width:w,
          height:h,
        }
      ]}
    />
  );
};

export default IKImage;
