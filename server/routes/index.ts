import { Application } from "express";
import projectData from "../metadata/projects";

export default function configRoutes(app: Application) {
    app.use("/projects", (req, res) => {
        return res.json(projectData);
    });

    app.use("*", (req, res) => {
        return res.status(404).json({ error: "page does not exist" });
    });
}
