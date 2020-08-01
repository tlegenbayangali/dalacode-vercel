import Head from "next/head";

export default function CustomHead({ pageTitle }) {
    return (
        <Head>
            <title>
                dalacode — { pageTitle }
            </title>
        </Head>
    )
}