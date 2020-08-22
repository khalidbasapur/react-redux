import React from 'react';
import List from './List';
import Form from './Form';
import '../../index.css';

const App = () => {
	return (
		<div className="container">
			<div className="add-article-container">
				<h2>Add Article</h2>
				<Form />
			</div>
			<hr />
			<div>
				<List />
			</div>
		</div>
	);
};

export default App;
