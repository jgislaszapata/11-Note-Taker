const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();

const dbNotes = require("./db/db");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/notes", (request, response) => {
    response.sendFile(`${__dirname}/public/notes.html`)
})

app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/public/index.html`)
})

app.get("/api/notes", (request, response) => {
    console.log(dbNotes)
    response.json(dbNotes)
})

app.post("/api/notes", (request, response) => {
    
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT} 🚀`)
})