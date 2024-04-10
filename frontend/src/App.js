import './App.css';
import CreateProfile from './Components/CreateProfile';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ProfileOptions from './Components/ProfileOptions';
import SignUpPage from './Components/SignUpPage';
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage/>} />
        <Route path="/create-profile" element={<CreateProfile/>} />
        <Route path='/profile-type' element={<ProfileOptions/>} />
        <Route path='/user-profile' element={<UserProfile/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
