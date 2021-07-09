import Image from 'next/image';

const ImageComponent = ({ src, alt, height, width, blurDataURL, ...props }) => {
	return (
		<Image
			className='post-images'
			layout='responsive'
			height={height}
			width={width}
			alt={alt}
			src={src}
		/>
	);
};

export default ImageComponent;
