export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_INPROGRESS = 'FETCH_USERS_INPROGRESS';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';

export function fetchGitHubUsers(users: any, currentPage: number) {
    return {
        type: FETCH_USERS,
        payload: {
            users,
            loadMore: users.length === 10,
            currentPage
        }
    }
}

export function fetchUsersInProgress() {
    return {
        type: FETCH_USERS_INPROGRESS
    };
}

export function updateSearchInput(payload: string) {
    return {
        type: UPDATE_SEARCH,
        payload
    };
}
