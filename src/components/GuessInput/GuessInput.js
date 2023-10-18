import React, { useState } from 'react';

function GuessInput() {
	const [guess, setGuess] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		if (guess.length !== 5) return;

		console.log({ guess });
		setGuess('');
	}

	return (
		<form onSubmit={handleSubmit} className='guess-input-wrapper'>
			<label htmlFor='guess-input'>Enter your guess:</label>
			<input
				type='text'
				name='guess-input'
				id='guess-input'
				required
				maxLength={5}
				pattern='[A-Z]{5,5}'
				title='5 letter word'
				autoComplete='off'
				value={guess}
				onChange={(event) => {
					const nextGuess = event.target.value.toUpperCase();
					setGuess(nextGuess);
				}}
			/>
		</form>
	);
}

export default GuessInput;
