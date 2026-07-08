import { Route, Routes } from "react-router";
import { NotFound } from "./NotFound";
import { AboutMe } from "./pages/AboutMe";
import { MailMe } from "./pages/Mail";
import { ClipboardCopyButton } from "./components/ClipboardCopy";
import { Projects } from "./pages/Projects";
import { DestructiveActions } from "./pages/DestructiveActions";
import { DraggableModal, ModalBody, ModalButtons, ModalDefaultButton, ModalHeader } from "./components/Modal";
import { GPT } from "./pages/Eves26PhylumGPT";
import { GitHub } from "./pages/GitHub";
import { HomePage } from "./pages/HomePage";
import { HowThisWasMade } from "./pages/HowThisWasMade";
import { WrongQuestions } from "./pages/WrongQuestions";
import { Cat, Dog } from "./pages/Dog";
import { GetPizza } from "./pages/DeliverPizza";
export function AllRoutes() {
    return <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/what_i_do" element={<AboutMe/>}/>
            <Route path="/how_this_was_made" element={<HowThisWasMade/>}/>
            {/* <Route path="/projects" element={<Projects/>}/> */}
            <Route path="/destructive_actions" element={<DestructiveActions ModalButtons={ModalButtons} ModalDefaultButton={ModalDefaultButton} ModalHeader={ModalHeader} DraggableModal={DraggableModal} ModalBody={ModalBody}/>}/>
            <Route path="/email" element={<MailMe ClipboardCopyButton={ClipboardCopyButton}/>}/>
            <Route path="/futon_gpt" element={<GPT/>}/>
            <Route path="/github" element={<GitHub/>}/>
            <Route path="/pizza_party" element={<GetPizza/>}/>
            <Route path="/you_answered_the_questions_wrong" element={<WrongQuestions/>}/>
            <Route path="/dog" element={<Dog/>}/>
            <Route path="/cat" element={<Cat/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
}