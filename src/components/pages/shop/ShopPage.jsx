import React ,{Component}from 'react';
import Collections from './../../collections/Collections'; 
import {Route, Switch} from 'react-router-dom';
import CollectionPage from './../collection-page/CollectionPage';
import { firestore, convertCollectionsSnapshotToMap } from './../../../utils/firebase';
import { connect } from 'react-redux';
import { updateCollections } from './../../../redux/collections/collections.actions';
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
        const collectionRef = firestore.collection('collections');
        this.unsubscrbeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            this.props.updateCollections(collectionMap);
            this.setState({isLoading: false})
        })
    }

    render(){
        const {match} = this.props; 
        const {isLoading} = this.state;
        return (
            <section className="shoppage">
                <Switch>
                    <Route exact path={`${match.path}`} render={(props) => <CollectionsWithSpinner isLoading={isLoading} {...props}/>} />
                    <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props}/>}/>
                </Switch>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default  connect(null, mapDispatchToProps)(ShopPage);