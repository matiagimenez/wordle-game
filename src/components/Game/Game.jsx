import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { GuessInput } from '../GuessInput';
import { GuessResults } from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);

	const handleSubmitGuess = (guess) => {
		if (guesses.length === NUM_OF_GUESSES_ALLOWED) return;
		setGuesses([...guesses, guess]);
	};

	return (
		<>
			<GuessResults
				guesses={guesses}
				numOfGuesses={NUM_OF_GUESSES_ALLOWED}
				answer={answer}
			/>
			<GuessInput
				handleSubmitGuess={handleSubmitGuess}
				guesses={guesses}
			/>
		</>
	);
}

export { Game };
