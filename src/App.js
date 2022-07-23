/** @format */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import bootstrap from 'bootstrap';

function App() {
	const [mode, setmode] = useState('light');

	const toggleMode = () => {
		if (mode === 'light') {
			setmode('dark');
		} else {
			setmode('light');
		}
	};

	return (
		<>
			<Navbar mode={mode} toggleMode={toggleMode} />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-sm-8">
						<div className="p-5">
							<TextForm label="Text Analyize" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
