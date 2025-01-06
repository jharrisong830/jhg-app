import { Link } from "react-router-dom";
import ProjectSpotlight from "./components/ProjectSpotlight";
import CurrentFavoriteMusic from "./components/CurrentFavoriteMusic";

export default function Home() {
    return (
        <main>
            <div className="px-4 py-5 text-center">
                <h1 className="display-3 fw-bold text-body-emphasis">
                    Hi! I'm John.
                </h1>
                <p className="lead">Welcome to my home on the web.</p>
            </div>

            <div className="container py-5">
                <div className="row flex-md-row align-items-center">
                    <div className="col-md-4 pb-2 pb-md-0 mt-5 mt-md-0">
                        <h1 className="display-4 fw-bold text-start">
                            About me.
                        </h1>
                    </div>
                    <div className="col-md-8">
                        <p>
                            I'm John! I'm a 4/4 Computer Science major at
                            Stevens Institute of Technology in Hoboken, NJ.
                        </p>

                        <p>
                            Programming is one of my greatest passions; I am
                            always looking for ways to further develop my skills
                            and branch out of my comfort zone. My main area of
                            interest is currently mobile applications
                            development for iOS with SwiftUI. I am also
                            interested in systems programming and web
                            programming.
                        </p>

                        <p>
                            My coursework, self-study, and work experience has
                            helped me develop a broad skillset. My coursework
                            has included data structures and algorithms,
                            systems, computer architecture, and PL theory. I was
                            most recently a Course Assistant for CS 496
                            (Principles of Programming Languages) at Stevens
                            Institute of Technology. You can find more details
                            about my coursework and teaching experience on my{" "}
                            <Link
                                to="https://linkedin.com/in/johngraham830"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn page
                            </Link>
                            .
                        </p>

                        <p>
                            I have always loved learning, and always will. I am
                            confident that this will drive me to learn and adapt
                            to as many new technologies as I can. Throughout my
                            career, it is my goal to always continue learning
                            and innovating.
                        </p>
                    </div>
                </div>
                <div className="row flex-md-row-reverse align-items-center">
                    <div className="col-md-4 pb-2 pb-md-0 mt-5 mt-md-0">
                        <h1 className="display-4 fw-bold text-end">
                            Project spotlight.
                        </h1>
                    </div>
                    <div className="col-md-8">
                        <ProjectSpotlight />
                        <Link to="/projects" className="btn btn-light">
                            View More Projects
                        </Link>
                    </div>
                </div>

                <div className="row flex-md-row align-items-center">
                    <div className="col-md-4 pb-2 pb-md-0 mt-5 mt-md-0">
                        <h1 className="display-4 fw-bold text-start">
                            What I'm listening to.
                        </h1>
                    </div>
                    <div className="col-md-8">
                        <CurrentFavoriteMusic />
                    </div>
                </div>
            </div>
        </main>
    );
}
