import React from 'react';
import Button from './../button/Button';
import {connect} from 'react-redux';
import {addItem} from './../../redux/cart-dropdown/cartDropDown.action.js';

const Collection = ({title, items, addItem}) => (
    <div className="collection">
        <h2 className="heading-secondary u-margin-bottom-small">{title}</h2>
        <div className="collection__items">   
            {
                items
                    .filter((item, idx) => idx < 4)
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
);

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Collection);