import { NavLink } from "react-router";
import google_early_page from "../assets/images/google early page.png";

export function HowThisWasMade() {
    return <div className="mainContent presentation">
        <div className="default blog end">
            <h1>How this site was made</h1>
            <strong>tools</strong>
            <p>The code editor I used was <NavLink target="_blank" to="https://code.visualstudio.com/">Visual Studio Code</NavLink> by <NavLink target="_blank" to="https://microsoft.com">Microsoft</NavLink></p>
            <p>The web framework I used was <NavLink target="_blank" to="https://react.dev">React</NavLink>—I used it alongside with <NavLink target="_blank" to="https://vite.dev">Vite</NavLink></p>
            <p>This site was deployed with <NavLink target="_blank" to="https://pages.cloudflare.com/">Cloudflare Pages</NavLink></p>
            <strong>site design inspiration</strong>
            <div className="double-column">
                <div className="default half">
                    <p>I designed the topbar to look like similar to Google's early pages' topbar.</p>
                    <p>The topbar's buttons also increases in padding for mobile users to be able to click on the navigation buttons more easily.</p>
                </div>
                <div className="default half">
                    <img src={google_early_page} className="behaveImage"/>
                </div>
            </div>
            <strong>why i created this website</strong>
            <p>I created this website to showcase the things I have created, and to practice my web development skills.</p>
        </div>
    </div>
}