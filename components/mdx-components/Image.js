import Image from 'next/image';

const ImageComponent = ({ src, alt, height, width }) => {
	return (
		<Image
			src={src}
			alt={alt}
			height={height}
			width={width}
			layout='responsive'
			className='post-images'
		/>
	);
};

export default ImageComponent;
