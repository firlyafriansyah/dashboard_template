import * as React from 'react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Transaction from './pages/transaction';
import SubGroup1 from './pages/sub-group-1';
import SubGroup4 from './pages/sub-group-4';
import ResetPassword from './pages/reset-password';
import Notification from './pages/notification';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dashboard');
    }
  }, [location.pathname, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/sub-group-1" element={<SubGroup1 />} />
      <Route path="/sub-group-4" element={<SubGroup4 />} />
      <Route path="/notification" element={<Notification />} />
    </Routes>
  );
}

export default App;
