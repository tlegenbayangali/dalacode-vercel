import Head from "next/head";

export default function CustomHead({ pageTitle }) {
    return (
        <Head>
            <link rel="shortcut icon" href="/public/assets/img/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/public/assets/img/favicon.ico" type="image/x-icon" />
            <title>
                dalacode — { pageTitle }
            </title>
        </Head>
    )
}