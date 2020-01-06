import React, { lazy, Suspense } from 'react';

const UserLastLazy = lazy(() => import('./UserList'));

const UserList: React.FC = () => (<Suspense fallback={<div></div>}>
    <UserLastLazy />
</Suspense>);

export default UserList;