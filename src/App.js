import './sass/main.scss';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/pages/home/HomePage';
import ShopPage from './components/pages/shop/ShopPage';
import Header from './components/header/Header';
import RegistrationAndAuthenticationPage from './components/pages/Registration-And-authentication-page/RegistrationAndAuthenticationPage.jsx';

const HatPage = (props) => {
  console.log(props);
  return(
  <div>Hat page</div>)
  
}

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/hats' component={HatPage}/>
        <Route exact path='/registration' component={RegistrationAndAuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
