import React from 'react';

const Search = (props) => {
	return (
		<div>
		<input type="text" onChange={(e) => props.handleSearch(e.target.value)}  value={props.search}/>
		</div>
	);
};

export default Search;
