import { faAt, faCircle, faDiceTwo, faEnvelope, faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router";
import { getMailAddress } from "../assets/documents/mail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
type clipboardCopy = {
    copy: string
}
function MailDisplay({ split_1, split_2, ClipboardCopyButton, mail }: {
	split_1: [string, string],
	split_2: [string, string],
	ClipboardCopyButton: React.ComponentType<clipboardCopy>,
	mail: string
}) {
	return <code className="youvegotmail">
                                <div className="no-select rah" style={{display: "flex", "rotate": "180deg"}}>
			<div>
				{`${split_2[1]}`}
			</div>
                                    <div><FontAwesomeIcon className="period" icon={faCircle}/></div>
			<p hidden>hotmail</p>
			<div>
				{`${split_2[0]}`}
			</div>
                                    <div><FontAwesomeIcon icon={faAt} className="at"/></div>
			<p hidden>index</p>
			<div>
				{`${split_1[0]}`}
			</div>
                                </div>
                                <ClipboardCopyButton copy={mail}/>
                            </code>
}
export function MailMe({ClipboardCopyButton}: {ClipboardCopyButton: React.ComponentType<clipboardCopy>}) {
    const [shown, setShown] = useState<boolean>(false);
    const [boi, setSplit] = useState<[[string, string],[string, string]]>([["no", "no"], ["no", "no"]]);
    const [split_1, split_2] = boi;
    const [mail, setMail] = useState<string>("hah");
    const handleReveal = () => {
        const mail = eval(getMailAddress)[0];
        setSplit([mail.split("@"), mail.split("@")[1].split(".")]);
        setMail(eval(getMailAddress)[0]);
        setShown(true);
    };
    return <>
		{ shown ?	
		<MailDisplay split_1={split_1} split_2={split_2} ClipboardCopyButton={ClipboardCopyButton} mail={mail}/>	
		: <button onClick={handleReveal} className="email-button">
				E-Mail
			</button> }
	</>
}
