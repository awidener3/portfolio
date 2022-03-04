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
		<div className="m-4 custom-card">
			<div className={isNew === 'true' ? 'ribbon ribbon-top-right' : ''}>
				<span>New</span>
			</div>
			<a href={liveUrl} target="_blank" rel="noreferrer">
				<img className="card-image" src={img} alt={alt} />
			</a>
			<div className="p-3 custom-card-text d-flex justify-content-center align-items-center text-center">
				<h3 className="custom-card-title">
					<a
						href={gitHubUrl}
						target="_blank"
						rel="noreferrer"
						className="custom-card-link"
					>
						{title}
					</a>
				</h3>
			</div>
		</div>
	);
}
