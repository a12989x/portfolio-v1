import { FunctionComponent } from 'react';
import ToolInterface from './Tool';

interface ProjectsInterface {
	logo: FunctionComponent;
	title: string;
	description: string;
	tools: Array<ToolInterface>;
	live: string | null;
	proto: null | string;
	repo: string;
	id?: number;
	feature?: boolean;
}

export default ProjectsInterface;
