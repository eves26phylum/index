import { Navigate, Route, Routes } from "react-router";
import { NotFound } from "./NotFound";
import { GPT } from "./pages/Eves26PhylumGPT";
import { HomePage } from "./pages/HomePage";
import { WrongQuestions } from "./pages/WrongQuestions";
import { Cat, Dog } from "./pages/Dog";
import { GetPizza } from "./pages/DeliverPizza";
import { Blog } from "./pages/Blog";
import { BlogViewer } from "./pages/BlogViewer";

export function AllRoutes() {
    return <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/futon_gpt" element={<GPT/>}/>
            <Route path="/pizza_party" element={<GetPizza/>}/>
            <Route path="/you_answered_the_questions_wrong" element={<WrongQuestions/>}/>
            <Route path="/dog" element={<Dog/>}/>
            <Route path="/cat" element={<Cat/>}/>
						<Route path="/blog/*" element={<BlogViewer/>}/>
						<Route path="/log/*" element={<BlogViewer is_log={true}/>}/>
						<Route path="/blog" element={<Blog/>}/>
						<Route path="/log" element={<Blog is_log={true}/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
}
