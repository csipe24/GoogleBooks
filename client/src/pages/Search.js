import React, {useState} from "react";
import Results from "../components/Results";
import SearchForm from "../components/SearchForm";


function Search(){
    const [results, setResult] = useState([]);
    
    return(
        <div>
            <SearchForm setResult={setResult}/>
            <Results/>
        </div>
    );
}

export default Search;