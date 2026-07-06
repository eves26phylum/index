import { NavLink } from "react-router";

export function GitHub() {
    return <div className="mainContent presentation">
        <div className="blog default end">
            <strong>here is where the source of my projects live</strong>
            <h1>Click on it to view my GitHub.</h1>
            <NavLink target="_blank" to="https://github.com/eves26phylum">https://github.com/eves26phylum</NavLink>
        </div>
    </div>
}