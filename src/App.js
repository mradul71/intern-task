import {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
  
function App() {
  
  return (
    <Router>
    <div className="App">
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
     </div>
     </Router>
  );
}
  
export default App;