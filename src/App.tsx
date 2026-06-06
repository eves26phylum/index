import { BrowserRouter } from 'react-router';
import './App.css';
import { MenuBar } from './components/Header';
import { AllRoutes } from './Routes';
import { useState } from 'react';
import { createContext } from 'react';
import React from 'react';

export type uuid = ReturnType<Crypto["randomUUID"]>;
export type ModalContextType = {
  destroyModalByUUID: (uuid: uuid) => void,
  addModal: (modal: React.ReactElement, uuid?: uuid) => uuid
}
export const ModalContext = createContext<ModalContextType>({
  destroyModalByUUID: () => {
    const error = "Critical Error: destroyModalByUUID called before definition";
    window.alert(error);
    throw new Error(error);
  },
  addModal: () => {
    const error = "Critical Error: addModal called before definition"; 
    window.alert(error);
    throw new Error(error);
    // return `What-What-What-What-What`;
  }
});
export function StartScreen({setHasLoaded}: {setHasLoaded: React.Dispatch<React.SetStateAction<boolean>>}) {
  setTimeout(()=> {setHasLoaded(true)}, 1000);
  return <></>;
}
export type modal = {uuid: string, modal: React.ReactElement};
export function App() {
  const [modals, setModals] = useState<modal[]>([]);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const destroyModalByUUID = (uuid: string) => {
    setModals(modals => modals.filter(modal => modal.uuid !== uuid));
  }
  const addModal = (modal: React.ReactElement, uuidProvider?: uuid) => {
    const uuid = uuidProvider || crypto.randomUUID();
    setModals([...modals, {uuid: uuid, modal: modal}]);
    return uuid;
  }
  return <ModalContext.Provider value={{
    destroyModalByUUID: destroyModalByUUID,
    addModal: addModal
  }}>
    {modals.map((modal: modal, index: number) => {
        return <React.Fragment key={modal.uuid}>{modal.modal}</React.Fragment>;
    })}
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
  </ModalContext.Provider>;
}