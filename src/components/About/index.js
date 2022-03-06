import React from 'react';
import './about.css';

export default function About() {
	return (
		<div className="container-fluid">
			<h2 className="pe-3 border-end text-end me-5 mb-5">About Me</h2>
			<div className="container">
				<p>
					I am a web developer passionate about creating meaningful
					and high quality applications using modern technologies.
					Recently earned a certificate in Full Stack Web Development
					from the{' '}
					<a
						href="https://bootcamp.ce.ucf.edu/coding/"
						target="_blank"
						rel="noreferrer"
						className="custom-paragraph-link"
					>
						University of Central Florida
					</a>
					, where I gained experience with HTML, CSS, JavaScript, and
					Node.js.
				</p>

				<p>
					I worked on a team of three, utilizing agile development
					methodology, to develop an{' '}
					<a
						href="https://thechronicler.herokuapp.com/"
						target="_blank"
						rel="noreferrer"
						className="custom-paragraph-link"
					>
						application
					</a>{' '}
					that allows users to search a database of 10,000 entries of
					books and save them to a personal collection.
				</p>
				<p>
					With a background of 5 years as a Music Educator teaching
					7th and 8th grade, I bring a unique point of view when
					working with teams and always seek out the most organized
					and cleanest route to an end product. In this profession, I
					learned how to effectively communicate complex ideas and was
					often tasked with creating unique solutions to the many
					problems of middle schoolers.
				</p>

				<p>
					My educational and professional background, combined with a
					drive to effectively solve problems and continue to grow as
					a developer, would make me a strong addition to any team.
				</p>
			</div>
		</div>
	);
}
