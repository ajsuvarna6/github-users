import React from 'react';
import { Div } from '../Common';
import Search from '../Search';
import UserList from '../UserList';
import styled from 'styled-components';

const Container = styled(Div)`
    margin: 0;
`;

function UsersComponent() {
    return (
        <Container>
            <Search />
            <UserList />
        </Container>
    );
}

export default UsersComponent;