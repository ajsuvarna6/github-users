import React from 'react';
import { Input, Div, Button } from '../Common';
import reduxConnect from '../../store/reduxConnect';
import { initialStateType } from '../../reducers';
import styled from 'styled-components';
import { getGitHubUsers } from '../../helpers/apiService';
import { fetchGitHubUsers, fetchUsersInProgress, updateSearchInput } from '../../actions';

interface SearchProps extends initialStateType {
    fetchUsersInProgress: Function,
    fetchGitHubUsers: Function,
    updateSearchInput: Function
}

const SearchInput = styled(Input)`
    flex: 18;
`;

const SearchContainer = styled(Div)`
    flex: 100%;
`;

const SearchButton = styled(Button)`
    flex: 3;
`;

function SearchComponent({
    searchInput, fetchUsersInProgress, fetchGitHubUsers, updateSearchInput, apiInprogress
}: SearchProps) {
    const onChange = (event: any) => {
        updateSearchInput(event.target.value);
    };

    const onKeyDownHandler = (event: any) => {
        if (event.which === 13) {
            onClickHandler();
        }
    };

    const onClickHandler = () => {
        if (searchInput) {
            fetchUsersInProgress();
            getGitHubUsers(searchInput)
                .then((response: any) => {
                    if (response && response.items) {
                        fetchGitHubUsers(response.items, 1);
                    } else {
                        if (response.error) {
                            alert(response.message);
                        }
                        fetchGitHubUsers([], 1);
                    }
                });
        }
    };

    return (
        <SearchContainer>
            <SearchInput
                type='text'
                value={searchInput}
                disabled={apiInprogress}
                onChange={onChange}
                onKeyDown={onKeyDownHandler}
                placeholder="Enter a City..."
            />
            <SearchButton
                type='button'
                disabled={apiInprogress}
                onClick={onClickHandler}
            >
                Search
            </SearchButton>
        </SearchContainer>
    );
}

function mapStateToProps({ searchInput, currentPage, apiInprogress }: initialStateType) {
    return { searchInput, apiInprogress, currentPage };
}

export default reduxConnect(SearchComponent, {
    fetchGitHubUsers, fetchUsersInProgress, updateSearchInput
}, mapStateToProps);