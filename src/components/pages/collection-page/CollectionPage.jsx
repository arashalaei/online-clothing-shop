import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from './../../../redux/collections/collections.selector';

const CollectionPage = ({collection}) => {
    console.log(collection);
    return(
        <div>
            <h1>hell</h1>
        </div>)
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);