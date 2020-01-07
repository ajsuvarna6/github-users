function getGitHubUsers(searchInput = '', page = 1, pageLimit = 10) {
    return APIService(
        `https://api.github.com/search/users?q=location:${searchInput}&per_page=${pageLimit}&page=${page}`
    );

}

function getGitHubUserDetail(url: string) {
    return APIService(url);
}

function APIService(url: string, method = 'GET', body: any = undefined, headers: any = undefined) {
    return fetch(
        url,
        {
            method,
            headers,
            body
        }
    )
        .then((response) => response.json(), (error) => console.log(error))
        .catch(() => console.log('something went wrong!!'));
}

export { getGitHubUsers, getGitHubUserDetail };