import { Route, Routes } from "react-router";
import { NotFound } from "./NotFound";
import { HomePage } from "./pages/HomePage";
import { MailMe } from "./pages/Mail";
import { ClipboardCopyButton } from "./components/ClipboardCopy";
import { Projects } from "./pages/Projects";
import { DestructiveActions } from "./pages/DestructiveActions";
export function AllRoutes() {
    return <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/destructive_actions" element={<DestructiveActions/>}/>
            <Route path="/email" element={<MailMe ClipboardCopyButton={ClipboardCopyButton}/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
}