import { Link } from "react-router";
import { useRouteError } from "react-router";

export default function Error() {
    let error = useRouteError();

    return (
        <main>
            <div className="px-4 py-5 text-center">
                <h1 className="display-3 fw-normal">Error</h1>
                <p className="lead">Something went wrong when trying to load this page.</p>
            </div>

            <div className="container py-5">
                <div className="row flex-md-row align-items-center">
                    <div className="col-md-4 pb-2 pb-md-0 mt-5 mt-md-0">
                        <h1 className="display-4 fw-bold text-start">
                            {/* @ts-ignore */}
                            {error.status}: {error.statusText}
                        </h1>
                    </div>
                    <div className="col-md-8">
                        <p>
                            RESOLUTION DETAILS HERE. ERROR TEXT BELOW
                        </p>

                        <p>
                            {/* @ts-ignore */}
                            {error.data}
                        </p>

                        <Link to="/" className="btn btn-light">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}