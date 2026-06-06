import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "./Tooltip";
import { useRef, useState } from "react";

export function ClipboardCopyButton({ copy }: { copy: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [label, setLabel] = useState("");
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    async function handleClick() {
        try {
            await navigator.clipboard.writeText(copy);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setIsOpen(true);
            setLabel("copied to clipboard");
            timeoutRef.current = useTimeout(() => {}, 5000);
        }
        catch (err) {
            window.alert(err);
        }
    }

    return <Tooltip label={label} open={isOpen}>
        <button className="clipboardCopy" onClick={handleClick}>
            <FontAwesomeIcon icon={faClipboard} />
        </button>
    </Tooltip>;
}