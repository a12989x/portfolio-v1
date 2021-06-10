import {
	HtmlIcon,
	CssIcon,
	JavascriptIcon,
	ReactIcon,
	NodeIcon,
	NextIcon,
	ChakraIcon,
	StorybookIcon,
	FirebaseIcon,
	FigmaIcon,
	SassIcon,
} from '@/styles/theme/icons';

import ToolInterface from '@/interfaces/Tool';

export const html5: ToolInterface = {
	name: 'HTML5',
	icon: HtmlIcon,
	color: '#E34F26',
	id: 0,
};

export const css3: ToolInterface = {
	name: 'CSS3',
	icon: CssIcon,
	color: '#1572B6',
	id: 1,
};

export const js: ToolInterface = {
	name: 'JavaScript',
	icon: JavascriptIcon,
	color: '#F7DF1E',
	id: 2,
};

export const react: ToolInterface = {
	name: 'React',
	icon: ReactIcon,
	color: '#61DAFB',
	id: 4,
};

export const nodejs: ToolInterface = {
	name: 'Node.js',
	icon: NodeIcon,
	color: '#339933',
	id: 5,
};

export const nextjs: ToolInterface = {
	name: 'Next.js',
	icon: NextIcon,
	color: '#000000',
	id: 6,
};

export const chakra: ToolInterface = {
	name: 'Chakra UI',
	icon: ChakraIcon,
	color: '#319795',
	id: 9,
};

export const storybook: ToolInterface = {
	name: 'Storybook',
	icon: StorybookIcon,
	color: '#FF4785',
	id: 10,
};

export const firebase: ToolInterface = {
	name: 'Sass',
	icon: FirebaseIcon,
	color: '#FFCA28',
	id: 13,
};

export const figma: ToolInterface = {
	name: 'Figma',
	icon: FigmaIcon,
	color: '#F24E1E',
	id: 8,
};

export const sass: ToolInterface = {
	name: 'Sass',
	icon: SassIcon,
	color: '#CC6699',
	id: 13,
};
