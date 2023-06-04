"use client";
import { signOut } from "next-auth/react";

export default function LogoutPage() {
    return (
        <button
            onClick={() => {
                console.log("logout");
                signOut();
            }}
        >
            로그아웃
        </button>
    );
}
