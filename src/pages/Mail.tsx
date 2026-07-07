import { faAt, faCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import { getMailAddress } from "../assets/documents/mail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
type clipboardCopy = {
    copy: string
}
export function MailMe({ClipboardCopyButton}: {ClipboardCopyButton: React.ComponentType<clipboardCopy>}) {
    const [shown, setShown] = useState<boolean>(false);
    // let split_1 = Array(170).fill("What the fuck are you doing");
    // let split_2 = Array(170).fill("What the fuck are you doing");
    const [boi, setSplit] = useState<[string[],string[]]>([["no", "no"], ["no", "no"]]);
    const [split_1, split_2] = boi;
    const [mail, setMail] = useState<string>("hah");
    const handleReveal = () => {
        const mail = eval(getMailAddress)[0];
        setSplit([mail.split("@"), mail.split("@")[1].split(".")]);
        setMail(eval(getMailAddress)[0]);
        setShown(true);
    };
    const [part, setPart] = useState(0);
    useEffect(() => {
        if (part !== 1) return;
        const id = setTimeout(()=> {
            setPart(0);
        }, 500);
        return () => clearTimeout(id);
    });
    return <div className="mainContent presentation">
                <div className="default end blog centered">
                <h1>My Contacts</h1>
            { shown ? 
                <>
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
                </>
                : <>
                { part === 0 ?
                <button className="showMail" onClick={() => {
                    setPart(part => part + 1);
                }}>Click to show my email address</button> 
                : 
                <>
                { part === 1 ?
                <button className="showMail red" onClick={() => {
                    setPart(part => part + 1);
                }}>Click AGAIN show my email address...</button> 
                : <>
                <p>Want to get my email? Answer this question to prove you're not one of them web scrapers.</p>
                <div>
                    <p>Question One</p>
                    <input type="text" placeholder="Answer." onChange={(event) => {
                        const element = event.target;
                    }}/>
                </div>
                <button className="showMail" onClick={() => {
                    handleReveal();
                }}>Grant Access to Email Address</button> 
                </>
                }
                </>
                }
            </>}

        </div> 
    </div>
}