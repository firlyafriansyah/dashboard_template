import * as React from 'react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Transaction from './pages/transaction';
import SubGroup1 from './pages/sub-group-1';
import SubGroup4 from './pages/sub-group-4';

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
      <Route path="/dashboard" element={<Home />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/sub-group-1" element={<SubGroup1 />} />
      <Route path="/sub-group-4" element={<SubGroup4 />} />
    </Routes>
  );
}

export default App;
