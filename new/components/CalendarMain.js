"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import

export default function CalendarMain() {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <Calendar onChange={onChange} value={value} />
        </>
    );
}
