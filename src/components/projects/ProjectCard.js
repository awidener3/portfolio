import React from 'react';
import './projectCard.css';

export default function ProjectCard({ project }) {
	return (
		<div
			className="m-4 custom-card d-flex justify-content-center align-items-center"
			style={{ backgroundImage: `url(${project.img})` }}
		>
			<div
				className={
					project.isNew === true ? 'ribbon ribbon-top-right' : ''
				}
			>
				<span>{project.isNew === true ? 'New' : ''}</span>
			</div>

			<div className="p-3 custom-card-text d-flex justify-content-center align-items-center text-center">
				<h3 className="custom-card-title">
					<a
						href={project.liveUrl}
						target="_blank"
						rel="noreferrer"
						className="custom-card-link"
					>
						{project.title}
					</a>
				</h3>
			</div>
		</div>
	);
}
