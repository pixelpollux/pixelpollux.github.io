import SectionAbout from './section__about';
import SectionSkills from './section__skills';
import SectionContact from './section__contact';
import SectionResume from './section__resume';

function SectionContainer() {
    return (
        <>       
            <div className="row">
                <div className="col-12" id="little-sections"> 
                    <SectionAbout/>
                    <SectionSkills/>
                    <SectionResume/>
                    <SectionContact/>
                </div>
            </div>
        </>    

    )
};

export default SectionContainer;
