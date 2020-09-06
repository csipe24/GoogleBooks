const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const mongoose = require("mongoose");

require("./models");

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

mongoose.connect("mongodb://localhost/googlebooks",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use("/api", require("./routes"));

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "client/build/index.html"));
})

app.listen(PORT, function(){
     console.log(`Connect to ${PORT}`);
})