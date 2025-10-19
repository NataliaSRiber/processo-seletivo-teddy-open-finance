import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter.tsx'
import { Toaster } from 'sonner';
import SelectedClientsProvider from './context/SelectedClientsProvider.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SelectedClientsProvider>
      <BrowserRouter>
        <AppRouter/>
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </SelectedClientsProvider>
  </StrictMode>,
)
