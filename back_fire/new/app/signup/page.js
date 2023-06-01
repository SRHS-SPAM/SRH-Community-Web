import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import SignupItem from "./SignupItem";

export default async function Signup() {
    return (
        <>
            <Seo title="Signup" />
            <Arrow location="/login" />
            <SignupItem />
        </>
    );
}
