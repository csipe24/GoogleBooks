import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";

import {Container, Jumbotron} from "react-bootstrap";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import googleBooksApi from "./utils/googleBooksApi";

function App() {
  return (
    <div className="App">
    <Nav/>
    <Container>
      <Jumbotron>
        <h1>ReactJS Google Books Search</h1>
      </Jumbotron>
      <BrowserRouter>
        <Route exact path="/" component={Search}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/saved" component={Saved}/>
        <Route exact path="/" component={Saved}/>
      </BrowserRouter>
    </Container>
    </div>
  );
}

export default App;
