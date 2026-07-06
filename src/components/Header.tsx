import { NavLink, type NavLinkProps } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye as faFilledEye, faClipboard as faFilledClipboard, type IconDefinition, faFloppyDisk as faFilledFloppyDisk, faMoon as faFilledMoon } from '@fortawesome/free-solid-svg-icons';
import { faEye, faClipboard, faFloppyDisk, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useLayoutEffect, useRef } from "react";
import { usePriorityPlusMenu } from "../hooks/usePriorityPlusMenu";
export interface HeaderLinkProps extends NavLinkProps {
    
}
export interface IconTextComboDefinition {
    filledIcon: IconDefinition,
    nonFilledIcon?: IconDefinition,
    children?: React.ReactNode
}
export function IconAndTextCombo({filledIcon, nonFilledIcon, children}: IconTextComboDefinition) {
    const nonFilled = nonFilledIcon || filledIcon;
    return ({isActive}: {isActive: boolean}) => {return <><FontAwesomeIcon icon={ isActive ? filledIcon : nonFilled }/><p>{children}</p></>};
}
export function HeaderLink({children, className, ...props}: HeaderLinkProps) {
    return <NavLink className={({isActive}) => {return isActive ? `nav-active nav-link ${className}` : `nav-link ${className}`}} {...props}>{children}</NavLink>;
}
export function MenuBar() {
    const navRef = usePriorityPlusMenu(<div></div>);
    return <>
        <header>
            <div className="header">
                <nav ref={navRef}>
                    <HeaderLink to="/">{IconAndTextCombo({filledIcon: faFilledMoon, nonFilledIcon: faMoon, children: "eves26phylum"})}</HeaderLink>
                    <HeaderLink to="/what_i_do">{IconAndTextCombo({filledIcon: faFilledClipboard, nonFilledIcon: faClipboard, children: "programmer life"})}</HeaderLink>
                    {/* <HeaderLink to="/projects">{IconAndTextCombo({filledIcon: faFilledEye, nonFilledIcon: faEye, children: "Projects"})}</HeaderLink> */}
                    {/* <HeaderLink to="/dog_feeding_simulator">{IconAndTextCombo({filledIcon: faFilledEye, nonFilledIcon: faEye, children: "Projects"})}</HeaderLink> */}
                    <HeaderLink to="/destructive_actions">{IconAndTextCombo({filledIcon: faFilledFloppyDisk, nonFilledIcon: faFloppyDisk, children: "eves26phylumOS information"})}</HeaderLink>
                </nav>
                <nav className="justify-right">
                    <HeaderLink to="https://github.com/eves26phylum" className="redirect">{IconAndTextCombo({filledIcon: faGithub, children: "GitHub"})}</HeaderLink>
                    <HeaderLink to="/email">{IconAndTextCombo({filledIcon: faEnvelope, children: "Mail"})}</HeaderLink>
                </nav>
            </div>
        </header>
    </>
}