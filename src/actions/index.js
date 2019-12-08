import { FETCH_POSTS, FETCH_AUTHOR } from '../actions/types';

import maqeGithub from '../api/maqeGithub';

export const fetchPosts = () => async dispatch => {
  const response = await maqeGithub.get('/posts.json');
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchAuthor = () => async dispatch => {
  const response = await maqeGithub.get('/authors.json');
  dispatch({ type: FETCH_AUTHOR, payload: response.data });
};
