import React from 'react';
import ProjectCard from './ProjectCard';
import { projectData } from './projectData';

export default function Projects() {
	return (
		<div className="container-fluid">
			<h2 className="pe-3 border-end text-end me-5">Projects</h2>

			<div className="section-content container-fluid d-flex flex-wrap">
				{projectData.map((project, index) => (
					<ProjectCard project={project} key={index} />
				))}
			</div>
		</div>
	);
}
