import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library'
import Album from './components/Album'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <span className='library-nav'>
            <Link className="nav-link"  to = '/'>Home</Link>
          </span>
          <span className='library-nav'>
            <Link className="nav-link"  to = '/library'>Library</Link>
          </span>
          <span className='logoNav'>
            <img src='./public/assets/images/bloc_jams_logo.png' alt='bloc Jams Logo'/>
          </span>
          </nav>
        </header>
        <main>
          <Route exact path = '/' component= {Landing} />
          <Route path='/library' component= {Library} />
          <Route path='/album/:slug' component= {Album} />

        </main>
      </div>
    );
  }
}

export default App;
