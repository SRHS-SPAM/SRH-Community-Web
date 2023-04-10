import Head from "next/head";

export default function Seo({ title }) {
    return (
        <Head>
            <title>{title} | 서울 로봇고등학교 커뮤니티</title>
        </Head>
    );
}
