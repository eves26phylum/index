import { BrowserRouter } from 'react-router';
import './App.css';
import { MenuBar } from './components/Header';
import { AllRoutes } from './Routes';
import { useEffect, useState } from 'react';
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
  useEffect(() => {
    const id = setTimeout(()=> {setHasLoaded(true)}, 1000);
    return () => {
      clearTimeout(id);
    };
  });
  return <></>;
}
export type modal = {uuid: string, modal: React.ReactElement, zindex: number};
export function App() {
  const [modals, setModals] = useState<modal[]>([]);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const destroyModalByUUID = (uuid: string) => {
    console.log(uuid);
    setModals(modals => modals.filter(modal => modal.uuid !== uuid));
  }
  const addModal = (modal: React.ReactElement, uuidProvider?: uuid) => {
    const uuid = uuidProvider || crypto.randomUUID();
    const highestZIndex = modals.reduce((max, m) => Math.max(max, m.zindex), 9999);
    setModals([...modals, {uuid: uuid, modal: modal, zindex: highestZIndex + 1}]);
    return uuid;
  }
  const bringToFront = (uuid: string) => {
    setModals(prevModals => {
      const highestZIndex = prevModals.reduce((max, m) => Math.max(max, m.zindex), 9999);
      return prevModals.map(modal => 
        modal.uuid === uuid ? { ...modal, zindex: highestZIndex + 1 } : modal
      );
    });
  }
  return <ModalContext.Provider value={{
    destroyModalByUUID: destroyModalByUUID,
    addModal: addModal
  }}>
    {modals.map((modal: modal, index: number) => {
        return <React.Fragment key={modal.uuid}>
          <div style={{
            zIndex: modal.zindex
          }} onMouseDown={() => {
            bringToFront(modal.uuid);
          }}>
            {modal.modal}
          </div>
          </React.Fragment>;
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