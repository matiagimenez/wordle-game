import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { GuessInput } from '../GuessInput';
import { GuessResults } from '../GuessResults';
import { WonBanner } from '../WonBanner/WonBanner';
import { LostBanner } from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);
	const [status, setStatus] = useState('running');

	const handleSubmitGuess = (guess) => {
		// Uso esta variable para poder utilizar el estado futuro, ya que "guesses" se actualizará de forma asincrona
		const nextGuesses = [...guesses, guess];
		setGuesses(nextGuesses);
		if (guess === answer) {
			setStatus('won');
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setStatus('lost');
		}
	};

	return (
		<>
			{status === 'won' && <WonBanner totalGuesses={guesses.length} />}
			{status === 'lost' && <LostBanner answer={answer} />}
			<GuessResults
				guesses={guesses}
				numOfGuesses={NUM_OF_GUESSES_ALLOWED}
				answer={answer}
			/>
			<GuessInput
				handleSubmitGuess={handleSubmitGuess}
				gameStatus={status}
			/>
		</>
	);
}

export { Game };
