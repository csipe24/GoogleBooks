import axios from "axios";

export default {
create(data){
    console.log("Testingx")
    return axios.post("/api/books", data);
},

delete(bookID){
    return axios.delete(`/api/books/${bookID}`);
},

getBooks(){
    return axios.get("/api/books");
}
}