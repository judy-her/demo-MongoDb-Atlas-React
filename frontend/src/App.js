import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import MainNavigation from './components/Navigation/MainNavigation';

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main className="main-content">
        <Routes>
          <Route from="/" element={<Navigate to="/auth" />} />
          <Route path="/auth" element={<AuthPage />} />

          <Route path="/events" element={<EventsPage to="/auth" />} />
          <Route path="/bookings" element={<BookingsPage to="/auth" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
