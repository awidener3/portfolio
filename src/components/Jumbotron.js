import React from 'react';

export default function Jumbotron() {
	return (
		<figure className="hero d-flex justify-content-center">
			<img
				src="./images/headshot-01-small.jpeg"
				alt="A headshot of Alex Widener"
			/>
			<article className="hero-content">
				<span className="display-5 jumbo-text">Hi! I'm Alex.</span>
				<p className="lead">
					I'm a Full-Stack Web Developer <br /> based in Florida.
				</p>
			</article>
		</figure>
	);
}
