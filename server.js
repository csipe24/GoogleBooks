const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./models");

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}


const MONGODB_URI = 'mongodb+srv://csipe24:Chrissipe1@uwcodingbc.d3yqy.mongodb.net/UWCODINGBC?retryWrites=true&w=majority'


mongoose
  .connect(
    MONGODB_URI || 'mongodb://localhost/googlebooks',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))


app.use("/api", require("./routes"));

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})


app.listen(PORT, function(){
     console.log(`Connect to ${PORT}`);
})