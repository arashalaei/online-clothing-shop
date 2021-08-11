import './sass/main.scss';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home-page/HomePage';


const HatPage = (props) => {
  console.log(props);
  return(
  <div>Hat page</div>)
  
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hat' component={HatPage}/>
      </Switch>
    </div>
  );
}

export default App;
