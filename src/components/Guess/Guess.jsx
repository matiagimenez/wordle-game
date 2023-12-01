import React from 'react';
import { range } from '../../utils';

export const Guess = ({ guessData }) => {
	return (
		<p className='guess'>
			{range(5).map((column) => {
				return (
					<span className='cell' key={column}>
						{guessData ? guessData[column] : undefined}
					</span>
				);
			})}
		</p>
	);
};
