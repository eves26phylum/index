import { BrowserRouter } from 'react-router';
import './App.css';
import { MenuBar } from './Header';
import { AllRoutes } from './Routes';

export function App() {
  return <>
    <BrowserRouter>
      <MenuBar/>
      <nav>

      </nav>
      <main>
        <AllRoutes/>
      </main>
    </BrowserRouter>
  </>;
}