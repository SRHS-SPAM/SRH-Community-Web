import Head from "next/head";

export default function Seo({ title, description }) {
    return (
        <Head>
            <title>{title} | 서울 로봇고등학교 커뮤니티</title>
            <meta name="description" content={description} />
        </Head>
    );
}
