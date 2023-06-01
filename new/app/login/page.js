import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import LoginPage from "./LoginPage";
import LogoutPage from "./LogoutPage";

export default async function login() {
    let session = await getServerSession(authOptions);
    return (
        <>
            <Seo title="login" />
            <Arrow location="/" />
            {session ? (
                <span>
                    {session.user.name}님 로그인됨 <LogoutPage></LogoutPage>
                </span>
            ) : (
                <LoginPage></LoginPage>
            )}
        </>
    );
}
