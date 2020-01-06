import React, { Suspense, lazy } from 'react';

const SearchLazy = lazy(() => import('./Search'));

const Search: React.FC = () => (<Suspense fallback={<div></div>}>
    <SearchLazy />
</Suspense>);

export default Search;