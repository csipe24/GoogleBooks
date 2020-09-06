const router = require("express").Router();
const {Book} = require("../models");

router.post("/books", (req, res) => {
    Book.create(req.body)
    .then(book => {
        res.json(book)
    })
    .catch(error => {
        res.status(401).json(err);
    });
});

router.delete("/books/:id", (req, res)=> {
    Book.findByIdAndDelete(req.params.id, function(err){
        if (err) console.log(err);
        console.log("Book Deleted");
    });
});

router.get("/books", (req, res)=>{
    Book.find()
    .then(book =>{
        res.json(book);
    })
    .catch(err=>{
        res.status(401).json(err);
    });
});

module.exports = router;