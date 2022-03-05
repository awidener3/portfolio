import React from 'react';
import chronicler from '../../assets/images/chronicler-small.png';
import weatherDashboard from '../../assets/images/weather-dashboard-small.png';
import techBlog from '../../assets/images/tech-blog-small.png';
import restaurantPage from '../../assets/images/restaurant-page-preview.png';
import fourStor from '../../assets/images/fourstor-preview.png';
import odinLibrary from '../../assets/images/library-preview.png';
import teamProfile from '../../assets/images/team-profile-generator-preview.png';
import ProjectCard from './ProjectCard';

export default function Projects() {
	return (
		<div className="container-fluid">
			<h2 className="pe-3 border-end text-end me-5">Projects</h2>

			<div className="section-content container-fluid d-flex flex-wrap justify-content-center">
				{/* Chronicler */}
				<ProjectCard
					title="The Chronicler"
					languages="MySQL, Handlebars, NodeJS"
					liveUrl="https://thechronicler.herokuapp.com/"
					gitHubUrl="https://github.com/xndrbrgs/the_chronicler"
					img={chronicler}
					alt="a preview of The Chronicler"
					isNew="true"
				/>
				{/* Weather Dash */}
				<ProjectCard
					title="Weather Dashboard"
					languages="JavaScript"
					liveUrl="https://awidener3.github.io/weather-dashboard/"
					gitHubUrl="https://github.com/awidener3/weather-dashboard"
					img={weatherDashboard}
					alt="a preview of a weather dashboard project"
					isNew="false"
				/>
				{/* Tech Blog */}
				<ProjectCard
					title="Tech Blog"
					languages="JavaScript, SQL, MVC"
					liveUrl="https://awidener-tech-blog.herokuapp.com/"
					gitHubUrl="https://github.com/awidener3/tech-blog"
					img={techBlog}
					alt="preview of a tech blog application"
					isNew="false"
				/>
				{/* Restaurant Page */}
				<ProjectCard
					title="Restaurant Page"
					languages="JavaScript, NodeJS, Webpack"
					liveUrl="https://awidener3.github.io/restaurant-page/"
					gitHubUrl="https://github.com/awidener3/restaurant-page"
					img={restaurantPage}
					alt="a preview of a restaurant website project"
					isNew="false"
				/>
				{/* fourSTOR */}
				<ProjectCard
					title="fourSTOR"
					languages="JavaScript, Foundations"
					liveUrl="https://pr1me-e1gh7.github.io/fourstor/"
					gitHubUrl="https://github.com/pr1me-e1gh7/fourstor"
					img={fourStor}
					alt="preview of fourStor"
					isNew="false"
				/>
				{/* Odin's Library */}
				<ProjectCard
					title="Odin's Library"
					languages="HTML, CSS, JavaScript"
					liveUrl="https://awidener3.github.io/odin-library/"
					gitHubUrl="https://github.com/awidener3/odin-library"
					img={odinLibrary}
					alt="a preview of a library project"
					isNew="false"
				/>
				{/* Team Profile Generator */}
				<ProjectCard
					title="Team Profile Generator"
					languages="JavaScript, Inquirer, Jest"
					liveUrl="https://github.com/awidener3/team-profile-generator"
					gitHubUrl="https://github.com/awidener3/team-profile-generator"
					img={teamProfile}
					alt="preview of a team profile generator"
					isNew="false"
				/>
			</div>
		</div>
	);
}
