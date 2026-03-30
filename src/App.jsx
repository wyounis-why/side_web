import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import DeleteAccount from './pages/DeleteAccount'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage setCurrentPage={setCurrentPage} />
      case 'privacy':
        return <Privacy setCurrentPage={setCurrentPage} />
      case 'terms':
        return <Terms setCurrentPage={setCurrentPage} />
      case 'delete':
        return <DeleteAccount setCurrentPage={setCurrentPage} />
      default:
        return <LandingPage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="app">
      {renderPage()}
    </div>
  )
}

export default App

