import collectionsActionTypes from './collections.types';
import { firestore, convertCollectionsSnapshotToMap } from './../../utils/firebase';


export const fetchCollectionsStart = () => ({
    type: collectionsActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: collectionsActionTypes.FETCH_COLLECTIONS_SUCCESS, 
    payload: collectionsMap
})

export const fetchCollectionsFailure = (errMessage) => ({
    type: collectionsActionTypes.FETCH_COLLECTIONS_FAILURE, 
    payload: errMessage
})

export const fetchCollectionsStartAsync = () => dispatch => {
    dispatch(fetchCollectionsStart())
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then(snapshot => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
    }).then(err => dispatch(fetchCollectionsFailure(err)))
}