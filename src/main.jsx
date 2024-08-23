import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/css/styles.css'
import 'bootstrap/dist/css/bootstrap.css';


import Navbar from './components/page-structure/navbar';
import HiHeader from './components/page-structure/hi-header';
import SectionHeadshot from './components/page-structure/sec-headshot';
import SectionContainer from './components/little-sections/section__container';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <div className="container">
        <HiHeader/>
        {/* left side */}            
        <SectionHeadshot/>
        {/* right side */}
        <div className="col-12 right-side ">
          {/* <Navbar/> */}
          <SectionContainer/>
        </div>  
      </div>
    </div>


  </StrictMode>,
)
