import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRust, faTypescript, faCss } from "@fortawesome/free-brands-svg-icons";
import Tooltip from "../components/Tooltip";
export function HomePage() {
    return <div className="mainContent presentation">
        <div className="default blog">
            <h1>eves26phylum</h1>
            <NavLink to="/projects">Projects</NavLink>
            <div>
                
            </div>

            <h2>Experienced</h2>
            <div className="skill-list">
                <Tooltip label="Visual Studio Code" open={true}>
                    <img src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxj7kCzMIlSC20SNjaJf9GmESvWFqgy6FNrwzWSIu2lzePyWSz8zg09RAX43OFexidzEE3_7l3auaKk4w9ktJdqg-&format=source" className="icon-skill"/>
                </Tooltip>
                <Tooltip label="ROBLOX Studio" open={true}>
                    <img src="https://cdn.foundation.roblox.com/current/StudioLogo-Light.svg" className="icon-skill" style={{
                        filter: "invert(21%) sepia(100%) saturate(7414%) hue-rotate(357deg) brightness(91%) contrast(116%)drop-shadow(2px 0px 0px #000000) drop-shadow(-1px 0px 0px #000000) drop-shadow(0px 1px 0px #000000) drop-shadow(0px -1px 0px #000000)"
                    }}/>
                </Tooltip>
                <Tooltip label="I think this is self-explanatory" open={true}>
                    <img src="https://vite.dev/assets/vite-dark.D2ACe7TL.svg" className="icon-skill"/>
                </Tooltip>
                <Tooltip label="macOS" open={true}>
                    <img src="https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_compare_cacd858a8.png" className="icon-skill-big"/>
                </Tooltip>
            </div>
            <div className="skill-list">
                <Tooltip label="Lua" open={true}>
                    <img src="https://lua.org/images/luaa.gif" className="icon-skill"/>
                </Tooltip>
                <Tooltip label="TypeScript" open={true}>
                    <FontAwesomeIcon icon={faTypescript} className="icon-skill" color="#3178C6"/>
                </Tooltip>
                <Tooltip label="React" open={true}>
                    <svg className="icon-skill" width="24px" height="24px" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2" fill="#61DBFB"></circle><g stroke="#61DBFB" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
                </Tooltip>
                <Tooltip label="HTML" open={true}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E34F26" className="icon-skill"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
                </Tooltip>
            </div>
            <h2>Learning</h2>
            <div className="skill-list">
                <Tooltip label="CSS" open={true}>
                    <FontAwesomeIcon icon={faCss} color={"#663399"} className="icon-skill"/>
                </Tooltip>
                <Tooltip label="Rust (rust-lang)" open={true}>
                    <FontAwesomeIcon icon={faRust} color={"#CE422B"} className="icon-skill"/>
                </Tooltip>
                <Tooltip label="Bevy Engine" open={true}>
                    <img src="https://camo.githubusercontent.com/ddeee711380332fdc0ece07deae09220003e9fd363db337fdafff227384683e8/68747470733a2f2f626576792e6f72672f6173736574732f626576795f6c6f676f5f6c696768745f6461726b5f616e645f64696d6d65642e737667" alt="Bevy" data-canonical-src="https://bevy.org/assets/bevy_logo_light_dark_and_dimmed.svg" className="icon-skill"/>
                </Tooltip>
                <Tooltip label="MySQL" open={true}>
                    <img src="https://www.mysql.com/common/logos/mysql-logo.svg" alt="MySQL" className="icon-skill"/>
                </Tooltip>
            </div>
        </div>
    </div>
}