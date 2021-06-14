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
	AlanAiIcon,
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
	id: 3,
};

export const nodejs: ToolInterface = {
	name: 'Node.js',
	icon: NodeIcon,
	color: '#339933',
	id: 4,
};

export const nextjs: ToolInterface = {
	name: 'Next.js',
	icon: NextIcon,
	color: 'currentColor',
	id: 5,
};

export const chakra: ToolInterface = {
	name: 'Chakra UI',
	icon: ChakraIcon,
	color: '#319795',
	id: 6,
};

export const storybook: ToolInterface = {
	name: 'Storybook',
	icon: StorybookIcon,
	color: '#FF4785',
	id: 7,
};

export const firebase: ToolInterface = {
	name: 'Sass',
	icon: FirebaseIcon,
	color: '#FFCA28',
	id: 8,
};

export const figma: ToolInterface = {
	name: 'Figma',
	icon: FigmaIcon,
	color: '#F24E1E',
	id: 9,
};

export const sass: ToolInterface = {
	name: 'Sass',
	icon: SassIcon,
	color: '#CC6699',
	id: 10,
};

export const alanai: ToolInterface = {
	name: 'Alan AI',
	icon: AlanAiIcon,
	color: '#32acff',
	id: 11,
};
