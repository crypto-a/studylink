import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import JobDetail from "./pages/JobDetail";
import HousingDetail from "./pages/HousingDetail";
import Services from "./pages/Services";
// import Contact from "./pages/Contact";  // New Contact page

/* Dashboard Layout & Pages */
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardVisa from "./pages/dashboard/DashboardVisa";
import VisaDetail from "./pages/dashboard/VisaDetail";  // Visa detail page
import DashboardJobs from "./pages/dashboard/DashboardJobs";
import DashboardHousing from "./pages/dashboard/DashboardHousing";
import DashboardForum from "./pages/dashboard/DashboardForum";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/job/:id"
                element={
                  <ProtectedRoute>
                    <JobDetail />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/housing/:id"
                element={
                  <ProtectedRoute>
                    <HousingDetail />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/services"
                element={
                  <ProtectedRoute>
                    <Services />
                  </ProtectedRoute>
                }
              />
              {/* <Route path="/contact" element={<Contact />} /> New Contact route */}
              
              {/* New Visa Detail Route */}
              {/* <Route path="/visa-info/:id" element={<VisaDetail />} /> */}

              {/* Dashboard NESTED ROUTES */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardLayout />
                  </ProtectedRoute>
                }
              >
                {/* Default dashboard route */}
                <Route index element={<DashboardHome />} />
                {/* Sub-routes */}
                <Route path="visa-info" element={<DashboardVisa />} />
                <Route path="visa-info/:id" element={<VisaDetail />} />
                <Route path="job-board" element={<DashboardJobs />} />
                <Route path="housing" element={<DashboardHousing />} />
                <Route path="forum" element={<DashboardForum />} />
              </Route>

              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
