import React from 'react';
import { Input, Div, Button } from '../Common';
import reduxConnect from '../../store/reduxConnect';
import { initialStateType } from '../../reducers';
import styled from 'styled-components';
import { getGitHubUsers } from '../../helpers/apiService';

interface SearchProps extends initialStateType {
    dispatch: Function
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


function SearchComponent({ searchInput, currentPage, apiInprogress, dispatch }: SearchProps) {
    const onChange = (event: any) => {
        dispatch({ type: 'UPDATE_SEARCH', payload: event.target.value });
    };

    const onClickHandler = () => {
        if (searchInput) {
            dispatch({ type: 'FETCH_USERS_INPROGRESS' });
            getGitHubUsers(searchInput)
                .then((response: any) => {
                    if (response && response.items) {
                        dispatch({
                            type: 'FETCH_USERS',
                            payload: {
                                users: response.items,
                                loadMore: response.items.length === 10,
                                currentPage: 1
                            }
                        });
                    } else {
                        dispatch({ type: 'FETCH_USERS', payload: {
                            users: [],
                            loadMore: false, 
                            currentPage: 1
                        } });
                    }
                })
        }
    };

    return (
        <SearchContainer>
            <SearchInput
                value={searchInput}
                disabled={apiInprogress}
                onChange={onChange}
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

export default reduxConnect(SearchComponent, null, mapStateToProps);