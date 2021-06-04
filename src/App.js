import './App.css';
import {Switch,Route, BrowserRouter, Redirect} from 'react-router-dom';
import Login from './container/LogIn/Login';
import Home from './container/Home/Home';
import NotFound from './container/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/welcome" component={Home}/>
        <Route path='/404' component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
