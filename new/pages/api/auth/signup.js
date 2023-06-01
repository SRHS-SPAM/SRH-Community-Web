import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function Singup(req, res) {
    if (req.method == "POST") {
        let hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;
        const db = (await connectDB).db("SRH-Community");
        let result = await db.collection("user").insertOne(req.body);
        res.status(200).json("가입성공");
    }
}
