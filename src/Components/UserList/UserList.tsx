import React from 'react';
import { Div } from '../Common';
import reduxConnect from '../../store/reduxConnect';
import { initialStateType } from '../../reducers';

function UserListComponent() {
    return (
        <Div>
        </Div>
    );
}

function mapStateToProps(state: initialStateType) {
    return state;
}

export default reduxConnect(UserListComponent, null, mapStateToProps);