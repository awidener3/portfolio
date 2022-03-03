import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skills() {
	return (
		<div className="container d-flex">
			<h2 className="pe-3 border-end col-2 text-end">Skills</h2>
			<div className="section-content container-fluid d-flex justify-content-center">
				<FontAwesomeIcon
					icon={['fab', 'js-square']}
					size="4x"
					className="p-2"
					style={{ background: 'yellow' }}
				/>
				<FontAwesomeIcon
					icon={['fab', 'react']}
					size="4x"
					className="p-2"
					style={{ background: 'cyan' }}
				/>
				<FontAwesomeIcon
					icon={['fab', 'node-js']}
					size="4x"
					className="p-2"
					style={{ background: 'green' }}
				/>
			</div>
		</div>
	);
}
