import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRust, faTypescript } from "@fortawesome/free-brands-svg-icons";
export function HomePage() {
    return <div className="mainContent presentation">
        <div className="default blog">
            <h1>eves26phylum</h1>
            <NavLink to="/projects">Projects</NavLink>
            <div>
                
            </div>

            <h2>Experienced</h2>
            <div className="skill-list">
                <img src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxj7kCzMIlSC20SNjaJf9GmESvWFqgy6FNrwzWSIu2lzePyWSz8zg09RAX43OFexidzEE3_7l3auaKk4w9ktJdqg-&format=source" className="icon-skill"/>
                <img src="https://cdn.foundation.roblox.com/current/StudioLogo-Light.svg" className="icon-skill"/>
                <img src="https://vite.dev/assets/vite-dark.D2ACe7TL.svg" className="icon-skill"/>
                <img src="https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_compare_cacd858a8.png" className="icon-skill-big"/>
            </div>
            <div className="skill-list">
                <FontAwesomeIcon icon={faTypescript} className="icon-skill"/>
                <img src="https://lua.org/images/luaa.gif" className="icon-skill"/>
            </div>
            <h2>Learning</h2>
            <div className="skill-list">
                <FontAwesomeIcon icon={faRust} className="icon-skill"/>
            </div>
        </div>
    </div>
}