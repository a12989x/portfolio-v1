import IReadTimeResults from './IReadTimeResults';

interface FrontMatterInterface {
	wordCount: number;
	readingTime: IReadTimeResults;
	title?: string;
	publishedAt?: string;
	summary?: string;
	image: string;
	imageBlur: string;
}

export default FrontMatterInterface;
