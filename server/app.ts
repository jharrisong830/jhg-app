import express from "express";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));


app.listen(PORT, () => {
    console.log(`Server live @ http://localhost:${PORT}`);
});
