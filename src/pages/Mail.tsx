import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import { mail, mailAddress } from "../assets/documents/mail";
type clipboardCopy = {
    copy: string
}
export function MailMe({ClipboardCopyButton}: {ClipboardCopyButton: React.ComponentType<clipboardCopy>}) {
    const split_1 = mail.split("@");
    const split_2 = split_1[1].split(".");
    return <div className="mainContent presentation">
        <div className="default end blog centered">
            <h1>My Contacts</h1>
            <div>
                <p>Email me at <code>{`${split_1[0]} `}AT_SYMBOL<span>{`${split_2[0]}`}</span>DOT_PUNCTUATION<span>{`${split_2[1]}`}</span><ClipboardCopyButton copy={mail}/></code></p>
                {/* <NavLink to={`${mailAddress}${mail}`}>Send Mail</NavLink> */}
            </div>
        </div>
    </div>
}