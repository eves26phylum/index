import { NavLink, type NavLinkProps } from "react-router"
export interface HeaderLinkProps extends NavLinkProps {
    
}
export function HeaderLink({children, ...props}: HeaderLinkProps) {
    return <NavLink className={({isActive}) => {return isActive ? "nav-active nav-link" : "nav-link"}} {...props}>{children}</NavLink>;
}
export function MenuBar() {
    return <><header>
        <div className="header">
            <nav>
                <HeaderLink to="/">About Me</HeaderLink>
                <HeaderLink to="/blog">Projects</HeaderLink>
                <HeaderLink to="/dog_feeding_simulator">DogFeedingSimulator</HeaderLink>
            </nav>
        </div>
    </header>
    </>
}