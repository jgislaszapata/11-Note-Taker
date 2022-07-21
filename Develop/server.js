const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();

const dbNotes = require("./db/db.json");

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/notes", (request, response) => {
    response.sendFile(`${__dirname}/public/notes.html`)
    console.log(`Request to view notes.html received successfully!`)
})

app.get("*", (request, response) => {
    response.sendFile(`${__dirname}/public/index.html`)
    console.log(`Request to view index.html received successfully! `)
})

app.get("/api/notes", (request, response) => {
    console.log(dbNotes)
})

app.post("/api/notes", (request, response) => {
    
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT} 🚀`)
})