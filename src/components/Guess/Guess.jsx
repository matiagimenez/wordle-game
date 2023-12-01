import React from 'react';
import { range } from '../../utils';

export const Guess = ({ guessData = { value: '', id: Math.random() } }) => {
	const { value, id } = guessData;
	return (
		<p className='guess'>
			{range(5).map((column) => {
				return (
					<span className='cell' key={`${id}-${column}`}>
						{value ? value[column] : ''}
					</span>
				);
			})}
		</p>
	);
};
