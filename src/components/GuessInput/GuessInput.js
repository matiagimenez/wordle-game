import React, { useState } from 'react';

function GuessInput() {
	const [guess, setGuess] = useState('');
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (guess.length < 5) return;
				console.log({ guess });
				setGuess('');
			}}
			className='guess-input-wrapper'
		>
			<label htmlFor='guess-input'>Enter your guess:</label>
			<input
				type='text'
				name='guess-input'
				id='guess-input'
				maxLength={5}
				pattern='[A-Z]{5,5}'
				autoComplete='off'
				value={guess}
				onChange={(event) => setGuess(event.target.value.toUpperCase())}
			/>
		</form>
	);
}

export default GuessInput;
