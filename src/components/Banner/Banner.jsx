import React from 'react';

export const Banner = ({ gameStatus, totalGuesses }) => {
	const renderBanner = () => {
		if (gameStatus === 'won') {
			return (
				<div className='happy banner'>
					<p>
						<strong>Congratulations!</strong> Got it in {''}
						<strong>{totalGuesses} guesses</strong>.
					</p>
				</div>
			);
		}

		if (gameStatus === 'lost') {
			return (
				<div className='sad banner'>
					<p>
						Sorry, the correct answer is <strong>LEARN</strong>.
					</p>
				</div>
			);
		}
	};

	return renderBanner();
};
