import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Nav, Navbar  } from 'react-bootstrap';
import Home from './Home.js';

function App() {

    return (
        <Router>
            <div>
                <Navbar bg="primary" variant="dark" fixed="top">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                </Navbar>
            <Route path="/" exact component={Home} />
        </div>
        </Router>
    );
}

export default App;
