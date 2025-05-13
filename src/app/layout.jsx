import "./globals.scss";
import { Inter } from "next/font/google";
import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer/Footer";
import theme from "./assets/styles/global/_variables.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Link from "next/link";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Miya's Portfolio",
    description: "Miya Dong's Portfolio Website",
};

export default function RootLayout({ children }) {
    return (
        <>
            <html lang="en">
                <body className="body vsc-initialized">
                    <ThemeProvider theme={theme}>
                        <div className="App">
                            <main className="wrapper">
                                <div className="container__fullwidth">
                                    <Header />
                                    {children}
                                    <Footer />
                                </div>
                                {/* <div className="container__fullwidth">
                                </div> */}
                            </main>
                        </div>
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
