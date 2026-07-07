import { NavLink } from "react-router";

export function WrongQuestions() {
    return <div className="mainContent presentation">
        <div className="default blog end centered">
            <h1>You answered it wrong.</h1>
            <p>No email for you.</p>
            <NavLink to="/email">Retry</NavLink>
        </div>
    </div>
}