import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

type clipboardCopy = {
    copy: string
}
export function MailMe({ClipboardCopyButton}: {ClipboardCopyButton: React.ComponentType<clipboardCopy>}) {
    const mailAddress = [":", "o", "t", "l", "i", "a", "m"].reverse().join("");
    function decrypt_mail() {
        const defaultValue = "the mail didn't work oops"
        const mail_address_element = document.querySelector(".mail_address");
        if (!mail_address_element) return defaultValue;
        if (!(mail_address_element instanceof HTMLAnchorElement)) return defaultValue;
        const result = (mail_address_element.href.replace(mailAddress, ""));
        return result.length === 0 ? defaultValue : result;
    }
    return <div className="mainContent presentation">
        <div className="default blog centered">
            <h1>My Contacts</h1>
            <div>
                <p>Email me at <code>{decrypt_mail()}<ClipboardCopyButton copy={decrypt_mail()}/></code></p>
                <NavLink to={`${mailAddress}${decrypt_mail()}`}>Send Mail</NavLink>
            </div>
        </div>
    </div>
}