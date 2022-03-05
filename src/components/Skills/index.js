import React from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skills() {
	return (
		<div className="container-fluid">
			<h2 className="pe-3 border-end text-end me-5">Skills</h2>
			<div className="container">
				{/* Languages */}
				<h3 className="skill-header">Languages</h3>
				<p className="mb-5 skill-text">JavaScript / HTML / CSS / SQL</p>

				{/* Frameworks/Librarys */}
				<h3 className="skill-header">Libraries & Frameworks</h3>
				<p className="mb-5 skill-text">
					React / Express / Mongoose / jest / BootStrap / Foundations
					/ jQuery
				</p>

				{/* Database/Tools */}
				<h3 className="skill-header">Databases & Tools</h3>
				<p className="mb-5 skill-text">
					Node.js / MongoDB / MySQL / NoSQL / Heroku / DBeaver /
					Insomnia / Postman / Sequelize
				</p>

				<button className="mt-5 btn custom-btn btn-lg">
					Download Resume{' '}
					<FontAwesomeIcon
						icon={'arrow-up-right-from-square'}
					></FontAwesomeIcon>
				</button>

				{/* <div>
					<FontAwesomeIcon
						icon={['fab', 'html5']}
						size="4x"
						className="p-2"
						color="#e34f26"
					/>
					<FontAwesomeIcon
						icon={['fab', 'css3']}
						size="4x"
						className="p-2"
						color="#2965f1"
					/>
					<FontAwesomeIcon
						icon={['fab', 'js-square']}
						size="4x"
						className="p-2"
						color="#f7df1e"
					/>
					<FontAwesomeIcon
						icon={['fab', 'react']}
						size="4x"
						className="p-2"
						color="#00d8ff"
					/>
					<FontAwesomeIcon
						icon={['fab', 'node-js']}
						size="4x"
						className="p-2"
						color="#6cc24a"
					/>
				</div> */}
			</div>
		</div>
	);
}
