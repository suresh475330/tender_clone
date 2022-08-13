require("dotenv").config()
const express = require("express")
const connectDB = require("./db/connect")
const cors = require("cors")
const app = express()

const Cards = require("./modules/dbCard")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to tender api</h1>")
})

app.get("/tender/cards", async (req, res) => {
    try {
        const allCards =  await Cards.find();
        res.status(200).json(allCards);
    } catch (error) {
        res.status(500).json({msg : error})
    }
})

app.post("/tender/cards", async (req,res) => {
    try {
        const newCard = await Cards.create(req.body)
        res.status(201).json(newCard)
    } catch (error) {
        res.status(500).json({msg : error})
    }
})

app.use("*",(req,res) => {
    res.status(400).send("Route does not exits")
})

const port = process.env.PORT || 3000


const Start = async () => {
    await connectDB(process.env.MONGOURI)
    app.listen(port, () => {
        console.log(`app is runing on http://localhost:${port}`);
    })
}

Start()














