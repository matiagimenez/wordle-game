import React from 'react';

export const Cell = ({ letter = '', status = '' }) => {
	return <span className={`cell ${status}`}>{letter}</span>;
};
