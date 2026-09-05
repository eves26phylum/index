import { BrowserRouter, useLocation } from 'react-router';
import './App.css';
import { MenuBar } from './components/Header';
import { AllRoutes } from './Routes';
import { useEffect, useRef, useState } from 'react';
import { createContext } from 'react';
import { bootlog } from './assets/documents/bootlog';
import React from 'react';
import { BlinkingCursor } from './BlinkingCursor';
import { Scroller } from './components/Scroller';
import { GoHome } from './components/go_home';
import { createPortal } from 'react-dom';
import { ItemList, ListLink } from './components/sidebar';
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
  }
});
// function getLineDelay(lineIndex: number): number {
//   const roll = Math.random();
//   if (roll < 0.025) return 2 + Math.random() * 6;
//   if (roll < 0.05) return 300 + Math.random() * 600;
//   const base = 10 + Math.random() * 20;
//   const jitter = Math.random() < 0.4 ? Math.random() * 60 : 0;
//   return base + jitter;
// }
export function StartScreen({ setHasLoaded }: { setHasLoaded: React.Dispatch<React.SetStateAction<boolean>> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  
  const linesRef = useRef<string[]>(bootlog.split("\n"));
  const currentLineIndex = useRef<number>(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("turned-off");
    const lines = linesRef.current;
    const container = containerRef.current;

    const renderLoop = () => {
      if (!container) return;
      const linesPerFrame = 250; 
      let linesAddedThisFrame = 0;

      while (currentLineIndex.current < lines.length && linesAddedThisFrame < linesPerFrame) {
        const textNode = document.createTextNode(lines[currentLineIndex.current] + "\n");
        container.insertBefore(textNode, cursorRef.current);
        
        currentLineIndex.current++;
        linesAddedThisFrame++;
      }
      window.scrollTo(0, document.documentElement.scrollHeight);
      if (currentLineIndex.current < lines.length) {
        animationFrameId.current = requestAnimationFrame(renderLoop);
        return;
      }
      setTimeout(() => {
        setHasLoaded(true);
        document.documentElement.classList.remove("turned-off");
      }, 100);
    };
    setTimeout(() => {
      animationFrameId.current = requestAnimationFrame(renderLoop);
    }, 150);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [setHasLoaded]);

  return (
    <div
      ref={containerRef}
      style={{
        color: "white",
        scrollbarWidth: "none",
        overflow: "hidden",
        fontFamily: "Consoleet",
        fontSize: "8px",
        display: "flex",
        flexDirection: "column",
        whiteSpace: "pre-wrap",
      }}
    >
      <span ref={cursorRef}><BlinkingCursor /></span>
    </div>
  );
}

function GoHomePortalHost() { // non-idiomatic fix for my really bad code, it smells in here and this is entirely client-sided so i am sad
  const location = useLocation();
  const [place, setPlace] = useState<Element | null>(null);
  const portalContainerRef = useRef<null | Element>(null);
  useEffect(() => {
    const root = document.querySelector(".maincontent") || document.querySelector(".blog");
    if (!root) {
      console.log("No root, this is an error.");
      setPlace(null);
      return () => {};
    }
    const element = document.createElement("div");
    portalContainerRef.current = element;
    root.insertBefore(element, root.firstChild);
    setPlace(element);
    return () => {
      root.removeChild(element);
    };
  }, [location.pathname]);
  return createPortal(<GoHome/>, place || document.body);
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
  useEffect(() => {
    if (localStorage.getItem('dark_mode') === "true") document.body.classList.add("dark_mode");
  }, [])
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
    {/* { hasLoaded ? */}
    <BrowserRouter>
			{/* <NavLink aria-label="Navigate to home" className="banner" to="/">{"site home, ".repeat(50)}</NavLink> */}
      <Scroller/>
      {/* <GoHomePortalHost/> */}
			<div className="mainContent presentation">
				<table className='maincontentstuff'>
				<tbody>
					<tr>
						<td>
						<div className="left-column">
							<ItemList header_name={"Links!"}>
								<ul>
								<ListLink to="/"><img src="/icons/home.png"/>Home</ListLink>
								<ListLink to="/blog"><img src="/icons/blogs.png"/>Read my blogs</ListLink>
								<ListLink to="/log"><img src="/icons/logs.png"/>Read my logs</ListLink>
								<ListLink to="/futon_gpt"><img src="/icons/announcement.png"/>FutonGPT</ListLink>
								</ul>
							</ItemList>
						</div>
						</td>
						<td className='manie default'>
							<AllRoutes/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    </BrowserRouter>
    {/* : <StartScreen setHasLoaded={setHasLoaded}/>} */}
  </ModalContext.Provider>;
}
