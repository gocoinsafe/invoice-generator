import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Routes, Route, HashRouter } from "react-router-dom"

import "./index.css"
import App from "./App"
import InvoicePage from "./pages/InvoicePage"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/invoice" element={<InvoicePage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)
