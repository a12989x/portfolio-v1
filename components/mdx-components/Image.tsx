import Image from 'next/image';

export interface ImageInterface {
	src: string;
	alt: string;
	height: number;
	width: number;
}

const ImageComponent = ({
	src,
	alt,
	height,
	width,
}: ImageInterface): JSX.Element => {
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
