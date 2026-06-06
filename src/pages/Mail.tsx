import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

type clipboardCopy = {
    copy: string
}

export function MailMe({ClipboardCopyButton}: {ClipboardCopyButton: React.ComponentType<clipboardCopy>}) {
    return <div className="mainContent presentation">
        <div className="default blog centered">
            <h1>My Contacts</h1>
            <p>Email me at <code>index@example.com <ClipboardCopyButton copy="index@example.com"/></code></p>
            <NavLink to="mailto:index@example.com">Send a Mail to Me</NavLink>
        </div>
    </div>
}