import React from 'react';
import {withRouter} from 'react-router-dom';

const MenuItem = ({key, title, imageUrl, linkUrl, size, history, match}) => (
    <div  style={{backgroundImage: `url(${imageUrl})`}} 
          className={`menu__item menu__item--${size}`}
          onClick={() => history.push(`${match.url}${linkUrl}`)}
          >
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

export default withRouter(MenuItem)