import React, {useState, useEffect} from "react";
import Results from "../components/Results";
import API from "../utils/API";

function Saved(){
    const [saved, setSaved] = useState([]);

    useEffect(()=> {
        API.getBooks()
        .then(res=>{
            setSaved(res.data)
        })
    }, [setSaved])
    
    return(
        <div>
            <Results results={saved}/>
        </div>
    );
}

export default Saved;