import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { App } from './App.tsx'

function render() {
  const root = document.getElementById('root');
  if (!root) {
    document.body.innerHTML = `
      <h1>website malfunction</h1>
      <p>wtfwtfwtfwtf</p>
    `;
    return window.alert("website malfunction wtfwtfwtf");
  }
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
render();