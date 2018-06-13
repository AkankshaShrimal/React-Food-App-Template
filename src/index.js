import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  
} from 'react-router-dom';
import App from './App';
import Home from './home';
import listHistory from './components/TODAY_LIST/listHistory'


ReactDOM.render(  <Router>
    
                    <div >
                        
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/search" component={App}/>  
                        <Route exact path="/history" component={listHistory}/>                         
                  </div>
             </Router>, document.getElementById('root'));


registerServiceWorker();
