import "@/styles/reset.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Seoul Robot HighSchool Community"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
            <style jsx global>{`
                * {
                    box-sizing: border-box;
                }

                body {
                    font-family: system-ui, -apple-system, BlinkMacSystemFont,
                        "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
                        "Open Sans", "Helvetica Neue", sans-serif;
                    background-color: #fffdefd1;
                    height: 100vh;
                }
            `}</style>
        </>
    );
}
