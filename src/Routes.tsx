import { Navigate, Route, Routes } from "react-router";
import { NotFound } from "./NotFound";
import { MailMe } from "./pages/Mail";
import { ClipboardCopyButton } from "./components/ClipboardCopy";
import { DestructiveActions } from "./pages/DestructiveActions";
import { DraggableModal, ModalBody, ModalButtons, ModalDefaultButton, ModalHeader } from "./components/Modal";
import { GPT } from "./pages/Eves26PhylumGPT";
import { GitHub } from "./pages/GitHub";
import { HomePage } from "./pages/HomePage";
import { WrongQuestions } from "./pages/WrongQuestions";
import { Cat, Dog } from "./pages/Dog";
import { GetPizza } from "./pages/DeliverPizza";
import { Blog } from "./pages/Blog";
import { BlogViewer } from "./pages/BlogViewer";
import { MyCode } from "./pages/MyCode";

export function AllRoutes() {
    return <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/destructive_actions" element={<DestructiveActions ModalButtons={ModalButtons} ModalDefaultButton={ModalDefaultButton} ModalHeader={ModalHeader} DraggableModal={DraggableModal} ModalBody={ModalBody}/>}/>
            <Route path="/email" element={<MailMe ClipboardCopyButton={ClipboardCopyButton}/>}/>
            <Route path="/futon_gpt" element={<GPT/>}/>
            <Route path="/github" element={<GitHub/>}/>
            <Route path="/pizza_party" element={<GetPizza/>}/>
            <Route path="/you_answered_the_questions_wrong" element={<WrongQuestions/>}/>
            <Route path="/dog" element={<Dog/>}/>
            <Route path="/cat" element={<Cat/>}/>
						<Route path="/blog/*" element={<BlogViewer/>}/>
						<Route path="/blog" element={<Blog/>}/>
						<Route path="/git" element={<MyCode/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
}
