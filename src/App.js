import logo from './logo.svg';
import './App.css';
import Signup from './components/signup';
import Login from './components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
