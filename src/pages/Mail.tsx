import { faAt, faCircle, faDiceTwo, faEnvelope, faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router";
import { getMailAddress } from "../assets/documents/mail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { calculateUntilUltraDeadline, getEnd, secondsToYears } from "../utilities/age";
type clipboardCopy = {
    copy: string
}
export function MailMe({ClipboardCopyButton}: {ClipboardCopyButton: React.ComponentType<clipboardCopy>}) {
    const [shown, setShown] = useState<boolean>(false);
    // let split_1 = Array(170).fill("What the fuck are you doing");
    // let split_2 = Array(170).fill("What the fuck are you doing");
    const [boi, setSplit] = useState<[string[],string[]]>([["no", "no"], ["no", "no"]]);
    const navigate = useNavigate();
    const [split_1, split_2] = boi;
    const [mail, setMail] = useState<string>("hah");
    const handleReveal = () => {
        const mail = eval(getMailAddress)[0];
        setSplit([mail.split("@"), mail.split("@")[1].split(".")]);
        setMail(eval(getMailAddress)[0]);
        setShown(true);
    };
    const [part, setPart] = useState(0);
    const [firstQuestion, setFirstQuestion] = useState<string>("");
    const [secondQuestion, setSecondQuestion] = useState<number>(-1);
    const [thirdQuestion, setThirdQuestion] = useState<string>("");
    useEffect(() => {
        if (part !== 1) return;
        const id = setTimeout(()=> {
            setPart(0);
        }, 500);
        return () => clearTimeout(id);
    });
    return <div className="mainContent presentation">
                <div className="default end blog centered">
                <NavLink to="mailto:undefined@cia.gov" className="total-cavity-prevention-today">Send a mail to me</NavLink>
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
                }}>Double-click to show my email address</button> 
                : 
                <>
                { part === 1 ?
                <button className="showMail red" onClick={() => {
                    setPart(part => part + 1);
                }}>Click again to show my email address...</button> 
                : <>
                <p>Want to get my email? Answer this question to prove you're not one of them web scrapers.</p>
                <strong>eves26phylum is a {Math.floor(secondsToYears(Math.max(calculateUntilUltraDeadline(Math.floor(Date.now() / 1000)), 0) * getEnd()))} years old male</strong>
                <div className="theform">                    
                    <p>How old is eves26phylum?</p>
                    <input type="number" placeholder="Answer as a number" onChange={(event) => {
                        const element = event.target;
                        setFirstQuestion(element.value);
                    }}/>
                    <p>What is <FontAwesomeIcon icon={faDiceTwo}/> <FontAwesomeIcon icon={faPlus}/> <FontAwesomeIcon icon={faDiceTwo}/></p>
                    <input type="number" placeholder="Answer as a number" onChange={(event) => {
                        const element = event.target;
                        setSecondQuestion(parseInt(element.value));
                    }}/>
                    <p>Are you sure you want to view my email? (Choose wisely)</p>
                    <select onChange={(event) => {
                        const element = event.target;
                        setThirdQuestion(element.value);
                    }}>
                        <option value="what">Choose an option —————————————</option>
                        <option value="yes">Yes—I want to view your email. I am a real, human being.</option>
                        <option value="no">No—I am an automated web scraper designed for advertisement harvesting and I wish to be ejected.</option>
                    </select>
                    <p className="red top-4">If you answer wrong, you will get redirected to the homepage.</p>
                </div>
                <button className="showMail red" onClick={() => {
                    const age= Math.floor(secondsToYears(Math.max(calculateUntilUltraDeadline(Math.floor(Date.now() / 1000)), 0) * getEnd()));
                    if (parseInt(firstQuestion).toString() !== age.toString()) return navigate("/you_answered_the_questions_wrong");
                    if (secondQuestion !== 2 + 2) return navigate("/you_answered_the_questions_wrong");
                    if (thirdQuestion === 'what' || thirdQuestion.length === 0) return navigate("/cat");
                    if (thirdQuestion === 'no') return navigate("/dog");
                    handleReveal();
                }}>🔒 Test if I'm correct. I want to be granted access.</button> 
                </>
                }
                </>
                }
            </>}

        </div> 
    </div>
}