import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Outfit, Poppins} from 'next/font/google'
import Header from "@/components/Header";
import {Toaster} from "@/components/ui/toaster";

const poppins = Poppins({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: "--font-poppins",
})

const outfit = Outfit({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: "--font-outfit",
})

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Apex Media",
    description: "The pinnacle of Crypto Marketing",
    icons: "/APEX-logo.svg",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${poppins.variable} antialiased`}
        >
        <Header/>
        {children}
        <Toaster/>
        </body>
        </html>
    );
}
