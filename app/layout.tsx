import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.css";

import "./globals.css";
import Navbar from "./ui/navbar";

export const metadata: Metadata = {
    title: "jhg.app"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body data-bs-theme="dark">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
