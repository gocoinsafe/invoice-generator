import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.css"
import App from "./App"
import InvoicePage from "./pages/InvoicePage"
import { HOMEBASE } from "./config"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={HOMEBASE}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/invoice" element={<InvoicePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
