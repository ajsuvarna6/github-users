import React from 'react';
import { Div, Anchor, Span, Image } from '../Common';
import styled from 'styled-components';
import { User } from '../../reducers';
import LocationIcon from '../../assets/icons/location.png';
import EmailIcon from '../../assets/icons/email.png';

const DetailContainer = styled(Div)`
    flex: 20;
    padding-top: 15px;
    flex-direction: column;
    position: relative;
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
    font-size: 12px;
    align-items: center;
    color: rgba(45, 43, 43, 0.7);
    & > img {
        width: 20px;
        margin-top: -2px;
        margin-left: -4px;
    }
`;

const EmailText = styled(Span)`
    font-size: 12px;
    align-items: center;
    color: rgba(45, 43, 43, 0.7);
    & > img {
        width: 20px;
        margin-right: 4px;
    }
`;

const UserDetailFetching = styled(Div)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
`;

interface UserDetailProps extends User {
    isUserDetailLoaded: boolean,
    userDetail: any
}

export default function UserDetail(
    { html_url, login, userDetail, isUserDetailLoaded }: UserDetailProps
) {
    return (
        <DetailContainer>
            {!isUserDetailLoaded && <UserDetailFetching>Fetching...</UserDetailFetching>}
            <UserDetailHeader>
                <UserIdLink href={html_url} target='_blank'>{login}</UserIdLink>
                <Span style={{ fontSize: '18px' }}>{userDetail ? userDetail.name : ''}</Span>
            </UserDetailHeader>
            {(userDetail && userDetail.error) && <Div>Limit Exceeded, Please try again later!!!</Div>}
            <UserBio>
                {userDetail ? userDetail.bio : ''}
            </UserBio>
            <Div>
                {(userDetail && userDetail.location) &&
                    <Location>
                        <Image src={LocationIcon} />
                        {userDetail.location}
                    </Location>
                }
                {(userDetail && userDetail.email) &&
                    <EmailText>
                        <Image src={EmailIcon} />
                        {userDetail.email}
                    </EmailText>
                }
            </Div>
        </DetailContainer>
    );
}