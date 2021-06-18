import { FunctionComponent } from 'react';

import ToolInterface from './Tool';

// type UUID = { string }

interface ProjectsInterface {
	logo: FunctionComponent;
	title: string;
	description: string;
	tools: Array<ToolInterface>;
	live: string | null;
	repo: string;
	id?: string;
	feature?: boolean;
}

export default ProjectsInterface;
