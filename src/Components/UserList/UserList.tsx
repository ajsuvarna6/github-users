import React from 'react';
import { Div } from '../Common';
import reduxConnect from '../../store/reduxConnect';
import { initialStateType } from '../../reducers';
import UserCard from '../UserCard';
import styled from 'styled-components';

const ListContainer = styled(Div)`
    flex-direction: column;
`;

const Loader = styled(Div)`
    margin: 10px auto;
`;

function UserListComponent({ users, apiInprogress }: initialStateType) {
    return (
        <ListContainer>
            {
                users.map((user) => (
                    <UserCard key={user.id} {...user} />
                ))
            }
            { apiInprogress && <Loader>Loading...</Loader> }
        </ListContainer>
    );
}

function mapStateToProps({ users, apiInprogress }: initialStateType) {
    return { users, apiInprogress };
}

export default reduxConnect(UserListComponent, null, mapStateToProps);