import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { DocumentationPage } from '../pages/DocumentationPage'
import { CyberpunkTemplate } from '../components/templates/CyberpunkTemplate'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/docs' element={<DocumentationPage />} />
      <Route path='/user-name' element={<CyberpunkTemplate />} />
    </Routes>
  )
}