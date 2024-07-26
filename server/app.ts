import express from "express";
import configRoutes from "./routes/index";
import cors from "cors";

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.use(cors());

configRoutes(app);

app.listen(PORT, () => {
    console.log(`Server live @ http://localhost:${PORT}`);
});
