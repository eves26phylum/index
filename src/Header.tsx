import { NavLink, type NavLinkProps } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye as faFilledEye, faClipboard as faFilledClipboard, type IconDefinition, faFloppyDisk as faFilledFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faEye, faClipboard, faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
export interface HeaderLinkProps extends NavLinkProps {
    
}
export function IconAndTextCombo({filledIcon, nonFilledIcon, children}: {filledIcon: IconDefinition, nonFilledIcon: IconDefinition, children?: React.ReactNode}) {
    return ({isActive}: {isActive: boolean}) => {return <><FontAwesomeIcon icon={ isActive ? filledIcon : nonFilledIcon }/><p>{children}</p></>};
}
export function HeaderLink({children, ...props}: HeaderLinkProps) {
    return <NavLink className={({isActive}) => {return isActive ? "nav-active nav-link" : "nav-link"}} {...props}>{children}</NavLink>;
}
export function MenuBar() {
    return <><header>
        <div className="header">
            <nav>
                <HeaderLink to="/">{IconAndTextCombo({filledIcon: faFilledClipboard, nonFilledIcon: faClipboard, children: "About Me"})}</HeaderLink>
                <HeaderLink to="/blog">{IconAndTextCombo({filledIcon: faFilledEye, nonFilledIcon: faEye, children: "Projects"})}</HeaderLink>
                <HeaderLink to="/dog_feeding_simulator">{IconAndTextCombo({filledIcon: faFilledEye, nonFilledIcon: faEye, children: "DogFeedingSimulator"})}</HeaderLink>
                <HeaderLink to="/contact">{IconAndTextCombo({filledIcon: faFilledFloppyDisk, nonFilledIcon: faFloppyDisk, children: "Contact"})}</HeaderLink>
            </nav>
        </div>
    </header>
    </>
}