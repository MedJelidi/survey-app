const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")
const question = require("./routers/question")
const response = require("./routers/response")
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json());
app.use("/questions", question);
app.use("/response", response);

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to database...");
        app.listen(PORT, () => console.log(`Server running on ${PORT}`));
    })
    .catch((err) => {
        console.log("Error connecting to database...", err);
        process.exit(1);
    })
