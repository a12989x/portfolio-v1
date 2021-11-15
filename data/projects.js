import { v4 as uuidv4 } from 'uuid';

import {
  alanai,
  chakra,
  css3,
  firebase,
  html5,
  js,
  mdx,
  nextjs,
  nodejs,
  react,
  sass,
  storybook,
} from './tools';

import {
  ReexJsIcon,
  LogoIcon,
  NewspaperIcon,
  LitreekIcon,
  JavascriptIcon,
  ReactIcon,
  FirebaseIcon,
  AlanAiIcon,
  MDXIcon,
  HtmlIcon,
} from '@/styles/theme/icons';

const projects = [
  {
    logo: LitreekIcon,
    title: 'Litreek',
    description:
      'Tree links app free 🤯, fast 😎, open-source 💪 and easy to customize 👌.',
    tools: [nextjs, sass],
    live: 'https://litreek.vercel.app/',
    repo: 'https://github.com/codingcodax/litreek/',
    id: uuidv4(),
    feature: false,
  },
  {
    logo: MDXIcon,
    title: 'NextJS MDX Blog Kit',
    description:
      'Blog kit for developers 👨‍💻 built with Next JS, SEO optimized, light 🪶, and easy to customize 👌.',
    tools: [nextjs, chakra, mdx],
    live: 'https://nextjs-mdx-blog-kit-nu.vercel.app/',
    repo: 'https://github.com/codingcodax/nextjs-mdx-blog-kit/',
    id: uuidv4(),
    feature: false,
  },
  {
    logo: ReexJsIcon,
    title: 'ReexJs CLI',
    description:
      'An interactive CLI automation tool 🛠️ for creating react.js and next.js projects most fast and efficiently. ⚛️',
    tools: [nodejs],
    site: 'https://codingcodax.github.io/reexjs-cli/',
    repo: 'https://github.com/codingcodax/reexjs-cli/',
    id: uuidv4(),
    feature: true,
  },
  {
    logo: LogoIcon,
    title: 'Portfolio V1',
    description:
      'Personal website 🌐 built with Next JS and Chakra UI with my own blog 🖊️ and newsletter 📰.',
    tools: [nextjs, storybook, chakra],
    live: 'https://codaxx.ml/',
    repo: 'https://github.com/codingcodax/portfolio-v1/',
    id: uuidv4(),
    feature: true,
  },
  {
    logo: AlanAiIcon,
    title: 'Voice Control News',
    description:
      'News website 🌐 with voice control 🎙️ built with react js ⚛️.',
    tools: [react, alanai, sass],
    live: 'https://voice-control-react-news-app.vercel.app/',
    repo: 'https://github.com/codingcodax/voice-control-react-news-app/',
    id: uuidv4(),
    feature: false,
  },
  {
    logo: FirebaseIcon,
    title: 'Superchat',
    description:
      'Simple real-time chat app built with React JS ⚛️ and Firebase 🔥.',
    tools: [react, firebase, sass],
    live: 'https://fosion-demos.web.app/',
    repo: 'https://github.com/codingcodax/superchat/',
    id: uuidv4(),
    feature: false,
  },
  {
    logo: ReactIcon,
    title: 'Weather PWA',
    description: 'Weather Progressive Web App built with React JS ⚛️ and SASS.',
    tools: [react, sass],
    live: 'https://weather-react-pwa-jsmastery.vercel.app/',
    repo: 'https://github.com/codingcodax/weather-react-pwa-jsmastery/',
    id: uuidv4(),
    feature: false,
  },
  {
    logo: ReactIcon,
    title: 'Wildfire Tracker',
    description:
      'Wildfire Tracker 🔥 app built with React JS ⚛️ and Google Maps 🗺️.',
    tools: [react, sass],
    live: 'https://wildfire-tracker-six.vercel.app/',
    repo: 'https://github.com/codingcodax/wildfire-tracker/',
    id: uuidv4(),
    feature: false,
  },
  {
    logo: ReactIcon,
    title: 'Coronavirus 19 Tracker',
    description:
      'Coronavirus 19 tracker app built with React JS ⚛️ and Firebase 🔥.',
    tools: [react, firebase, sass],
    live: 'https://ax-covid-19-tracker.web.app/',
    repo: 'https://github.com/codingcodax/covid-19-tracker/',
    id: uuidv4(),
    feature: false,
  },
  {
    logo: JavascriptIcon,
    title: 'Neumorphism Calculator',
    description:
      'Simple calculator neumorphism design with pure JavaScript add SASS.',
    tools: [html5, sass, js],
    live: 'https://codingcodax.github.io/neumorphism-calculator/',
    repo: 'https://github.com/codingcodax/neumorphism-calculator/',
    id: uuidv4(),
    feature: false,
  },
  {
    logo: HtmlIcon,
    title: 'Fries Page',
    description:
      'Simple responsive website 🌐 for an imaginary fries restaurant 🍟 with only HTML and CSS.',
    tools: [html5, css3],
    live: 'https://codingcodax.github.io/fries-page/',
    repo: 'https://github.com/codingcodax/fries-page/',
    id: uuidv4(),
    feature: false,
  },
];

export default projects;
