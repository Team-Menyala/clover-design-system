import { useState, useEffect } from "react";

export default function Title() {
    const [title, setTitle] = useState<string>("");
    useEffect(() => {
        setTitle(document.title);
    }, []);

    return title;
}