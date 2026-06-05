import { Link } from "react-router";

export function NotFound() {
    return <div className="mainContent notFound">
        <h1>Not Found</h1>
        <p>Perhaps, try looking somewhere else.</p>
        <Link to="/">Go Home</Link>
    </div>;
}