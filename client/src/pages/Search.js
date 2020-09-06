import React from "react";
import Results from "../components/Results";
import SearchForm from "../components/SearchForm";

function Search(){
    return(
        <div>
            <SearchForm/>
            <Results/>
        </div>
    );
}

export default Search;