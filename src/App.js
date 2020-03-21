import React from 'react';
import{
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFound';
import ArticlesPage from './pages/ArticlesPage';
import NavBar from './NavBar';
import './App.css';

function App() {
  return (
    <Router>
       <div className="App">
         <NavBar />
         <div id="page-body">
           <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/about" component={AboutPage} />
              <Route path="/articles" component={ArticlesListPage} />
              <Route path="/article/:name" component={ArticlesPage} />
              <Route component={NotFoundPage}/>
           </Switch>
         </div>
        
       </div>
    </Router>
   
  );
}

export default App;
