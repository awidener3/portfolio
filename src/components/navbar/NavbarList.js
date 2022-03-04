import React from 'react';

export default function NavbarList({ sectionName }) {
	return (
		<li className="nav-item mx-2">
			<a className="nav-link" href="#contact">
				{sectionName}
			</a>
		</li>
	);
}
