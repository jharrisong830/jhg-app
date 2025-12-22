import Connections from "./Connections";
import Navbar from "./Navbar";

export default function PageWithNavbar({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Connections />
        </>
    );
}
