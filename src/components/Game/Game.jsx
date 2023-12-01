import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { GuessInput } from '../GuessInput';
import { GuessResults } from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);

	const handleSubmitGuess = (guess) => {
		if (guesses.length === 6) return;
		const newGuess = {
			value: guess,
			id: `${guess}-${Math.random()}`,
		};
		console.log(newGuess.id);
		setGuesses([...guesses, newGuess]);
	};

	return (
		<>
			<GuessResults guesses={guesses} />
			<GuessInput
				handleSubmitGuess={handleSubmitGuess}
				guesses={guesses}
			/>
		</>
	);
}

export { Game };
