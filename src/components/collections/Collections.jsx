import React, {Component} from 'react';
import COLLECTIONS_DATA from './COLLECTIONS_DATA';
import Collection from '../collection/Collection';

class Collections extends Component {
    constructor(){
        super();

        this.state = {
            collections: COLLECTIONS_DATA
        }
    }

    render(){
        return(
            <div className="collections">
                {
                    this.state
                        .collections
                        .map(({id, ...otherCollectionProps}) => <Collection key={id} {...otherCollectionProps}/>)
                }
            </div>
        );
    }
}

export default Collections