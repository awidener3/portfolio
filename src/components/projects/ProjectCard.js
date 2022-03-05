import React from 'react';
import './projectCard.css';

export default function ProjectCard({
	title,
	languages,
	liveUrl,
	gitHubUrl,
	img,
	alt,
	isNew,
}) {
	return (
		// <div className="m-4 custom-card">
		<a href="" className="project-card-link">
			<div
				className="m-4 custom-card d-flex justify-content-center align-items-center"
				style={{ backgroundImage: `url(${img})` }}
			>
				<div
					className={
						isNew === 'true' ? 'ribbon ribbon-top-right' : ''
					}
				>
					<span>{isNew === 'true' ? 'New' : ''}</span>
				</div>

				<div className="p-3 custom-card-text d-flex justify-content-center align-items-center text-center">
					<h3 className="custom-card-title">
						<a
							href={liveUrl}
							target="_blank"
							rel="noreferrer"
							className="custom-card-link"
						>
							{title}
						</a>
					</h3>
				</div>
			</div>
		</a>
	);
}
