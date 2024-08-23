import React, {useState} from 'react';
import Resume from './resume';

export default function SectionResume() {
    const [isVisible, setIsVisible] = useState(false);

    function handleButton(){
        setIsVisible(!isVisible);
    };

    return (    
        <div className="section-group" id="resume-link">
            <div className="section-links">
                resume section
            </div>
            <section id="resume-section">
                <div 
                    style={{ marginBottom: isVisible ? '': "0" }}
                    className={`title-group title-group__resume ${isVisible ? 'visible' : 'not'}`}>
                    <h2>Résumé</h2>
                    {/* <p>
                        Here i'll put my resume shortly.
                    </p>  */}
                    <button onClick={handleButton} className="btn button_slide slide_right">
                        {isVisible ? 'Hide résumé' : 'Show résumé'}
                    </button>
                    <button style={{display: "none"}} type="button" target="_blank" className="btn button_slide slide_right">
                        <a href="">Download pdf</a>
                    </button>
                </div>
                {isVisible &&
                    <Resume/>
                }
            </section>
        </div>
    );
};
