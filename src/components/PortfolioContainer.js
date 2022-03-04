import React, { useState } from 'react';
import Projects from './projects/Projects';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Navbar from './navbar/Navbar';

export default function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState('Projects');

	const renderPage = () => {
		if (currentPage === 'Projects') {
			return <Projects />;
		}

		if (currentPage === 'About') {
			return <About />;
		}

		if (currentPage === 'Skills') {
			return <Skills />;
		}

		return <Contact />;
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div>
			<Navbar
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>
			{renderPage()}
		</div>
	);
}
