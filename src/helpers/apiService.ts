function getGitHubUsers(searchInput = '', page = 1, pageLimit = 10) {
    return fetch(
        `https://api.github.com/search/users?q=location:${searchInput}&per_page=${pageLimit}&page=${page}`
    )
        .then((response) => response.json(), (error) => console.log(error))
        .catch(() => console.log('something went wrong!!'));

}

export { getGitHubUsers };