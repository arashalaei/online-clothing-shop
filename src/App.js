import './sass/main.scss';
import {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './components/pages/home/HomePage';
import ShopPage from './components/pages/shop/ShopPage';
import Header from './components/header/Header';
import RegistrationAndAuthenticationPage from './components/pages/Registration-And-authentication-page/RegistrationAndAuthenticationPage.jsx';
import {auth, createUserProfileDocument} from './utils/firebase';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';

class App extends Component{
  constructor(){
    super();
    this.unsubcribFromAuth = null;
  }

  componentDidMount(){
    this.unsubcribFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
              id: snapshot.id, 
              ...snapshot.data()
            }
          )
        })
      }else{
        this.props.setCurrentUser(userAuth);
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
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/registration' render={() => this.props.currentUser ? (<Redirect to="/"/>) :(<RegistrationAndAuthenticationPage/>)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToprops = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToprops)(App);
