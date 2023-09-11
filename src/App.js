import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import StackOverflow from './components/StackOverflow';
import Question from './components/Add-Question/Question';
import ViewQuestion from './components/ViewQuestion';
import Login from "./Page/Login";
import Register from './Page/Register';
import ResetPassword from './Page/ResetPassword';
import ForgotPassword from './Page/ForgotPassword';
import Error from './Page/Error';
import React,{ useState} from 'react';

function App() {

  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <Router>
      <Header onSearch={setSearchValue} value={searchValue} /> 

        <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/forgot-password" element={<ForgotPassword />} />
           <Route path="/register" element={<Register />} />
           <Route path="/reset-password" element={<ResetPassword />} /> 
           <Route path="/add-question" element={<Question />} />
           <Route path="/question" element={<ViewQuestion />} />
           <Route path="/stackoverflow" element={<StackOverflow searchValue ={searchValue} />} />
           <Route path="/error" element={<Error />} />
           <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
