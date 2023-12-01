import React from 'react';
import { range } from '../../utils';
import { Guess } from '../Guess';

export const GuessResults = ({ guesses, numOfGuesses }) => {
	return (
		<section className='guess-results'>
			{range(numOfGuesses).map((row) => {
				return <Guess guessData={guesses[row]} key={row} />;
			})}
		</section>
	);
};
