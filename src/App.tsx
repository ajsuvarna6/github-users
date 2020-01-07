import React from 'react';
import { Div } from './Components/Common';
import Users from './Components/Users';
import { Provider } from 'react-redux';
import store from './store';

const AppComponent: React.FC = () => {
    return (
        <Div>
            <Provider store={store}>
                <Users />
            </Provider>
        </Div>
    );
}

export default AppComponent;
