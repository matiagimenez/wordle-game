import React from 'react';

export const GuessResults = ({ guesses }) => {
	return (
		<section className='guess-results'>
			{guesses.map(({ value, id }) => {
				return (
					<p className='guess' key={id}>
						{value}
					</p>
				);
			})}
		</section>
	);
};
