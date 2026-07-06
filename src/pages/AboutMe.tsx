import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRust, faTypescript, faJs, faCss } from "@fortawesome/free-brands-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import afghan from "../assets/images/3kmafghanistan.png";
import deadlineuirecreation from "../assets/images/deadlineuirecreation.png";
import Tooltip from "../components/Tooltip";
import { getCurrentTime, getUnixTimestampOfTime, secondsToYears } from "../utilities/age";
import { NeovimIconBecauseItWasTooBig } from "../components/NeovimIcon";
// yeah sure upwards import isn't very good practice but who cares, my code editor has this inbuilt thing that changes the directory whenever you move the file
export function AboutMe() {
    return <div className="mainContent presentation">
        <div className="blog end">
            <div className="double-column">
                <div className="default half">
                    <p>Hi there! I'm eves26phylum, a self-taught full-stack developer who is interested into the field of Game Development. I have been learning programming since {
                        secondsToYears(getCurrentTime() - getUnixTimestampOfTime(2019, 12, 30)).toFixed(1)
                    } years ago.
        I'm interested in software development and creative planning. This year, I am thinking about alternate paths besides Game Development.</p>
                </div>
                <div className="default half">
                    hello hi welcome
                </div>
            </div>
            <div className="default">
                <p>
                    <strong>Basically all of my projects are open-source</strong>—I believe people should be allowed to understand each other's work, build on what is presented, and ultimately share what we know so we can all help each other achieve anything.
                </p>
                <p>Below, are a selection of things I have made.</p>
            </div>
            <div className="default">
                <img src={afghan} className="behaveImage"/>
                <h1><NavLink target="_blank" to="https://github.com/eves26phylum/ProcedurallyGeneratedDeadlineMap_TS">3 Kilometer Afghanistan</NavLink></h1>
                <div className="skill-list">
                    <Tooltip label="ROBLOX Studio" open={true}>
                        <NavLink target="_blank" to="https://en.wikipedia.org/wiki/Roblox">
                            <img src="https://cdn.foundation.roblox.com/current/StudioLogo-Light.svg" className="icon-skill" style={{
                            filter: "invert(21%) sepia(100%) saturate(7414%) hue-rotate(357deg) brightness(91%) contrast(116%)drop-shadow(2px 0px 0px #000000) drop-shadow(-1px 0px 0px #000000) drop-shadow(0px 1px 0px #000000) drop-shadow(0px -1px 0px #000000)"
                        }}/>
                        </NavLink>
                    </Tooltip>
                    <Tooltip label="TypeScript" open={true}>
                        <NavLink target="_blank" to="https://typescriptlang.org">
                            <FontAwesomeIcon icon={faTypescript} className="icon-skill" color="#3178C6"/>
                        </NavLink>
                    </Tooltip>
                </div>
                <p>A procedurally generated map with modular, extensible code that uses custom biome rules and perlin-noise generation for the terrain.</p>
                <p>Made in ROBLOX with roblox-ts (TypeScript to Luau Transpiler) inside <NavLink to="https://www.roblox.com/games/12144402492/Deadline">ROBLOX Deadline by Recoil Group</NavLink></p>
                <p>Inspired by Afghanistan's scenery, and the DEADLINE semi-realistic gun system works well along with it to create a slow-paced experience for milsim enjoyers.</p>
                <img src={deadlineuirecreation} className="behaveImage"/>
                <h1><NavLink target="_blank" to="https://github.com/eves26phylum/DeadlineUIRecreation">Deadline UI Recreation</NavLink> </h1>
                    <div className="skill-list">
                    <Tooltip label="ROBLOX Studio" open={true}>
                        <NavLink target="_blank" to="https://en.wikipedia.org/wiki/Roblox">
                            <img src="https://cdn.foundation.roblox.com/current/StudioLogo-Light.svg" className="icon-skill" style={{
                            filter: "invert(21%) sepia(100%) saturate(7414%) hue-rotate(357deg) brightness(91%) contrast(116%)drop-shadow(2px 0px 0px #000000) drop-shadow(-1px 0px 0px #000000) drop-shadow(0px 1px 0px #000000) drop-shadow(0px -1px 0px #000000)"
                        }}/>
                        </NavLink>
                    </Tooltip>
                    <Tooltip label="TypeScript" open={true}>
                        <NavLink target="_blank" to="https://typescriptlang.org">
                            <FontAwesomeIcon icon={faTypescript} className="icon-skill" color="#3178C6"/>
                        </NavLink>
                    </Tooltip>
                    <Tooltip label="React" open={true}>
                        <NavLink target="_blank" to="https://react.dev">
                            <svg className="icon-skill" width="24px" height="24px" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2" fill="#61DBFB"></circle><g stroke="#61DBFB" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
                        </NavLink>
                    </Tooltip>
                </div>
            </div>
        </div>
    </div>
}