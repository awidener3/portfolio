import React from 'react';
import './projectCard.css';

export default function ProjectCard({
	title,
	languages,
	liveUrl,
	gitHubUrl,
	img,
	alt,
}) {
	return (
		<div className="card col-5 m-4 custom-card">
			<a href={liveUrl} target="_blank" rel="noreferrer">
				<img className="card-image" src={img} alt={alt} />
			</a>
			<div className="p-3">
				<h3 className="card-title">
					<a href={gitHubUrl} target="_blank" rel="noreferrer">
						{title}
					</a>
				</h3>
				<p className="card-subtitle">{languages}</p>
			</div>
		</div>
	);
}
