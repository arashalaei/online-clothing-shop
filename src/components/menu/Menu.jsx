import React, {Component} from 'react';
import MenuItem from './../menu-item/MenuItem'; 

class Menu extends Component{
    constructor(){
        super();
        this.state = {
            items:[
                {
                    id: 1,
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    linkUrl: 'hats'
                },
                {
                    id: 2,
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    linkUrl: 'jackets'
                },
                {
                    id: 3,
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    linkUrl: 'sneakers'
                },
                {
                    id: 4,
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    linkUrl: 'womens'
                },
                {
                    id: 5,
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    linkUrl: 'mens'

                }
              ]
        }
    }

    render(){
        return( <section className="menu">
                    {this.state.items
                        .map
                            (({id, ...otherItemProps}) => 
                            <MenuItem 
                                    key={id}
                                    {...otherItemProps}/>)}
                </section>)
    }
}

export default Menu;