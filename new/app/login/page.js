import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import LoginPage from "./LoginPage";

export default async function login() {
    return (
        <>
            <Seo title="login" />
            <Arrow location="/" />
            <LoginPage></LoginPage>
        </>
    );
}
