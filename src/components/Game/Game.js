import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { GuessInput } from '../GuessInput';
import { GuessResults } from '../GuessResults';
import { WonBanner } from '../WonBanner/';
import { LostBanner } from '../LostBanner/';
import { Button } from '../Button';

// Pick a random word on every pageload.
const answer = sample(WORDS);

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

	const handleGameRestart = () => {
		setStatus('running');
		setGuesses([]);
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
			{status !== 'running' && (
				<Button handleClick={handleGameRestart}>
					<span className='material-symbols-outlined'>
						restart_alt
					</span>
				</Button>
			)}
			<GuessInput
				handleSubmitGuess={handleSubmitGuess}
				gameStatus={status}
			/>
		</>
	);
}

export { Game };
