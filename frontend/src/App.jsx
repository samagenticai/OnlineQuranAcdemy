import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import BecomeTeacherPage from './pages/BecomeTeacherPage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="bg-[#010604] min-h-screen text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/become-teacher" element={<BecomeTeacherPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  )
}

export default App
