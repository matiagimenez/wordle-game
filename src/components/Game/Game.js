import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { GuessInput } from '../GuessInput';
import { GuessResults } from '../GuessResults';
import { Banner } from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);
	const [status, setStatus] = useState('running');

	const handleSubmitGuess = (guess) => {
		setGuesses([...guesses, guess]);
		console.log(guesses.length);
		console.log(NUM_OF_GUESSES_ALLOWED);
		if (guess === answer) {
			setStatus('won');
		} else if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
			setStatus('lost');
		}
	};

	return (
		<>
			{status !== 'running' && (
				<Banner gameStatus={status} totalGuesses={guesses.length} />
			)}
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
