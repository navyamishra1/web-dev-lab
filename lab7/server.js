const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let db;

async function connectDB(){
    await client.connect();
    db = client.db("lab7db");
    console.log("MongoDB Connected");
}

connectDB();


// CREATE NOTE
app.post("/notes", async(req,res)=>{

    const note = req.body;
    note.created_date = new Date();

    await db.collection("notes").insertOne(note);

    res.send("Note Added");

});


// READ NOTES
app.get("/notes", async(req,res)=>{

    const notes = await db
        .collection("notes")
        .find()
        .sort({created_date:-1})
        .toArray();

    res.json(notes);

});


// UPDATE NOTE
app.put("/notes/:id", async(req,res)=>{

    const id = req.params.id;
    const data = req.body;

    await db.collection("notes").updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
    );

    res.send("Note Updated");

});


// DELETE NOTE
app.delete("/notes/:id", async(req,res)=>{

    const id = req.params.id;

    await db.collection("notes").deleteOne(
        { _id: new ObjectId(id) }
    );

    res.send("Note Deleted");

});

// ----------------------
// QUESTION 2 - BOOK FINDER
// ----------------------

// Search book by title
app.get("/books/search", async(req,res)=>{

const title=req.query.title;

const books=await db.collection("books").find({
title:{$regex:title,$options:"i"}
}).toArray();

res.json(books);

});


// Sort books by price
app.get("/books/sort/price", async(req,res)=>{

const books=await db.collection("books")
.find()
.sort({price:1})
.toArray();

res.json(books);

});


// Sort books by rating
app.get("/books/sort/rating", async(req,res)=>{

const books=await db.collection("books")
.find()
.sort({rating:-1})
.toArray();

res.json(books);

});


// Top rated books
app.get("/books/top", async(req,res)=>{

const books=await db.collection("books")
.find({rating:{$gte:4}})
.toArray();

res.json(books);

});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});