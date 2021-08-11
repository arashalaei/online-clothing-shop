import React from 'react';

const Collection = ({title, items}) => (
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
                            </div>
                    )
            }
        </div>
    </div>
);

export default Collection;