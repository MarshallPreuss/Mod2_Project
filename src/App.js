import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Nav from './Components/Nav';

import CategoriesPage from './Pages/CategoriesPage';
import DashboardPage from './Pages/DashboardPage';
import EventsPage from './Pages/EventsPage';


function App() {
  return (
    <div className="Main">
      
    <Router>
    <Nav />
      <Switch>
        <Route exact path='/' component={DashboardPage}/>

        <Route exact path='/events' component={EventsPage} />


        <Route exact path='/categories' component={CategoriesPage} />

        <Redirect to='/' />
      </Switch>
    </Router>

    </div>
    
  );
}

export default App;
