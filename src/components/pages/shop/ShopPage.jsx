import React ,{Component}from 'react';
import Collections from './../../collections/Collections'; 
import {Route, Switch} from 'react-router-dom';
import CollectionPage from './../collection-page/CollectionPage';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from './../../../redux/collections/collections.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching , selectIsCollectionsLoaded} from './../../../redux/collections/collections.selector';
import WithSpinner from './../../with-spinner/with-spinner';

const CollectionsWithSpinner = WithSpinner(Collections);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage  extends Component {

    constructor(){
        super();
        this.unsubscrbeFromSnapshot = null
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        const{fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render(){
        const {match, isCollectionLoaded} = this.props;
        return (
            <section className="shoppage">
                <Switch>
                    <Route exact path={`${match.path}`} render={(props) => <CollectionsWithSpinner isLoading={!isCollectionLoaded} {...props}/>} />
                    <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>}/>
                </Switch>
            </section>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching, 
    isCollectionLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default  connect(mapStateToProps, mapDispatchToProps)(ShopPage);