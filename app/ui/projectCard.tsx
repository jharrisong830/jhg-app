import Image from "next/image";
import Link from "next/link";

import type { ProjectContent } from "@/app/types";

export default function ProjectCard({ project }: { project: ProjectContent }) {
    return (
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title text-body-emphasis">
                    {project.title}
                </h5>
                <h6 className="card-subtitle mb-2">{project.subtitle}</h6>
                <p className="card-text text-body-emphasis">
                    {project.description}
                </p>
                <Link href={project.link} className="btn btn-light icon-link">
                    <Image
                        src={project.buttonImgPath}
                        alt={`link icon for ${project.title} project`}
                        width={24}
                        height={24}
                    />
                    {project.linkText}
                </Link>
            </div>
        </div>
    );
}
