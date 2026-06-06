import { useEffect, useState } from "react";

export function BlinkingCursor() {
    const [currentCursorIndex, setCurrentCursorIndex] = useState(0);
    useEffect(() => {
        const id = setTimeout(() => {
            setCurrentCursorIndex(currentCursorIndex + 1);
        }, 150)
        return () => {id};
    })
    return <p>{
        ["/", "-", "\\", "|"][currentCursorIndex % 4]
    }</p>
}