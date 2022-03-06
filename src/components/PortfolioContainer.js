import React, { useState } from 'react';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Sidenav from './Sidenav';
import './container.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState('Projects');

	// Handle nav page changes
	const renderPage = () => {
		if (currentPage === 'Projects') return <Projects />;

		if (currentPage === 'About') return <About />;

		if (currentPage === 'Skills') return <Skills />;

		return <Contact />;
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column">
			<div>
				{/* Static sidenav */}
				<Sidenav
					currentPage={currentPage}
					handlePageChange={handlePageChange}
				/>
			</div>
			<div className="page-content">
				{/* Dynamically render page content */}
				{renderPage()}
			</div>
		</div>
	);
}
