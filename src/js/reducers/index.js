import { ADD_ARTICLE, REMOVE_ARTCILE } from "../constants/action-types";

const initialState = {
    articles: []
}

function rootReducer(state = initialState, action) {
    console.log("im in actions", action);
    switch(action.type) {
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [...state.articles, action.payload]
            }
        case REMOVE_ARTCILE: 
            return {
                ...state,
                articles: state.articles.filter((e, i) => i !== action.payload.index)
            }
        default:
            return state;

    }
    /* 
    Other approach
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if (action.type === REMOVE_ARTCILE) {
        console.log("im in remove");
        return {
            ...state,
            articles: state.articles.filter((e, i) => i !== action.payload.index)
        }
    }
    return state; */
}

export default rootReducer;