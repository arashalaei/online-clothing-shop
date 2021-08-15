import './sass/main.scss';
import {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/pages/home/HomePage';
import ShopPage from './components/pages/shop/ShopPage';
import Header from './components/header/Header';
import RegistrationAndAuthenticationPage from './components/pages/Registration-And-authentication-page/RegistrationAndAuthenticationPage.jsx';
import {auth} from './utils/firebase';

class App extends Component{
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
    this.unsubcribFromAuth = null;
  }

  componentDidMount(){
    this.unsubcribFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user},() => {
        console.log(this.state.currentUser);
      })
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
