import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.css";

import "./globals.css";

export const metadata: Metadata = {
    title: "John.com"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
