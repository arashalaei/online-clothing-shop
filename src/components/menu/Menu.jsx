import React from 'react';
import MenuItem from './../menu-item/MenuItem'; 
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectMenuItems} from './../../redux/menu/menu.selectors';

const Menu = ({menuItems}) => (
    <section className="menu">
        {menuItems
            .map
                (({id, ...otherItemProps}) => 
                <MenuItem 
                        key={id}
                        {...otherItemProps}/>)}
    </section>
)

const mapSataeToProps = createStructuredSelector({
    menuItems: selectMenuItems
});

export default connect(mapSataeToProps)(Menu);