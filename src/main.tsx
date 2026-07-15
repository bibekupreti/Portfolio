import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import "./styles/design-system/colors.css";
import "./styles/design-system/typography.css";
import "./styles/design-system/spacing.css";
import "./styles/design-system/radius.css";
import "./styles/design-system/shadows.css";
import "./styles/design-system/transitions.css";
import "./styles/design-system/layout.css";
import "./styles/design-system/globals.css";

import "./styles/components/buttons.css"
import "./styles/components/typography.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
