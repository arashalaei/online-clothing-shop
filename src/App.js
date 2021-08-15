import './sass/main.scss';
import {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/pages/home/HomePage';
import ShopPage from './components/pages/shop/ShopPage';
import Header from './components/header/Header';
import RegistrationAndAuthenticationPage from './components/pages/Registration-And-authentication-page/RegistrationAndAuthenticationPage.jsx';
import {auth, createUserProfileDocument} from './utils/firebase';

class App extends Component{
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
    this.unsubcribFromAuth = null;
  }

  componentDidMount(){
    this.unsubcribFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser:{
              id: snapshot.id, 
              ...snapshot.data()
            }
          })
        })
      }else{
        this.setState({
          currentUser: userAuth
        });
      }
    })

  }

  componentWillUnmount(){
    this.unsubcribFromAuth()
  }
  
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/registration' component={RegistrationAndAuthenticationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
