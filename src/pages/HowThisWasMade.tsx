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
            <strong>assets</strong>
            <p>Disk Space Left image at <NavLink to="/destructive_actions">Settings</NavLink> uses a screenshot from <NavLink target="_blank" to="https://apple.com">Apple</NavLink>'s macOS user interface.</p>
            <p>'hello' message from 'the great futon' image at <NavLink to="/what_i_do">programmer life</NavLink> uses a screenshot from <NavLink target="_blank" to="https://discord.com">Discord</NavLink>'s web user interface.</p>
            <p><NavLink target="_blank" to="https://fonts.google.com/specimen/Public+Sans">Public Sans</NavLink> was the primary font used for this website's user interface.</p>
            <p><NavLink target="_blank" to="https://inai.de/projects/consoleet/">Consoleet</NavLink> font</p>
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
            <p>I created this website to showcase who I am, what things I have created, and to practice my web development skills.</p>
        </div>
    </div>
}