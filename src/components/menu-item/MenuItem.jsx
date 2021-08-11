import React from 'react';

const MenuItem = ({key, title, imageUrl,size}) => (
    <div style={{backgroundImage: `url(${imageUrl})`}} className={`menu__item menu__item--${size}`}>
        <div className="menu__item-text-box">
          <h2 className="heading-secondary">
            {title}
          </h2>
          <span>
            Shop now
          </span>
        </div>
      </div>
)

export default MenuItem