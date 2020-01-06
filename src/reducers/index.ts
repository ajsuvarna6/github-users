export interface initialStateType {
    users: Array<any>,
    searchInput: string,
    apiInprogress: boolean,
    currentPage: number
}

const initialState: initialStateType = {
    users: [],
    searchInput: '',
    apiInprogress: false,
    currentPage: 1
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
            const { payload } = action;
            return {
                ...state,
                apiInprogress: false,
                currentPage: payload.currentPage,
                users: [...state.users, ...payload.users]
            };
        default:
            return state
    }
}

export default GitHubUsersReducer;