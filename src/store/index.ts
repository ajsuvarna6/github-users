import { createStore } from 'redux';
import GitHubUsersReducer from '../reducers';

const store = createStore(GitHubUsersReducer);

export default store;