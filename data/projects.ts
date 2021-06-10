import { chakra, nextjs, nodejs, react, storybook } from './tools';

import { ReexJsIcon, LogoIcon } from '@/styles/theme/icons';
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
		description: 'Website as a portfolio with a blog.',
		tools: [react, nextjs, storybook, chakra],
		live: 'https://codaxz.ml',
		proto: null,
		repo: 'https://github.com/a12989x/portfolio-v1/',
		id: 2,
		feature: true,
	},
];

export default projects;
