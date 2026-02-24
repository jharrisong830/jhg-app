import { Link, useLocation } from "react-router";

import PageHeader from "../components/PageHeader";

export default function Error() {
    const location = useLocation();

    return (
        <main>
            <PageHeader
                title="Error."
                subtitle="Something went wrong when trying to load this page."
            />
            
            <div className="container py-5">
                <div className="row flex-md-row align-items-center">
                    <div className="col-md-4 pb-2 pb-md-0 mt-5 mt-md-0">
                        <h1 className="display-4 fw-bold text-start">
                            Page <code>{location.pathname}</code> not found.
                        </h1>
                    </div>
                    <div className="col-md-8">
                        <p>
                            This page doesn't exist. If you think this is an
                            issue, let me know!
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
