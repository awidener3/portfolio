import React from 'react';

export default function About() {
	return (
		<div className="container-fluid">
			<h2 className="pe-3 border-end text-end me-5">About Me</h2>
			<div className="ps-3 container">
				<p>
					I am a web developer passionate about creating meaningful
					and high quality applications. Recently earned a certificate
					in Full Stack Web Development from the{' '}
					<a
						href="https://bootcamp.ce.ucf.edu/coding/"
						target="_blank"
						rel="noreferrer"
					>
						University of Central Florida
					</a>
					, where I gained experience with HTML, CSS, JavaScript, and
					Node.js. I worked on a team of three, utilizing agile
					development methodology, to develop an{' '}
					<a
						href="https://thechronicler.herokuapp.com/"
						target="_blank"
						rel="noreferrer"
					>
						application
					</a>{' '}
					that allows users to search a database of 10,000 entries of
					books and save them to a personal collection. I am currently
					working on a project that streamlines complicated game
					mechanics into an easy-to-use app.
				</p>
				<p>
					With a background of 5 years as a Music Educator teaching
					7th and 8th grade, I bring a unique point of view when
					working with teams and always seek out the most organized
					and cleanest route to an end product. In this profession, I
					learned how to effectively communicate complex ideas and was
					often tasked with creating unique solutions to the many
					problems of middle schoolers. My educational and
					professional background, combined with a drive to
					effectively solve problems and continue to grow as a
					developer, would make me a strong addition to any team.
				</p>
			</div>
		</div>
	);
}
