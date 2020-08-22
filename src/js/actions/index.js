import { ADD_ARTICLE, REMOVE_ARTCILE } from '../constants/action-types';

export function addArticle(payload) {
	return { type: ADD_ARTICLE, payload };
}

export function removeArticle(payload) {
	return { type: REMOVE_ARTCILE, payload };
}
