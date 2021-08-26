import React from 'react';
import Collections from './../../collections/Collections'; 
import {Route, Switch} from 'react-router-dom';
import CollectionPage from './../collection-page/CollectionPage';

const ShopPage  = ({match}) => (
    <section className="shoppage">
        <Switch>
            <Route exact path={`${match.path}`} component={Collections} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </Switch>
    </section>
);
    
export default ShopPage;