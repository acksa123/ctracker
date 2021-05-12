
import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Header from './Components/Header';
import India from './Components/India';
import World from './Components/World';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends Component{
  constructor(){
    super();
  }


  render(){
    return(
      <div >
       <Router>
         <Header/>
         <Switch>
           <Route exact path="/">
             <India/>
           </Route>

           <Route path="/india">
             <India/>
           </Route>

           <Route path="/world">
             <World/>
           </Route>

         </Switch>
       </Router>
      </div>
    )
  }
}


export default App;