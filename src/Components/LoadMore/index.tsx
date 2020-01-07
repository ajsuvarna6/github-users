import React from 'react';
import { Div, Button } from '../Common';
import { initialStateType } from '../../reducers';
import reduxConnect from '../../store/reduxConnect';
import { fetchUsersInProgress, fetchGitHubUsers } from '../../actions';
import { getGitHubUsers } from '../../helpers/apiService';
import styled from 'styled-components';

interface LoadMoreProps extends initialStateType {
    fetchUsersInProgress: Function,
    fetchGitHubUsers: Function
}

const LoadMoreButton = styled(Button)`
    width: 100%;
    font-size: 16px;
    height: 40px;
`;

export function LoadMore({ 
    currentPage, searchInput, loadMore, apiInprogress, 
    fetchUsersInProgress, fetchGitHubUsers
}: LoadMoreProps) {
    const onLoadMoreClick = () => {
        let newPage = currentPage + 1;
        fetchUsersInProgress();
        getGitHubUsers(searchInput, newPage)
            .then((response: any) => {
                if (response && response.items) {
                    fetchGitHubUsers(response.items, newPage);
                } else {
                    if (response.error) {
                        alert(response.message);
                    }
                    fetchGitHubUsers([], currentPage);
                }
            });
    };
    if (!loadMore) {
        return null;
    }
    return (
        <Div>
            <LoadMoreButton type="button" disabled={apiInprogress} onClick={onLoadMoreClick}>
                Load More
            </LoadMoreButton>
        </Div>
    );
}


function mapStateToProps({ currentPage, searchInput, loadMore, apiInprogress }: initialStateType) {
    return { currentPage, searchInput, loadMore, apiInprogress };
}

export default reduxConnect(LoadMore, { fetchUsersInProgress, fetchGitHubUsers }, mapStateToProps)
