import {
	alanai,
	chakra,
	nextjs,
	nodejs,
	react,
	sass,
	storybook,
} from './tools';

import { ReexJsIcon, LogoIcon, NewspaperIcon } from '@/styles/theme/icons';
import ProjectsInterface from '@/interfaces/Projects';

const projects: Array<ProjectsInterface> = [
	{
		logo: ReexJsIcon,
		title: 'ReexJs CLI',
		description:
			'An interactive CLI automation tool 🛠️ for creating react.js and next.js projects most fast and efficiently. ⚛️',
		tools: [nodejs],
		live: null,
		proto: null,
		repo: 'https://github.com/a12989x/reexjs-cli/',
		id: 1,
		feature: true,
	},
	{
		logo: LogoIcon,
		title: 'Portfolio V1',
		description:
			'Personal website version one with a my own blog and newsletter.',
		tools: [nextjs, storybook, chakra],
		live: 'https://codaxx.ml/',
		proto: null,
		repo: 'https://github.com/a12989x/portfolio-v1/',
		id: 2,
		feature: true,
	},
	{
		logo: NewspaperIcon,
		title: 'Voice Control News',
		description: 'Website as a portfolio with a blog.',
		tools: [react, alanai, sass],
		live: 'https://voice-control-react-news-app.vercel.app/',
		proto: null,
		repo: 'https://github.com/a12989x/voice-control-react-news-app/',
		id: 2,
		feature: false,
	},
];

export default projects;
