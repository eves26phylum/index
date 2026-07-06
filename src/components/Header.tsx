import { NavLink, type NavLinkProps } from "react-router";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye as faFilledEye, faClipboard as faFilledClipboard, type IconDefinition, faFloppyDisk as faFilledFloppyDisk, faMoon as faFilledMoon, faEllipsis, faCog as faFilledCog, faCaretDown as faFilledCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faEye, faClipboard, faFloppyDisk, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePriorityPlusMenu } from "../hooks/usePriorityPlusMenu";
export interface HeaderLinkProps extends NavLinkProps {

}
export interface IconTextComboDefinition {
    filledIcon: IconDefinition,
    nonFilledIcon?: IconDefinition,
    children?: React.ReactNode
}
export function IconAndTextCombo({ filledIcon, nonFilledIcon, children }: IconTextComboDefinition) {
    const nonFilled = nonFilledIcon || filledIcon;
    return ({ isActive }: { isActive: boolean }) => { return <><FontAwesomeIcon icon={isActive ? filledIcon : nonFilled} /><p>{children}</p></> };
}
export function HeaderLink({ children, className = "", ...props }: HeaderLinkProps) {
    return <NavLink className={({ isActive }) => { return isActive ? `nav-active nav-item nav-link ${className}` : `nav-link nav-item ${className}` }} {...props}>{children}</NavLink>;
}

export function MenuBar() {
    const [hiddenCount, setHiddenCount] = useState(0);
    const [isDropMenuOpen, setIsDropMenuOpen] = useState(false);

    const [navRef, overflowCheckRef] = usePriorityPlusMenu<HTMLElement, HTMLDivElement>((count) => {
        setHiddenCount(count);
        if (count === 0) setIsDropMenuOpen(false); // nothing left to show, so don't leave an empty panel open
    });

    const rawNavItems = [
        <HeaderLink key="home" to="/">{IconAndTextCombo({ filledIcon: faFilledMoon, nonFilledIcon: faMoon, children: "about" })}</HeaderLink>,
        <HeaderLink key="what_i_do" to="/what_i_do">{IconAndTextCombo({ filledIcon: faFilledClipboard, nonFilledIcon: faClipboard, children: "programmer life" })}</HeaderLink>,
        // <HeaderLink key="destructive_actions" to="/destructive_actions">{IconAndTextCombo({ filledIcon: faFilledFloppyDisk, nonFilledIcon: faFloppyDisk, children: "eves26phylumOS information" })}</HeaderLink>
    ];

    const navItems = rawNavItems.map((item, index) => {
        const isHidden = hiddenCount > 0 && index >= rawNavItems.length - hiddenCount;
        return isHidden ? React.cloneElement(item, { className: "invisible" }) : item;
    });

    const hiddenItems = hiddenCount > 0 ? rawNavItems.slice(rawNavItems.length - hiddenCount) : [];
    useEffect(() => {
        const onClick = () => {
            setIsDropMenuOpen(false);
        };
        document.querySelector("main")?.addEventListener('click', onClick);
        return () => {
            document.querySelector("main")?.removeEventListener('click', onClick);
        }
    })
    return <>
        <header>
            <div className="header" ref={overflowCheckRef}>
                <nav>
                    <nav ref={navRef}>
                        {navItems}
                    </nav>
                    <div className="doggy">
                        {hiddenCount > 0 && (
                            <button className={`drop-menu-toggle nav-item${isDropMenuOpen ? " open" : ""}`} onClick={() => setIsDropMenuOpen(open => !open)} aria-expanded={isDropMenuOpen}>
                                <p>
                                    More
                                </p>
                                <FontAwesomeIcon icon={faFilledCaretDown}/>
                            </button>
                        )}
                        {isDropMenuOpen && (
                            <nav className="drop-menu">
                                {hiddenItems}
                            </nav>
                        )}
                    </div>
                </nav>
                <nav className="justify-right">
                    <HeaderLink to="https://github.com/eves26phylum" className="redirect">{IconAndTextCombo({ filledIcon: faGithub, children: "GitHub" })}</HeaderLink>
                    <HeaderLink to="/email">{IconAndTextCombo({ filledIcon: faEnvelope, children: "Mail" })}</HeaderLink>
                    <HeaderLink key="destructive_actions" to="/destructive_actions"><FontAwesomeIcon icon={faFilledCog}/></HeaderLink>
                </nav>
            </div>
        </header>
    </>;
}