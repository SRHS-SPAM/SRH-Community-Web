import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import LoginPage from "./LoginPage";
import LogoutPage from "./LogoutPage";

export default async function login() {
    return (
        <>
            <Seo title="login" />
            <Arrow location="/" />
            <LoginPage></LoginPage>
        </>
    );
}
