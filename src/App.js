
import './App.css';

//FontAweSome
import {} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import {  } from '@heroicons/react/24/solid';
//
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Routes/ Pages
import Main from './Components/Main/Main';
import About from './Components/About-Us/About';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Services from './Components/Services/Services';
import Gallery from './Components/Gallery/Gallery';
import Shop from './Components/Shop/Shop';
import Account from './Components/Account/Account';
import Contact from './Components/Contact-Us/Contact';
import Location from './Components/Location/Location';
import Estimation from './Components/Estimation/Estimation';
import SingleService from './Components/SingleService/SingleService';
import PrivacyPolicy from './Components/Privacy-Policy/PrivacyPolicy';
import TermsConditions from './Components/TermsConditions/TermsConditions';
import OurTeam from './Components/Our-Team/OurTeam';
import OurBlogs from './Components/Our-Blogs/OurBlogs';
import Branches from './Components/Branches/Branches';
import Career from './Components/Career/Career';
import Training from './Components/Training/Training';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: 'about', element: <About></About>}, 
        { path: 'booking', element: <Booking></Booking>},
        { path: 'services', element: <Services></Services>, 
          loader: async() =>{
            return fetch('services.json')
          } },
        {path: 'services/:servicesslug',
         element: <SingleService></SingleService>,
        loader: async(params) =>{
          return fetch(`service.json/${params.serviceslug}`)
        }},  
        { path: 'gallery', element: <Gallery></Gallery>},
        { path: 'shop', element: <Shop></Shop>},
        { path: 'account', element: <Account></Account>},
        { path: 'contact', element: <Contact></Contact>},
        { path: 'location', element: <Location></Location>},
        { path: 'estimation', element: <Estimation></Estimation>},
        { path: 'booking', element: <Booking></Booking>},
        { path: 'privacy-policy', element: <PrivacyPolicy></PrivacyPolicy>},
        { path: 'terms-conditions', element: <TermsConditions></TermsConditions>},
        { path: 'our-team', element: <OurTeam></OurTeam>},
        { path: 'our-blogs', element: <OurBlogs></OurBlogs>},
        { path: 'branches', element: <Branches></Branches>},
        { path: 'career' , element: <Career></Career>},
        { path: 'training' , element: <Training></Training>}
      ]
    }
  
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
