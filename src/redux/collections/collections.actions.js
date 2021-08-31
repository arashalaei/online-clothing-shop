import collectionsActionTypes from './collections.types';

export const updateCollections = (collectionsMap) => ({
    type: collectionsActionTypes.UPDATE_COLLECTIONS, 
    payload: collectionsMap
})