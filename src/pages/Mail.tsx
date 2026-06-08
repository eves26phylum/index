import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

type clipboardCopy = {
    copy: string
}
export function MailMe({ClipboardCopyButton}: {ClipboardCopyButton: React.ComponentType<clipboardCopy>}) {
    const mailAddress = [":", "o", "t", "l", "i", "a", "m"].reverse().join("");
    function decrypt_mail() {
        let s=3203383023;const b:number[]=[];s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);s=((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))^((((s^(s<<13)>>>0)^((s^(s<<13)>>>0)>>>17))<<5)>>>0);b.push(s&0xFF);return[220,86,63,151,245,244,169,181,44,32,243,128,35,153,185,127,163].map((v,i)=>String.fromCharCode(v^b[i])).join("");
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