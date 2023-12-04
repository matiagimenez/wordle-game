import React from 'react';

export const Button = ({ children, handleClick }) => {
	return (
		<button className='button' nClick={handleClick}>
			{children}
		</button>
	);
};
