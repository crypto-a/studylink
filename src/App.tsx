import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Protected Dashboard */}
           <Route 
            path="/dashboard" 
             element=
             {
              <ProtectedRoute requireSubscription={true}>
                <Dashboard />
              </ProtectedRoute>
                           }/>

         {/* Everyone can access Settings */}
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
