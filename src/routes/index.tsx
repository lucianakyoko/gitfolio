import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { DocumentationPage } from '../pages/DocumentationPage'
import { CreativeTemplate } from '../components/templates/CreativeTemplate'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/docs' element={<DocumentationPage />} />
      <Route path='/user-name' element={<CreativeTemplate />} />
    </Routes>
  )
}