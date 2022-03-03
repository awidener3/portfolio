import React from 'react';

export default function Projects() {
	return (
		<section id="projects" className="container section d-flex">
			<h2 className="pe-3 border-end col-2 text-end">Projects</h2>

			<div className="section-content container-fluid">
				{/* Large Card */}
				<figure className="card">
					<a
						href="https://thechronicler.herokuapp.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="card-image"
							src="./assets/images/chronicler_preview.png"
							alt="a preview of The Chronicler"
						/>
					</a>
					<article className="card-content">
						<h3 className="card-title">
							<a
								href="https://github.com/xndrbrgs/the_chronicler"
								target="_blank"
								rel="noreferrer"
							>
								The Chronicler
							</a>
						</h3>
						<p className="card-subtitle">
							MySQL, Handlebars, NodeJS
						</p>
					</article>
				</figure>

				{/* Small Card */}
				<figure className="card">
					<a
						href="https://awidener3.github.io/weather-dashboard/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="card-image"
							src="./assets/images/weather-dashboard-preview.png"
							alt="a preview of a tic-tac-toe project"
						/>
					</a>
					<article className="card-content">
						<h3 className="card-title">
							<a
								href="https://github.com/awidener3/weather-dashboard"
								target="_blank"
								rel="noreferrer"
							>
								Weather Dashboard
							</a>
						</h3>
						<p className="card-subtitle">JavaScript, Moment.js</p>
					</article>
				</figure>

				{/* Small Card */}
				<figure className="card">
					<a
						href="https://awidener-tech-blog.herokuapp.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="card-image"
							src="./assets/images/tech-blog-preview.png"
							alt="preview of a tech blog application"
						/>
					</a>
					<article className="card-content">
						<h3 className="card-title">
							<a
								href="https://github.com/awidener3/tech-blog"
								target="_blank"
								rel="noreferrer"
							>
								Tech Blog
							</a>
						</h3>
						<p className="card-subtitle">MySQL, MVC Structure</p>
					</article>
				</figure>

				{/* Small Card */}
				<figure className="card">
					<a
						href="https://awidener3.github.io/restaurant-page/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="card-image"
							src="./assets/images/restaurant-page-preview.png"
							alt="a preview of a restaurant website project"
						/>
					</a>
					<article className="card-content">
						<h3 className="card-title">
							<a
								href="https://awidener3.github.io/restaurant-page/"
								target="_blank"
								rel="noreferrer"
							>
								Restaurant Page
							</a>
						</h3>
						<p className="card-subtitle">JavaScript, Webpack</p>
					</article>
				</figure>

				{/* Small Card */}
				<figure className="card">
					<a
						href="https://pr1me-e1gh7.github.io/fourstor/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="card-image"
							src="./assets/images/fourstor-preview.png"
							alt="preview of fourStor"
						/>
					</a>
					<article className="card-content">
						<h3 className="card-title">
							<a
								href="https://github.com/pr1me-e1gh7/fourstor"
								target="_blank"
								rel="noreferrer"
							>
								fourSTOR
							</a>
						</h3>
						<p className="card-subtitle">JavaScript, Foundations</p>
					</article>
				</figure>

				{/* Small Card */}
				<figure className="card">
					<a
						href="https://awidener3.github.io/odin-library/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="card-image"
							src="./assets/images/library-preview.png"
							alt="a preview of a library project"
						/>
					</a>
					<article className="card-content">
						<h3 className="card-title">
							<a
								href="https://awidener3.github.io/odin-library/"
								target="_blank"
								rel="noreferrer"
							>
								Library
							</a>
						</h3>
						<p className="card-subtitle">HTML, CSS, JavaScript</p>
					</article>
				</figure>

				{/* Small Card */}
				<figure className="card">
					<a
						href="https://github.com/awidener3/team-profile-generator"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="card-image"
							src="./assets/images/team-profile-generator-preview.png"
							alt="preview of a team profile generator"
						/>
					</a>
					<article className="card-content">
						<h3 className="card-title">
							<a
								href="https://github.com/awidener3/team-profile-generator"
								target="_blank"
								rel="noreferrer"
							>
								Team Profile Generator
							</a>
						</h3>
						<p className="card-subtitle">
							JavaScript, Inquirer, Jest
						</p>
					</article>
				</figure>

				<p>
					Click on project image for a live preview of the
					application, or the title for the GitHub repo!
				</p>
			</div>
		</section>
	);
}
