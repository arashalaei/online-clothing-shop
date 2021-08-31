import './sass/main.scss';
import {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './components/pages/home-page/HomePage';
import ShopPage from './components/pages/shop/ShopPage';
import Header from './components/header/Header';
import RegistrationAndAuthenticationPage from './components/pages/Registration-And-authentication-page/RegistrationAndAuthenticationPage.jsx';
import {auth, createUserProfileDocument} from './utils/firebase';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector';
import CheckOutPage from './components/pages/chekout-page/CheckOutPage';

class App extends Component{
  constructor(){
    super();
    this.unsubcribFromAuth = null;
  }

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubcribFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
           setCurrentUser({
              id: snapshot.id, 
              ...snapshot.data()
            }
          )
        })
      }else{
         setCurrentUser(userAuth);
      }
    })

  }

  componentWillUnmount(){
    this.unsubcribFromAuth()
  }
  
  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/registration' render={() => this.props.currentUser ? (<Redirect to="/"/>) :(<RegistrationAndAuthenticationPage/>)} />
          <Route exact path="/checkout" component={CheckOutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser, 
})

const mapDispatchToprops = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToprops)(App);
