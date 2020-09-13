import React, { useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route} from "react-router-dom";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import NoMatch from "./components/NoMatch";

import {Container, Jumbotron} from "react-bootstrap";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import googleBooksApi from "./utils/googleBooksApi";

function App() {

  useEffect(() => {
    googleBooksApi.searchBooks("James Patterson")
    .then(results => {
      console.log(results)
    })
    .catch(err => {console.log(err)})
  },[])

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
        <Route  component={NoMatch}/>
      </BrowserRouter>
    </Container>
    </div>
  );
}

export default App;
