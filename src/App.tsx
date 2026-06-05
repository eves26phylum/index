import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import { MenuBar } from './Header';
import { NotFound } from './NotFound';

export function App() {
  return <>
    <BrowserRouter>
      <MenuBar/>
      <nav>

      </nav>
      <main>
          <Routes>
            <Route path=""/>
            <Route path=""/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </main>
    </BrowserRouter>
  </>;
}