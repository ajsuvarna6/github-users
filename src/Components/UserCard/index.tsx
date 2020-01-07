import React, { lazy, Suspense } from 'react';
import { User } from '../../reducers';

const UserCardLazy = lazy(() => import('./UserCard'));

const UserCard= (props: User) => (<Suspense fallback={<div></div>}>
    <UserCardLazy {...props} />
</Suspense>);

export default UserCard;