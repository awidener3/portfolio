// Import components here
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// change these to mail and phone
import {
	faEnvelope,
	faPhone,
	faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import PortfolioContainer from './components/PortfolioContainer';

// Make icons available across files
library.add(fab, faEnvelope, faPhone, faArrowUpRightFromSquare);

function App() {
	return <PortfolioContainer />;
}

export default App;
