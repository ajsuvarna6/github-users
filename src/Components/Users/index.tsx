import React, { lazy, Suspense } from 'react';

const UsersLazy = lazy(() => import('./Users'));

const Users: React.FC = () => (<Suspense fallback={<div></div>}>
    <UsersLazy />
</Suspense>);

export default Users;