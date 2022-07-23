/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
	const handleUpClick = () => {
		//console.log('toUpperCase');
		let newText = text.toUpperCase();
		setText(newText);
	};

	const handleLowClick = () => {
		let textLow = text.toLowerCase();
		setText(textLow);
	};

	const handleUpChange = (event) => {
		setText(event.target.value);
	};

	const handleClearClick = () => {
		setText('');
	};

	const handleCopy = () => {
		let textInput = document.getElementById('myText');
		textInput.select();
		navigator.clipboard.writeText(text);
	};

	const handleSpace = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(' '));
	};

	const [text, setText] = useState('');

	let textCount = text.length;

	let wordCount = text.split(' ').length;

	if (textCount <= 0) {
		wordCount = 0;
	}

	return (
		<>
			<div className="mb-3">
				<label htmlFor="myText" className="form-label">
					{props.label}
				</label>
				<input
					type="text"
					className="form-control"
					id="myText"
					aria-describedby="textHelp"
					onChange={handleUpChange}
					value={text}
				/>

				<div className="form-text">
					Your text has {wordCount} words and {textCount} chars.
				</div>

				<button
					className="btn btn-primary mt-3 mr-3 btn-sm"
					onClick={handleUpClick}>
					Convert to Uppercase
				</button>

				<button
					className="btn btn-primary mt-3 mx-3 btn-sm"
					onClick={handleLowClick}>
					Convert to Lowercase
				</button>

				<button
					className="btn btn-primary mt-3 btn-sm"
					onClick={handleCopy}>
					Copy Text
				</button>

				<button
					className="btn btn-primary mt-3 btn-sm mx-3"
					onClick={handleClearClick}>
					Clear
				</button>

				<button
					className="btn btn-primary mt-3 btn-sm"
					onClick={handleSpace}>
					Remove Space
				</button>
			</div>

			<div className="my-3">
				<h3>Preview</h3>
				<p>{text.toLowerCase()}</p>
			</div>
		</>
	);
}

TextForm.propTypes = {
	label: PropTypes.string,
};

TextForm.defaultProps = {
	label: 'Email Address',
};
