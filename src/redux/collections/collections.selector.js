import {createSelector} from 'reselect';

const selectCollections = state => state.collections;

export const selectCollectionsData = createSelector(
    [selectCollections], 
    collections => Object.values(collections.collections).length ? Object.values(collections.collections) : []
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections], 
    collections => collections.collections ? collections.collections[collectionUrlParam] : null
)

export const selectIsCollectionFetching = createSelector(
    [selectCollections], 
    collections => collections.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectCollections], 
    collections => !!collections.collections
)