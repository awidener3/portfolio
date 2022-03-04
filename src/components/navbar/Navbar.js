import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar({ currentPage, handlePageChange }) {
	return (
		<nav className="side-nav">
			<div className="container-fluid">
				{/* header */}
				<h2 className="ms-2 nav-title">Alex Widener</h2>

				{/* links */}
				<ul className="nav-tabs mb-2 me-2">
					<a
						className={
							currentPage === 'Projects'
								? 'nav-link active'
								: 'nav-link'
						}
						href="#projects"
						onClick={() => handlePageChange('Projects')}
					>
						Projects
					</a>

					<a
						className={
							currentPage === 'About'
								? 'nav-link active'
								: 'nav-link'
						}
						href="#about"
						onClick={() => handlePageChange('About')}
					>
						About
					</a>

					<a
						className={
							currentPage === 'Skills'
								? 'nav-link active'
								: 'nav-link'
						}
						href="#skills"
						onClick={() => handlePageChange('Skills')}
					>
						Skills
					</a>

					<a
						className={
							currentPage === 'Contact'
								? 'nav-link active'
								: 'nav-link'
						}
						href="#contact"
						onClick={() => handlePageChange('Contact')}
					>
						Contact
					</a>

					<a
						className="nav-link"
						href="https://docs.google.com/document/d/1UNOGbpRp7wsYDBDF5ZlvdlvTWBT690_hJBCsWhINL24/edit?usp=sharing"
						target="_blank"
						rel="noreferrer"
					>
						Resume{' '}
						<FontAwesomeIcon
							icon={'arrow-up-right-from-square'}
						></FontAwesomeIcon>
					</a>
				</ul>
			</div>
		</nav>
	);
}
