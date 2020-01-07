export interface User {
    login?: string,
    id?: string,
    avatar_url?: string,
    url?: string,
    html_url?: string
}

export interface initialStateType {
    users: Array<User>,
    searchInput: string,
    apiInprogress: boolean,
    currentPage: number,
    loadMore: boolean,
}

const initialState: initialStateType = {
    users: [],
    searchInput: '',
    apiInprogress: false,
    currentPage: 1,
    loadMore: false
};


function GitHubUsersReducer(state: initialStateType = initialState, action: any) {
    console.log(action);
    switch (action.type) {
        case 'UPDATE_SEARCH':
            return {
                ...state,
                searchInput: action.payload
            };
        
        case 'FETCH_USERS_INPROGRESS': 
            return {
                ...state,
                apiInprogress: true
            };

        case 'FETCH_USERS':
            const { payload: { currentPage, users: newUsers, loadMore } } = action;
            return {
                ...state,
                apiInprogress: false,
                currentPage,
                users: currentPage === 1 ? newUsers : [...state.users, ...newUsers],
                loadMore
            };
        default:
            return state
    }
}

export default GitHubUsersReducer;