import React, {useState} from 'react';

import useMediaQueries from "../imports/useMediaQueries"

export default function Navbar() {

    const {isMobile, isSmallTablet, isBigTablet, isDesktopOrLaptop, isBigScreen} = useMediaQueries();

    const [isOpen, setIsOpen] = useState(false);

    function handleButton(){
        // if (isBigTablet) {
        //     return;
        // }
        setIsOpen(!isOpen)
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light shift">
            <div className="container">
                <a className="navbar-brand" href="#">home</a>
                <button 
                    onClick={handleButton}
                        className="navbar-toggler dropdown-button navbar-toggler-right " 
                    type="button" 
                    data-toggle=""
                    data-target="">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>

                {isOpen &&
                    <div className={`navbar-collapse `} id="navbar-content">
                        <ul className="navbar-nav">
                            {/* <li className={`nav-item ${handleButton ? "on" : "off"} ${isBigTablet ? "<992" : ">992"}`} onClick={handleButton}>
                                <a className="nav-link"  data-toggle=""  href="#about-me-link">about me</a>
                            </li> */}
                            <li className="nav-item" onClick={() => isBigTablet ? console.log("is big tablet") : handleButton }>
                                <a className="nav-link" data-toggle="collapse" data-target="#navbar-collapse" href="#skills-link">skills</a>
                            </li>
                            <li className="nav-item" onClick={() => isBigTablet ? "": handleButton}>
                                <a className="nav-link" data-toggle="collapse" data-target="#navbar-collapse" href="#resume-link">résumé</a>
                            </li>
                            <li className="nav-item" onClick={() => isBigTablet ? "": handleButton}>
                                <a className="nav-link" data-toggle="collapse" data-target="#navbar-collapse" href="#contact-link">contact me</a>
                            </li>
                        </ul>
                    </div>
                }
                {/* {isOpen &&
                    <div className={`navbar-collapse ${handleButton ? " " : " "}`} id="navbar-content">
                        <ul className="navbar-nav">
                            <li className={`nav-item ${handleButton ? "on" : "off"} ${isTabletOrMobile ? "<992" : ">992"}`} onClick={handleButton}>
                                <a className="nav-link"  data-toggle=""  href="#about-me-link">about me</a>
                            </li>
                            <li className="nav-item" onClick={() => isTabletOrMobile ? console.log("is tablet") : handleButton }>
                                <a className="nav-link" data-toggle="collapse" data-target="#navbar-collapse" href="#skills-link">skills</a>
                            </li>
                            <li className="nav-item" onClick={() => isTabletOrMobile ? "": handleButton}>
                                <a className="nav-link" data-toggle="collapse" data-target="#navbar-collapse" href="#resume-link">résumé</a>
                            </li> */}
                            {/* <li className="nav-item" onClick={() => isTabletOrMobile ? "": this.handleButton}>
                                <a className="nav-link" data-toggle="collapse" data-target="#navbar-collapse" href="#certifications-link">certifications</a>
                            </li> */}
                            {/* <li className="nav-item" onClick={() => isTabletOrMobile ? "": handleButton}>
                                <a className="nav-link" data-toggle="collapse" data-target="#navbar-collapse" href="#contact-link">contact me</a>
                            </li>
                        </ul>
                    </div>
                } */}
            </div>
        </nav>  
    );
}
    // <div className="Navbar">
    //     <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         >
    //         Learn React
    //         </a>
    //     </header
    // </div>


// export default Navbar;