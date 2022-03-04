// Import components here
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// change these to mail and phone
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/navbar/Navbar';
import Jumbotron from './components/jumbotron/Jumbotron';
import About from './components/About';
import Projects from './components/projects/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

// Make icons available across files
library.add(fab, faEnvelope, faPhone);

function App() {
	return (
		<div className="App">
			<Navbar />
			<Jumbotron />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
}

export default App;
