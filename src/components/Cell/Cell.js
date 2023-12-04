import React from 'react';

export const Cell = ({ letter = '', status = '' }) => {
	const className = status ? `cell ${status}` : 'cell';
	return <span className={className}>{letter}</span>;
};
