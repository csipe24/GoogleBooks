import axios from "axios";

export default{
    getParams(params){
        const queryParams = new URLSearchParams();
        queryParams.append("key", "xx");
        Object.entries(params).forEach((entry)=>{
            queryParams.append(entry[0], entry[1]);
        });
        return queryParams
    },
    searchBooks(search){
        return axios.get("https://www.googleapis.com/books/v1/volumes", {
            params: this.getParams({q: search})
        });
    }
}