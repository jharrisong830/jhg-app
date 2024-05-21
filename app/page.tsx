import { ProjectSpotlight } from "./ui/projectSpotlight";

export default function Home() {
    return (
        <main>
            <div className="px-4 py-5 text-center">
                <h1 className="display-3 fw-bold">Hi! I'm John</h1>
                <p className="lead">Welcome to my home on the web.</p>
            </div>

            <div className="container py-5">
                <div className="row flex-md-row-reverse align-items-center">
                    <div className="col-md-4 pb-2 pb-md-0">
                        <h1 className="display-4 fw-bold text-end technicolor">
                            Project spotlight.
                        </h1>
                    </div>
                    <div className="col-md-8">
                        <ProjectSpotlight
                            projs={[
                                {
                                    title: "Proj1",
                                    subtitle: "Project 1",
                                    description: "This is my first project.",
                                    link: "https://jhg.app",
                                    linkText: "Visit my site",
                                    buttonImgPath: "/vercel.svg"
                                },
                                {
                                    title: "Proj2",
                                    subtitle: "Project 2",
                                    description:
                                        "This is my second project. It's a privacy page",
                                    link: "https://jhg.app/privacy",
                                    linkText: "Visit my site",
                                    buttonImgPath: "/vercel.svg"
                                },
                                {
                                    title: "Proj2",
                                    subtitle: "Project 2",
                                    description:
                                        "This is my second project. It's a privacy page",
                                    link: "https://jhg.app/privacy",
                                    linkText: "Visit my site",
                                    buttonImgPath: "/vercel.svg"
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
