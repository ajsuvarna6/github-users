import React, { ReactNode } from 'react';
import { Div, Image } from '../Common';
import { User } from '../../reducers';
import styled from 'styled-components';
import UserDetail from './UserDetail';

const UserCardContainer = styled(Div)`
    border-bottom: 1px solid rgba(208, 208, 208, 0.5);
    padding-bottom: 15px;
`;

const AvatarContainer = styled(Div)`
    flex: 2;
    min-width: 60px;
    padding-top: 15px;
    height: 94px;
`;

const AvatarImage = styled(Image)`
    width: 50px;
    height: 50px;
    margin-left: 4px;
    border-radius: 4px;
    background-color: #e0e0e0;
`;

interface UserCardProps extends User {
    children?: ReactNode
}

function UserCardComponent({ login, avatar_url, html_url, url }: User) {
    return (
        <UserCardContainer>
            <AvatarContainer>
                <AvatarImage src={avatar_url} />
            </AvatarContainer>
            <UserDetail 
                login={login}
                html_url={html_url}
            />
        </UserCardContainer>
    );
}

export default UserCardComponent;