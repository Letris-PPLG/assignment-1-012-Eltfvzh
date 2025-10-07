import express from "express";

const app = express();
app.use(express.json());

let todos = [
  { "id": 1, "title": "Belajar Node.js", "done": false },
  { "id": 2, "title": "Belajar Express.js", "done": true },
]

let react = {
  msg  : "API berjalan normal",
  code : 200
}

app.get("/todos", (req, res) => {
    res.json(todos)
})

app.get("/test", (req, res) => {
    res.json(react)
})

// app.post("/todos", (req, res) =>
//     const {title} = res.body;
//     const newTodos = {newTodos = "id.leght + 1"}
// )

app.listen(5001, () => console.log ("server running on http://localhost:5001"));