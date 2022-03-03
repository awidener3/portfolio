import React from 'react';

export default function Navbar() {
	return (
		<nav className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
			<div className="container-fluid">
				<h2 className="ms-2">Alex Widener</h2>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ms-auto mb-2 me-2">
						<li className="nav-item mx-2">
							<a className="nav-link" href="#about-me">
								About
							</a>
						</li>
						<li className="nav-item mx-2">
							<a className="nav-link" href="#projects">
								Projects
							</a>
						</li>
						<li className="nav-item mx-2">
							<a className="nav-link" href="#contact">
								Contact
							</a>
						</li>
						<li className="nav-item mx-2">
							<a
								className="nav-link"
								href="https://docs.google.com/document/d/1UNOGbpRp7wsYDBDF5ZlvdlvTWBT690_hJBCsWhINL24/edit?usp=sharing"
								target="_blank"
								rel="noreferrer"
							>
								Resume
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		// <nav className="navbar navbar-expand-md navbar-light container">
		// 	<div className="container-fluid">
		// 		<h2 className="ms-2">Alex Widener</h2>
		// 		<button
		// 			className="navbar-toggler"
		// 			type="button"
		// 			data-bs-toggle="collapse"
		// 			data-bs-target="#navbarSupportedContent"
		// 			aria-controls="navbarSupportedContent"
		// 			aria-expanded="false"
		// 			aria-label="Toggle navigation"
		// 		>
		// 			<span className="navbar-toggler-icon"></span>
		// 		</button>
		// 		<div
		// 			className="collapse navbar-collapse"
		// 			id="navbarSupportedContent"
		// 		>
		// 			<ul className="navbar-nav ms-auto mb-2 me-2">
		// 				<li className="nav-item mx-2">
		// 					<a className="nav-link" href="#about-me">
		// 						About
		// 					</a>
		// 				</li>
		// 				<li className="nav-item mx-2">
		// 					<a className="nav-link" href="#projects">
		// 						Projects
		// 					</a>
		// 				</li>
		// 				<li className="nav-item mx-2">
		// 					<a className="nav-link" href="#contact">
		// 						Contact
		// 					</a>
		// 				</li>
		// 				<li className="nav-item mx-2">
		// 					<a
		// 						className="nav-link"
		// 						href="https://docs.google.com/document/d/1UNOGbpRp7wsYDBDF5ZlvdlvTWBT690_hJBCsWhINL24/edit?usp=sharing"
		// 						target="_blank"
		// 						rel="noreferrer"
		// 					>
		// 						Resume
		// 					</a>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </nav>
	);
}
