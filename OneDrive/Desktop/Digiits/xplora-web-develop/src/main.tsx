import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErroPage from './ErroPage.tsx';
import Homepage from './LandingPage.tsx';
import Badge from './components/homepage/Bagde.tsx';
import Login from './features/authentication/components/Login.tsx';
import ForgetPassword from './features/authentication/components/ForgetPassword.tsx';
import Verification from './features/authentication/components/verifeCode.tsx';
import NewPassword from './features/authentication/components/NewPassword .tsx';
// import SignUp from './features/authentication/components/SignUp.tsx';
import Home from './components/homepage/Home.tsx';
import LandingPage from './LandingPage.tsx';
import EventsPage from './EventsPage.tsx';
// import Profile from './features/authentication/Signupcomponent/Profile.tsx';
// import CompleteProfile from './features/authentication/Signupcomponent/compleProfile.tsx';
// import CitySelect from './features/authentication/Signupcomponent/CitySelect.tsx';
// import SignUpVerification from './features/authentication/Signupcomponent/verifieCode.tsx';

import SignUp from './features/authentication/Signupcomponent/SignUp.tsx';
import Profile from './features/authentication/Signupcomponent/Profile.tsx';
import CompleteProfile from './features/authentication/Signupcomponent/compleProfile.tsx';
import CitySelect from './features/authentication/Signupcomponent/CitySelect.tsx';
import SignUpVerification from './features/authentication/Signupcomponent/verifieCode.tsx';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErroPage />,
  },

  {
    path:'/login',
    element: <Login/>
  },

  {
    path:'/forgot-password',
    element: <ForgetPassword/>
  }, 
  {
    path: '/verify',
    element: <Verification/>
  }, 
  {
    path: '/create-new-password',
    element: <NewPassword/>
  },
   {
    path: '/signup',
    element: <SignUp />,
    errorElement: <ErroPage />,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <ErroPage />,
  },
  {
    path: '/events',
    element: <EventsPage />,
    errorElement: <ErroPage />,
  },

  {
    path: '/profile',
    element: <Profile/>
  }, 
  {
    path: '/complete-profile',
    element: <CompleteProfile/>
  }, 
  {
    path: '/city-select',
    element: <CitySelect/>
  }, 
  {
    path: '/signup-verify',
    element: <SignUpVerification/>
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <div className=''>
      <Badge />
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  </StrictMode>,
    
  
)
