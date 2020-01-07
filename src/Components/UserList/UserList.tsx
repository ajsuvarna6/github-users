import React from 'react';
import { Div } from '../Common';
import reduxConnect from '../../store/reduxConnect';
import { initialStateType } from '../../reducers';
import UserCard from '../UserCard';
import styled from 'styled-components';

const ListContainer = styled(Div)`
    flex-direction: column;
`;

function UserListComponent({ users, apiInprogress }: initialStateType) {
    return (
        <ListContainer>
            {
                users.map((user) => (
                    <UserCard key={user.id} {...user} />
                ))
            }
            { apiInprogress && <Div>Loading...</Div> }
        </ListContainer>
    );
}

function mapStateToProps({ users, apiInprogress }: initialStateType) {
    return { users, apiInprogress };
}

export default reduxConnect(UserListComponent, null, mapStateToProps);