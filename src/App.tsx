import { BrowserRouter } from 'react-router';
import './App.css';
import { MenuBar } from './components/Header';
import { AllRoutes } from './Routes';

export function App() {
  return <>
    <BrowserRouter>
      <MenuBar/>
      <main>
        <AllRoutes/>
      </main>
      {/* <footer>
      </footer> */}
    </BrowserRouter>
  </>;
}