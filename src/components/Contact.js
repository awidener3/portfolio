import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
	return (
		<section id="contact" className="container section d-flex flex-center">
			<h2 className="col-2 section-title border-end pe-3 text-end">
				Contact
			</h2>

			<article className="section-content container-fluid d-flex justify-content-center">
				{/* Github link */}
				<a
					href="https://www.github.com/awidener3"
					target="_blank"
					rel="noreferrer"
					title="https://www.github.com/awidener3"
				>
					<FontAwesomeIcon
						icon={['fab', 'github']}
						size="3x"
						className="p-2 mx-2"
					/>
				</a>

				{/* Twitter link */}
				<a
					href="https://twitter.com/awidener3"
					target="_blank"
					rel="noreferrer"
					title="https://twitter.com/awidener3"
				>
					<FontAwesomeIcon
						icon={['fab', 'twitter']}
						size="3x"
						className="p-2 mx-2"
					/>
				</a>

				{/* LinkedIn link */}
				<a
					href="https://www.linkedin.com/in/alex-widener/"
					target="_blank"
					rel="noreferrer"
					title="https://www.linkedin.com/in/alex-widener/"
				>
					<FontAwesomeIcon
						icon={['fab', 'linkedin-in']}
						size="3x"
						className="p-2 mx-2"
					/>
				</a>

				{/* Mail link */}
				<a
					href="mailto:awidener3@gmail.com"
					target="_blank"
					rel="noreferrer"
					title="awidener3@gmail.com"
				>
					<FontAwesomeIcon
						icon={'envelope'}
						size="3x"
						className="p-2 mx-2"
					/>
				</a>

				{/* Phone link */}
				<a
					href="tel:321-271-5102"
					target="_blank"
					rel="noreferrer"
					title="(321) 271-5102"
				>
					<FontAwesomeIcon
						icon={'phone'}
						size="3x"
						className="p-2 mx-2"
					/>
				</a>
			</article>
		</section>
	);
}
