const express = require("express");
const routes = require("./routes/postRoutes")
const port = 1900;
const app = express();

app.use(express.static("./upload"))
app.use(express.json());
app.use("/api", routes);
app.use("/uploaded-image", express.static("./upload"))

app.listen(port, ()=>{
    console.log(`Listening to port: ${port}`)
})