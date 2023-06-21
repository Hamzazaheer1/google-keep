import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import Profile from './Pages/Profile';
import Notes from './Pages/Notes';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/notes' element={<Notes />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
