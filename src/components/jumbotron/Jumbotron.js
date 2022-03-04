import React from 'react';
import headshot from '../../assets/images/headshot.jpeg';
import './jumbotron.css';

export default function Jumbotron() {
	return (
		<div className="d-flex justify-content-center align-items-center">
			<img
				className="jumbotron-img m-4"
				src={headshot}
				alt="A headshot of Alex Widener"
			/>
			<div className="m-4">
				<h3>Hi! I'm Alex.</h3>
				<p>
					I'm a Full-Stack Web Developer <br /> based in Florida.
				</p>
			</div>
		</div>
	);
}
