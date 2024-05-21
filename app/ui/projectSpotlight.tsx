import Image from "next/image";
import Link from "next/link";

interface ProjectContent {
    title: string;
    subtitle: string;
    description: string;
    link: string;
    linkText: string;
    buttonImgPath: string;
}

export function ProjectSpotlight({ projs }: { projs: Array<ProjectContent> }) {
    let children: Array<React.JSX.Element> = [];
    for (let i = 0; i < projs.length; i++) {
        children.push(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-body-emphasis">
                        {projs[i].title}
                    </h5>
                    <h6 className="card-subtitle mb-2">{projs[i].subtitle}</h6>
                    <p className="card-text text-body-emphasis">
                        {projs[i].description}
                    </p>
                    <Link
                        href={projs[i].link}
                        className="btn btn-light icon-link"
                    >
                        <Image
                            src={projs[i].buttonImgPath}
                            alt={`link icon for ${projs[i].title} project`}
                            width={32}
                            height={32}
                        />
                        {projs[i].linkText}
                    </Link>
                </div>
            </div>
        );
    }
    return <div className="card-group my-4 pe-md-2">{children}</div>;
}
