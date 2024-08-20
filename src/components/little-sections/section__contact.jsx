function SectionContact() {
    return (
        <div className="section-group" id="contact-link">
            <div className="section-links">
                contact section
            </div>
            
            <section id="contact-me">
                <div className='title-group title-group__resume'>
                    <h2>Contact me!</h2>
                </div>
                <div id="socials" >
                    
                    <div id="iconbox" className="flex-container d-none d-lg-block">
                        <a href="https://github.com/pixelpollux">
                            <i className="flex-item fa fa-github fa-4x icon-3d"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/tarajdunmore/">
                            <i className="flex-item fa fa-linkedin fa-4x icon-3d"></i>
                        </a>
                        <a href="mailto:me@taradunmore.com">
                            <i className="flex-item far fa-envelope-open fa-4x icon-3d"></i>
                        </a>
                    </div>

                    <div className="d-block d-lg-none">
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/tarajdunmore/" target="_blank">
                                    <button className="btn button_slide slide_right">
                                        <i className="fab fa-linkedin"></i> LinkedIn
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/pixelpollux" target="_blank">
                                    <button className="btn button_slide slide_right">
                                        <i className="fab fa-github"></i> GitHub
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:me@taradunmore.com" target="_blank">
                                    <button className="btn button_slide slide_right">
                                        <i className="far fa-envelope"></i> Email
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    )
};

export default SectionContact;
