import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SkillItem({ skill }) {
	return (
		<div className="d-flex align-items-center my-4 skill-list-container">
			{/* Icon */}
			<div>
				<FontAwesomeIcon
					icon={skill.icon}
					size="3x"
					className="pe-3 me-3 text-light"
				/>
			</div>

			{/* Info */}
			<div>
				<h3 className="skill-header m-0 mt-3">{skill.title}</h3>
				<p className="skill-text">{skill.items.join(' / ')}</p>
			</div>
		</div>
	);
}
