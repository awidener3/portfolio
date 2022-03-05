import React, { useState } from 'react';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Sidenav from './Sidenav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './container.css';

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
		<div className="wrapper">
			<div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column vh-100">
				<div>
					<Sidenav
						currentPage={currentPage}
						handlePageChange={handlePageChange}
					/>
				</div>
				<div className="container-fluid mt-lg-5 mt-3">
					{renderPage()}
				</div>
			</div>
		</div>
	);
}
