import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import MakePrivateRoute from './components/Routes/PrivateRoute';
import ForgotPassword from './pages/Auth/ForgotPassword';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/dashboard' element={<MakePrivateRoute/>}>
      <Route path='' element={<Dashboard/>}/>
        </Route>
      
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/forgot-pwd' element={<ForgotPassword />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Policy' element={<Policy/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
      
    </>
  );
}

export default App;
