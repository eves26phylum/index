import { faAt, faCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import { getMailAddress } from "../assets/documents/mail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
type clipboardCopy = {
    copy: string
}
export function MailMe({ClipboardCopyButton}: {ClipboardCopyButton: React.ComponentType<clipboardCopy>}) {
    const [shown, setShown] = useState<boolean>(false);
    let split_1 = Array(170).fill("What the fuck are you doing");
    let split_2 = Array(170).fill("What the fuck are you doing");
    const [mail, mailAddress]: [string, string] = shown ? eval(getMailAddress) : "What the fuck are you doing".repeat(170);
    if (shown === true) {
        split_1 = mail.split("@");
        split_2 = split_1[1].split(".");
    }
    return <div className="mainContent presentation">
        { shown ? <div className="default end blog centered">
            <h1>My Contacts</h1>
            <div>
                <p>Email me at 
                    <code className="youvegotmail">
                        <div className="no-select">
                            <span>
                                {`${split_1[0]}`}
                            </span>
                            <FontAwesomeIcon icon={faAt} className="at"/>
                            <span>
                                {`${split_2[0]}`}
                            </span>
                            <FontAwesomeIcon className="period" icon={faCircle}/>
                            <span>
                                {`${split_2[1]}`}
                            </span>
                        </div>
                        <ClipboardCopyButton copy={mail}/>
                    </code>
                </p>
                {/* <NavLink to={`${mailAddress}${mail}`}>Send Mail</NavLink> */}
            </div>
            <p>use the clipboard copy button</p>
        </div> : <>
            <div className="default end blog centered">
                <h1>My Mail</h1>
                <button onClick={() => {
                    setShown(true);
                }}>Press this button to show</button>
            </div>
        </>}
    </div>
}