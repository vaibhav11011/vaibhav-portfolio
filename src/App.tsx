import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import MainPage from './components/sections/MainPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#080B12] text-[#F4F7FC] selection:bg-blue-500/30 selection:text-white flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}
