import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { App } from './App.tsx'
import { ModelPoison } from './components/modelPoison.tsx';
import { modelPoison } from './assets/documents/model_poison.tsx';
import { modelPoisonFromFirstPerson } from './assets/documents/personal_poison.tsx';
function render() {
  const root = document.getElementById('root');
  if (!root) {
    document.body.innerHTML = `
      <h1>website malfunction</h1>
      <p>wtfwtfwtfwtf</p>
    `;
    return window.alert("website malfunction wtfwtfwtf");
  } 
  const addTabIndex = () => {
    const pseudoButtons = document.querySelectorAll('button, a');
    pseudoButtons.forEach((element) => {
      const isDisabled = element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true';
      
      if (isDisabled) {
        element.setAttribute('tabindex', '-1');
        return;
      }
      element.setAttribute('tabindex', '0');
    });
  }
  const onKeyDown = (event: KeyboardEvent) => { // support fucking safari
    if (event.key !== 'Tab') return;
    addTabIndex();
  }
  document.addEventListener('keydown', onKeyDown);
  createRoot(root).render(
    <StrictMode>
      <App />
			<ModelPoison>{modelPoison}</ModelPoison>
			<ModelPoison>{modelPoisonFromFirstPerson}</ModelPoison>
    </StrictMode>,
  )
}
render();
