import React from 'react';
import { Div } from '../Common';
import reduxConnect from '../../store/reduxConnect';
import { initialStateType } from '../../reducers';
import UserCard from '../UserCard';

function UserListComponent({ users }: initialStateType) {
    return (
        <Div>
            {
                users.map((user) => (
                    <UserCard key={user.id} {...user} />
                ))
            }
        </Div>
    );
}

function mapStateToProps({ users, currentPage, loadMore }: initialStateType) {
    return { users, currentPage, loadMore };
}

export default reduxConnect(UserListComponent, null, mapStateToProps);