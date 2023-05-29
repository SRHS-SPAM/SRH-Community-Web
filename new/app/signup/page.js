import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import SignupItem from "./SignupItem";

export default async function Signup() {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();
    return (
        <>
            <Seo title="Signup" />
            <Arrow location="/login" />
            <SignupItem />
        </>
    );
}
