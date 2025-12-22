export default function Privacy() {
    return (
        <main>
            <div className="px-4 py-5 text-center">
                <h1 className="display-3 fw-normal">Privacy</h1>
                <p className="lead">TLDR: I don't collect your data ever.</p>
            </div>

            <div className="container py-5">
                <div className="row flex-md-row align-items-center">
                    <div className="col-md-4 pb-2 pb-md-0 mt-5 mt-md-0">
                        <h1 className="display-4 fw-bold text-start">
                            No data collected. Ever.
                        </h1>
                    </div>
                    <div className="col-md-8">
                        <p>
                            If you use, test, download, or otherwise access any
                            of my apps, sites, or programs, you can rest assured
                            that I won't collect any data from you. Nothing I
                            have released utilizes any telemetry or server-side
                            storage of data. I'm not in the business of your
                            data; I'm in the business of making cool apps!
                        </p>

                        <p>
                            SimpleHW (on the App Store) and SimpleMusic Transfer
                            (in beta testing) store all data on-device. No extra
                            data comes back to me, aside from any
                            testing/crash-related info sent to me through
                            TestFlight. Any data sent/received through outside
                            services is subject to the service's privacy policy.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
