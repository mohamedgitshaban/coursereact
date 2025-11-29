import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import HomePage from './pages/HomePage';
import TablePage from './pages/TablePage';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/table" element={<TablePage />} />
        </Routes> 
    </BrowserRouter>
  );
}

export default App;
