import Image from 'next/image';

const ImageComponent = ({ src, alt, height, width, blurDataURL, ...props }) => {
  return (
    <Image
      layout='responsive'
      height={height}
      width={width}
      alt={alt}
      src={src}
    />
  );
};

export default ImageComponent;
