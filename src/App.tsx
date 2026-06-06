import { BrowserRouter } from 'react-router';
import './App.css';
import { MenuBar } from './components/Header';
import { AllRoutes } from './Routes';
import { useState } from 'react';
export function StartScreen({setHasLoaded}: {setHasLoaded: React.Dispatch<React.SetStateAction<boolean>>}) {
  setTimeout(()=> {setHasLoaded(true)}, 1000);
  return <></>;
}
export function App() {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  return <>
    { hasLoaded ?
    <BrowserRouter>
      <MenuBar/>
      <main>
        <AllRoutes/>
      </main>
      {/* <footer>
      </footer> */}
    </BrowserRouter>
    : <StartScreen setHasLoaded={setHasLoaded}/>}
  </>;
}