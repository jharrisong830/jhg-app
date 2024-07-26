import React from "react";
import ProjectCard from "./ProjectCard";
import { type ProjectContent } from "../api/projects";

export default function ProjectSpotlight() {
    let children: Array<React.JSX.Element> = [];
    // for (let i = 0; i < projs.length; i++) {
    //     children.push(<ProjectCard project={projs[i]} />);
    // }
    return <div className="card-group my-4 pe-md-2">{children}</div>;
}