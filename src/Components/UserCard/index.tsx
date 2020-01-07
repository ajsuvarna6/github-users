import React, { lazy, Suspense } from 'react';

const UserCardLazy = lazy(() => import('./UserCard'));

const UserCard: React.FC = () => (<Suspense fallback={<div></div>}>
    <UserCardLazy />
</Suspense>);

export default UserCard;