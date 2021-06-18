import { v4 as uuidv4 } from 'uuid';

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
	TypescriptIcon,
} from '@/styles/theme/icons';

import ToolInterface from '@/interfaces/Tool';

export const html5: ToolInterface = {
	name: 'HTML5',
	icon: HtmlIcon,
	color: '#E34F26',
	id: uuidv4(),
};

export const css3: ToolInterface = {
	name: 'CSS3',
	icon: CssIcon,
	color: '#1572B6',
	id: uuidv4(),
};

export const js: ToolInterface = {
	name: 'JavaScript',
	icon: JavascriptIcon,
	color: '#F7DF1E',
	id: uuidv4(),
};

export const typescript: ToolInterface = {
	name: 'Typescript',
	icon: TypescriptIcon,
	color: '#3178C6',
	id: uuidv4(),
};

export const react: ToolInterface = {
	name: 'React',
	icon: ReactIcon,
	color: '#61DAFB',
	id: uuidv4(),
};

export const nodejs: ToolInterface = {
	name: 'Node.js',
	icon: NodeIcon,
	color: '#339933',
	id: uuidv4(),
};

export const nextjs: ToolInterface = {
	name: 'Next.js',
	icon: NextIcon,
	color: 'currentColor',
	id: uuidv4(),
};

export const chakra: ToolInterface = {
	name: 'Chakra UI',
	icon: ChakraIcon,
	color: '#319795',
	id: uuidv4(),
};

export const storybook: ToolInterface = {
	name: 'Storybook',
	icon: StorybookIcon,
	color: '#FF4785',
	id: uuidv4(),
};

export const firebase: ToolInterface = {
	name: 'Firebase',
	icon: FirebaseIcon,
	color: '#FFCA28',
	id: uuidv4(),
};

export const figma: ToolInterface = {
	name: 'Figma',
	icon: FigmaIcon,
	color: '#F24E1E',
	id: uuidv4(),
};

export const sass: ToolInterface = {
	name: 'Sass',
	icon: SassIcon,
	color: '#CC6699',
	id: uuidv4(),
};

export const alanai: ToolInterface = {
	name: 'Alan AI',
	icon: AlanAiIcon,
	color: '#32acff',
	id: uuidv4(),
};
