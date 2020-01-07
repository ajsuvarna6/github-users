import React, { lazy, Suspense } from 'react';

const UserListLazy = lazy(() => import('./UserList'));

const UserList: React.FC = () => (<Suspense fallback={<div></div>}>
    <UserListLazy />
</Suspense>);

export default UserList;