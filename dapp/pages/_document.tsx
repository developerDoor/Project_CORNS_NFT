import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Lemonada:wght@300;400;500;600;700&display=optional" rel="stylesheet" />
                    <body>
                    <Main />
                    <NextScript />
                    </body>
                </Head>
            </Html>
        );
    }
}