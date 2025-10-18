import { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AppLayout from '../components/AppLayout'


const Login = lazy(() => import('../pages/Login'))
const Clients = lazy(() => import('../pages/Clients'))
const SelectedClient = lazy(() => import('../pages/SelectedClient'))

export default function AppRouter() {
  return (
    <AppLayout>
      <Suspense fallback={<div className="p-4">Carregando…</div>}>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/:id" element={<SelectedClient />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </AppLayout>
  )
}
