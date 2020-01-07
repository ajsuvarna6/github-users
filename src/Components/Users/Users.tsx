import React from 'react';
import { Div } from '../Common';
import Search from '../Search';
import UserList from '../UserList';
import styled from 'styled-components';
import LoadMore from '../LoadMore';

const Container = styled(Div)`
    margin: 0;
    flex-direction: column;
    width: 100%;
`;

function UsersComponent() {
    return (
        <Container>
            <Search />
            <UserList />
            <LoadMore />
        </Container>
    );
}

export default UsersComponent;