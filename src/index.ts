import cors from "cors";
import express from "express";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const apiRouter = express.Router();

app.get("/toto", async (req, res) => {
    res.json("totoApp")
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});
