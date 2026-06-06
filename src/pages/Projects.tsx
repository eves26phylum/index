import { NavLink } from "react-router";
import afghan from "../assets/images/3kmafghanistan.png";
export function Projects() {
    return <div className="mainContent presentation">
        <div className="default blog">
            <img src={afghan} className="behaveImage"/>
            <h1>3 Kilometer Afghanistan</h1>
            <p>Made in ROBLOX with roblox-ts (TypeScript) to Luau Transpiler inside ROBLOX Deadline by <NavLink to="https://www.roblox.com/games/12144402492/Deadline">Recoil Group</NavLink></p>
            <p>Inspired by Afghanistan's scenery and brought to a virtual world integrated with ROBLOX Deadline's immersive digital firearm physics.</p>
        </div>
    </div>
}