import './sass/main.scss';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/pages/home/HomePage';
import ShopPage from './components/pages/shop/ShopPage';
import Header from './components/header/Header';

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
        <Route path='/hats' component={HatPage}/>
      </Switch>
    </div>
  );
}

export default App;
