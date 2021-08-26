import {createSelector} from 'reselect';

const selectCollections = state => state.collections;

export const selectCollectionsData = createSelector(
    [selectCollections], 
    collections => Object.values(collections)
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections], 
    collections => collections[collectionUrlParam]
)