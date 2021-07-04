import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
    <div className="App">

<Router>
  <Navbar/>
  <Switch>
  <Route exact path="/" component = {Home} />
  </Switch>
</Router>
    </div>
  );
}

export default App;
