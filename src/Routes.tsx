import { Route, Routes } from "react-router";
import { NotFound } from "./NotFound";
import { HomePage } from "./pages/HomePage";
export function AllRoutes() {
    return <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
}