import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { DocumentationPage } from '../pages/DocumentationPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/docs' element={<DocumentationPage />} />
    </Routes>
  )
}