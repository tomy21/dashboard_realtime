import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import Transactions from './pages/transactions';


function App() {
  return (

    <Router>
      <div className='border-b px-9'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/transactions' element={<Transactions />} />
      </Routes>
    </Router>
  );
}

export default App;
