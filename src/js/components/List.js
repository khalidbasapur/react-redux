import React from 'react';
import { connect } from 'react-redux';
import { removeArticle } from '../actions';

const mapStateToProps = (state) => {
	return { articles: state.articles };
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeArticle: (articleIdx) => dispatch(removeArticle(articleIdx)),
	};
};

const ArtileList = ({ articles, removeArticle }) => {
	const onRemove = (index) => {
		console.log('Index', index);
		removeArticle({ index: index });
	};

	return (
		<div className="add-article-container">
			{articles && articles.length > 0 && (
				<>
					<h2>Articles</h2>
					<ul>
						{articles.map((e, i) => (
							<div className="articles-list" key={e.id} {...e}>
								<li style={{ paddingRight: 30 }}>{e.title}</li>
								<button type="button" onClick={() => onRemove(i)}>
									REMOVE
								</button>
							</div>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

const List = connect(mapStateToProps, mapDispatchToProps)(ArtileList);

export default List;
