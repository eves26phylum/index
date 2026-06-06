import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "./Tooltip";
import { useRef, useState } from "react";

export function ClipboardCopyButton({ copy }: { copy: string }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [label, setLabel] = useState<string>("");
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    async function handleClick() {
        try {
            await navigator.clipboard.writeText(copy);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setIsOpen(true);
            setLabel("Copied to Clipboard");
            timeoutRef.current = setTimeout(() => {
                setIsOpen(false);
            }, 4000);
        }
        catch (err) {
            setLabel(`${err}`);
            window.alert(err);
        }
    }

    return <Tooltip label={label} open={isOpen}>
        <button className={`clipboardCopy ${isOpen ? 'green' : ''}`} onClick={handleClick}>
            <FontAwesomeIcon icon={faClipboard} />
        </button>
    </Tooltip>;
}