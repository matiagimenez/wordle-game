import React from 'react';
import { range } from '../../utils';
import { Guess } from '../Guess';

export const GuessResults = ({
	guesses,
	numOfGuesses,
	answer,
	handleGameStatus,
}) => {
	return (
		<section className='guess-results'>
			{range(numOfGuesses).map((row) => {
				const guess = guesses[row];
				return (
					<Guess
						guess={guess}
						key={row}
						answer={answer}
						handleGameStatus={handleGameStatus}
						isLastGuess={row === numOfGuesses - 1}
					/>
				);
			})}
		</section>
	);
};
