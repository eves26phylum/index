import { NavLink } from "react-router";
import afghan from "../assets/images/3kmafghanistan.png";
export function Projects() {
    return <div className="mainContent presentation">
        <div className="default end blog">
            <img src={afghan} className="behaveImage"/>
            <h1><NavLink to="https://github.com/eves26phylum/ProcedurallyGeneratedDeadlineMap_TS">3 Kilometer Afghanistan</NavLink></h1>
            <p>A procedurally generated map with modular, extensible code that uses custom biome rules and perlin-noise generation for the terrain.</p>
            <p>Made in ROBLOX with roblox-ts (TypeScript to Luau Transpiler) inside <NavLink to="https://www.roblox.com/games/12144402492/Deadline">ROBLOX Deadline by Recoil Group</NavLink></p>
            <p>Inspired by Afghanistan's scenery and brought to a virtual world integrated with ROBLOX Deadline's immersive digital firearm physics.</p>
        </div>
    </div>
}