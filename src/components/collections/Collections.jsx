import React from 'react';
import Collection from '../collection/Collection';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsData} from './../../redux/collections/collections.selector';

const Collections = ({collections}) =>  (
    <div className="collections">
        {
            collections
                .map(({id, ...otherCollectionProps}) => <Collection key={id} {...otherCollectionProps}/>)
        }
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsData
})

export default connect(mapStateToProps)(Collections);