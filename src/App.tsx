import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import './App.css';

export function App() {
  return <>
    <header>
      <div className="header">
        <p>greatfuton</p>
      </div>
    </header>
    <nav>

    </nav>
    <main>
      <BrowserRouter>
        <Routes>
          <Route path=""/>
          <Route path=""/>
        </Routes>
      </BrowserRouter>
    </main>
  </>;
}