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
                    // <div id="extended-bio" className="">
                    //     <h3>
                    //         Work Experience
                    //     </h3>
                    //     <div className='resume__job'>
                    //         <h4 className='resume__comp-name'>
                    //             Company Name
                    //         </h4>
                    //         <div className='resume__subtitle-section'>
                    //             <div className='resume__job-title'>Job Title</div>
                    //             <div className='resume__job-dates'>Dates</div>
                    //         </div>
                    //         <p className='resume__job-description'>
                    //         Cotton candy muffin bear claw bear claw fruitcake caramels tiramisu danish. Sugar plum powder gummies ice cream liquorice cookie cupcake dragée wafer. Apple pie topping jelly-o jelly-o pie carrot cake sweet.
                    //         </p>
                    //     </div>

                    // </div>
                }
            </section>
        </div>
    );
};
