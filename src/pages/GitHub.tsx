import { NavLink } from "react-router";

export function GitHub() {
    return <div className="mainContent presentation">
        <div className="blog default end">
            <strong>here is my developer life</strong>
            <h1>Click on it to view my GitHub.</h1>
            <NavLink to="https://github.com/eves26phylum">https://github.com/eves26phylum</NavLink>
        </div>
    </div>
}