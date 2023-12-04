import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { Cell } from '../Cell';

export const Guess = ({ guess, answer }) => {
	const result = checkGuess(guess, answer);
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
