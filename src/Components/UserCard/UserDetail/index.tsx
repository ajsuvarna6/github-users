import React from 'react';
import { Div, Anchor, Span } from '../../Common';
import styled from 'styled-components';
import { User } from '../../../reducers';

const DetailContainer = styled(Div)`
    flex: 20;
    padding-top: 15px;
    flex-direction: column;
`;

const UserDetailHeader = styled(Div)`
    align-items: baseline;
`;

const UserIdLink = styled(Anchor)`
    margin-right: 10px;
    font-size: 18px;
`;

const UserBio = styled(Div)`
    padding-bottom: 8px;
    padding-top: 12px;
`;

const Location = styled(Span)`
    margin-right: 10px;
`;

export default function UserDetail({html_url, login}: User) {
    return (
        <DetailContainer>
            <UserDetailHeader>
                <UserIdLink href={html_url} target='_blank'>{login}</UserIdLink>
                <Span style={{ fontSize: '18px' }}>full name</Span>
            </UserDetailHeader>
            <UserBio>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, obcaecati! A deleniti sapiente
                </UserBio>
            <Div>
                <Location>Location</Location>
                <Span>email</Span>
            </Div>
        </DetailContainer>
    );
}