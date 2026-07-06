import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import { mail, mailAddress } from "../assets/documents/mail";
type clipboardCopy = {
    copy: string
}
export function MailMe({ClipboardCopyButton}: {ClipboardCopyButton: React.ComponentType<clipboardCopy>}) {
    return <div className="mainContent presentation">
        <div className="default end blog centered">
            <h1>My Contacts</h1>
            <div>
                <p>Email me at <code>{mail}<ClipboardCopyButton copy={mail}/></code></p>
                <NavLink to={`${mailAddress}${mail}`}>Send Mail</NavLink>
            </div>
        </div>
    </div>
}