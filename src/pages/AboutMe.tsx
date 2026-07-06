import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRust, faTypescript, faJs, faCss } from "@fortawesome/free-brands-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import afghan from "../assets/images/3kmafghanistan.png";
import myselfondiscord from "../assets/images/myselfondiscord.png";
import Tooltip from "../components/Tooltip";
import { getCurrentTime, getUnixTimestampOfTime, secondsToYears } from "../utilities/age";
import { NeovimIconBecauseItWasTooBig } from "../components/NeovimIcon";
// yeah sure upwards import isn't very good practice but who cares, my code editor has this inbuilt thing that changes the directory whenever you move the file
export function AboutMe() {
    return <div className="mainContent presentation">
        <div className="blog end">
            <div className="double-column">
                <div className="default half">
                    <img src={myselfondiscord} className="behaveImage"/>
                    <p>Hi there! I'm eves26phylum, a self-taught full-stack developer who is interested into the field of Game Development. I have been learning programming since {
                        secondsToYears(getCurrentTime() - getUnixTimestampOfTime(2019, 12, 30)).toFixed(1)
                    } years ago.
        I'm interested in software development and creative planning. This year, I am thinking about alternate paths besides Game Development.</p>
                </div>
                <div className="default half">
                    <h2>Experienced</h2>
                    <div className="skill-list">
                        <Tooltip label="Visual Studio Code" open={true}>
                            <NavLink target="_blank" to="https://code.visualstudio.com">
                                <img src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxj7kCzMIlSC20SNjaJf9GmESvWFqgy6FNrwzWSIu2lzePyWSz8zg09RAX43OFexidzEE3_7l3auaKk4w9ktJdqg-&format=source" className="icon-skill"/>
                            </NavLink>
                        </Tooltip>
                        <Tooltip label="ROBLOX Studio" open={true}>
                            <NavLink target="_blank" to="https://en.wikipedia.org/wiki/Roblox">
                                <img src="https://cdn.foundation.roblox.com/current/StudioLogo-Light.svg" className="icon-skill" style={{
                                filter: "invert(21%) sepia(100%) saturate(7414%) hue-rotate(357deg) brightness(91%) contrast(116%)drop-shadow(2px 0px 0px #000000) drop-shadow(-1px 0px 0px #000000) drop-shadow(0px 1px 0px #000000) drop-shadow(0px -1px 0px #000000)"
                            }}/>
                            </NavLink>
                        </Tooltip>
                        <Tooltip label="VITE: A Frontend Build Tool" open={true}>
                            <NavLink target="_blank" to="https://vite.dev">
                                <img src="https://vite.dev/assets/vite-dark.D2ACe7TL.svg" className="icon-skill"/>
                            </NavLink>
                        </Tooltip>
                        <Tooltip label="macOS" open={true}>
                            <NavLink target="_blank" to="https://www.apple.com/macos/">
                                <img src="https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_compare_cacd858a8.png" className="icon-skill-big"/>
                            </NavLink>
                        </Tooltip>
                    </div>
                    <div className="skill-list">
                        <Tooltip label="Lua" open={true}>
                            <NavLink target="_blank" to="https://lua.org">
                                <img src="https://lua.org/images/luaa.gif" className="icon-skill"/>
                            </NavLink>
                        </Tooltip>
                        <Tooltip label="TypeScript" open={true}>
                            <NavLink target="_blank" to="https://typescriptlang.org">
                                <FontAwesomeIcon icon={faTypescript} className="icon-skill" color="#3178C6"/>
                            </NavLink>
                        </Tooltip>
                        <Tooltip label="JavaScript" open={true}>
                            <NavLink target="_blank" to="https://dev.to/umarsiddique010/birth-of-javascript-10-days-one-man-and-a-new-era-4d63">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="icon-skill svg-inline--fa fa-js fa-fw fa-w-14" data-icon="js" data-prefix="fab" viewBox="0 0 448 512">
                                    <defs/>
                                    <path fill="#000000" d="M0 32v448h448V32H0z"></path>
                                    <path fill="#f7df1e" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
                                </svg>
                            </NavLink>
                        </Tooltip>
                        <Tooltip label="React" open={true}>
                            <NavLink target="_blank" to="https://react.dev">
                                <svg className="icon-skill" width="24px" height="24px" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2" fill="#61DBFB"></circle><g stroke="#61DBFB" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
                            </NavLink>
                        </Tooltip>
                        <Tooltip label="HTML" open={true}>
                            <NavLink target="_blank" to="https://developer.mozilla.org/docs/Web/HTML">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E34F26" className="icon-skill"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
                            </NavLink>
                        </Tooltip>
                    </div>
                    <h2>Learning</h2>
                    <div className="skill-list">
                        <Tooltip label="I'm Learning" open={true}>
                            <NavLink target="_blank" to="https://files.blogs.baruch.cuny.edu/wp-content/blogs.dir/2418/files/2013/04/Mihaly-Csikszentmihalyi-Flow.pdf">
                                <FontAwesomeIcon icon={faBrain} color={"pink"} className="icon-skill"/>
                            </NavLink>
                        </Tooltip>
                        <Tooltip label="CSS" open={true}>
                            <NavLink target="_blank" to="https://developer.mozilla.org/en-US/docs/Web/CSS">
                                <FontAwesomeIcon icon={faCss} color={"#663399"} className="icon-skill"/>
                            </NavLink>
                        </Tooltip>
                        <Tooltip label="Rust (rust-lang)" open={true}>
                            <NavLink target="_blank" to="https://rust-lang.org">
                                <FontAwesomeIcon icon={faRust} color={"#CE422B"} className="icon-skill"/>
                            </NavLink>
                        </Tooltip>
                        <Tooltip label="Bevy Engine" open={true}>
                            <NavLink target="_blank" to="https://bevy.org">
                                <img src="https://camo.githubusercontent.com/ddeee711380332fdc0ece07deae09220003e9fd363db337fdafff227384683e8/68747470733a2f2f626576792e6f72672f6173736574732f626576795f6c6f676f5f6c696768745f6461726b5f616e645f64696d6d65642e737667" alt="Bevy" data-canonical-src="https://bevy.org/assets/bevy_logo_light_dark_and_dimmed.svg" className="icon-skill"/>
                            </NavLink>
                        </Tooltip>
                        <Tooltip label="MySQL" open={true}>
                            <NavLink target="_blank" to="https://mysql.com">
                                <img src="https://www.mysql.com/common/logos/mysql-logo.svg" alt="MySQL" className="icon-skill"/>
                            </NavLink>
                        </Tooltip>
                        <Tooltip label="Neovim: A Vim-Based Text Editor" open={true}>
                            <NavLink target="_blank" to="https://neovim.io/">
                                <NeovimIconBecauseItWasTooBig className="icon-skill"/>
                            </NavLink>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className="default">
                <p>In the last 5 years, I haven't really posted many things about what I have done. I've scrapped most of my projects, but to be fair—I don't know where I stored a lot of what I was working on, and I don't think I can find it now. Though, I have learnt a lot from programming whatever my mind comes to. This year, I will push myself forward—to achieve what I haven't.</p>
                <p>
                    <strong>Basically all</strong> of my projects are open-source—I believe people should be allowed to understand each other's work, build on what is presented, and ultimately share what we know so we can all help each other achieve anything. No one is to hide something to make others feel unsuperior; we are all capable enough—we shouldn't waste this capability.
                </p>
                <p>I will try to store whatever I work on—to a site like GitHub.</p>
                <p>Below, are a curated selection of things I have made.</p>
            </div>
            <div className="default">
                <img src={afghan} className="behaveImage"/>
                <h1><NavLink to="https://github.com/eves26phylum/ProcedurallyGeneratedDeadlineMap_TS">3 Kilometer Afghanistan</NavLink></h1>
                <p>A procedurally generated map with modular, extensible code that uses custom biome rules and perlin-noise generation for the terrain.</p>
                <p>Made in ROBLOX with roblox-ts (TypeScript to Luau Transpiler) inside <NavLink to="https://www.roblox.com/games/12144402492/Deadline">ROBLOX Deadline by Recoil Group</NavLink></p>
                <p>Inspired by Afghanistan's scenery and brought to a virtual world integrated with ROBLOX Deadline's immersive digital firearm physics.</p>
            </div>
        </div>
    </div>
}