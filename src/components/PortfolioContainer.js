import React, { useState } from 'react';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Sidenav from './Sidenav';
import 'bootstrap/dist/css/bootstrap.min.css';

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
			<div className="d-flex">
				<div className="col-2">
					<Sidenav
						currentPage={currentPage}
						handlePageChange={handlePageChange}
					/>
				</div>
				<div className="mt-5 col-10">{renderPage()}</div>
			</div>
		</div>
	);
}
