import { NavLink, type NavLinkProps } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye as faFilledEye, faBook as faFilledBook, type IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
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
                <HeaderLink to="/">About Me</HeaderLink>
                <HeaderLink to="/blog">{IconAndTextCombo({filledIcon: faFilledEye, nonFilledIcon: faEye, children: "Projects"})}</HeaderLink>
                <HeaderLink to="/dog_feeding_simulator">DogFeedingSimulator</HeaderLink>
                <HeaderLink to="/contact">Contact</HeaderLink>
            </nav>
        </div>
    </header>
    </>
}