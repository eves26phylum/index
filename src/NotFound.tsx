import { Link } from "react-router";
import notFoundImage from './assets/images/404 not found.png';
export function NotFound() {
    return <div className="mainContent mainGaps notFound">
        <div className="standing">
            <h1>Not Found</h1>
            <p>There's nothing here... I can't find what you're looking for...</p>
            <Link to="/">Go Home</Link>
        </div>
        <img src={notFoundImage} className="F404Image behaveImage" alt="404"/>
    </div>;
}