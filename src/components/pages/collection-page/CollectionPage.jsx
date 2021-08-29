import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from './../../../redux/collections/collections.selector';
import Button from './../../button/Button';
import {addItem} from './../../../redux/cart-dropdown/cartDropDown.action.js';

const CollectionPage = ({collection}) => {
    console.log(collection.items);
    return(
        <div className="collection">
        <h2 className="heading-secondary u-margin-bottom-small">{collection.title}</h2>
        <div className="collection__items">   
        {
            collection.items
            .map(
                ({id, name, imageUrl, price}) => 
                    <div key={id} className="collection__item">
                        <figure style= {{backgroundImage:`url(${imageUrl})`}} className="collection__item-image" />
                        <div className="collection__item-text-box">
                            <span className="collection__item-name">
                                {name}
                            </span>
                            <span className="collection__item-price">
                                {price}$
                            </span>
                        </div> 
                        <Button color="black" onClick={() => addItem({id, name, imageUrl, price})}>Add to cart</Button>
                    </div>
            )
        }
      </div>
    </div>
)
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);