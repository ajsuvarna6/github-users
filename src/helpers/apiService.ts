function getGitHubUsers(searchInput = '', page = 1, pageLimit = 10) {
    return APIService(
        `https://api.github.com/search/users?q=location:${searchInput}&per_page=${pageLimit}&page=${page}&sort=repositories&order=desc`
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
        .then((response) => { 
            if (response.status === 403) {
                return {
                    error: true,
                    message: "Limit exceeded, please try later!!!"
                };
            } 
            return response.json();
        })
        .catch((error) => console.log('something went wrong!!', error));
}

export { getGitHubUsers, getGitHubUserDetail };