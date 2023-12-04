import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { Cell } from '../Cell';

export const Guess = ({ guess, answer, handleGameStatus, isLastGuess }) => {
	const result = checkGuess(guess, answer);
	let isCorrect = true;

	if (result) {
		result.forEach(({ status }) => {
			if (status !== 'correct') {
				isCorrect = false;
			}
		});

		if (isCorrect) {
			handleGameStatus('won');
		} else if (isLastGuess) {
			handleGameStatus('lost');
		}
	}

	return (
		<p className='guess'>
			{range(5).map((column) => {
				return (
					<Cell
						letter={result ? result[column].letter : undefined}
						status={result ? result[column].status : undefined}
						key={column}
					/>
				);
			})}
		</p>
	);
};
