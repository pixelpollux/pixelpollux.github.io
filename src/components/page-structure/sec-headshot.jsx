import headshot from '../../../src/assets/images/headshot.JPG' 

function SectionHeadshot() {
    return (
        <div className="sticky-top col-lg-4  d-none d-xl-block float-start">
            <img id="headshot" src={headshot} alt="headshot of me"/>
            <h1 className="smallerheading smallerheading--stroke smallerheading--shadow">i'm tara!</h1>
        </div>
    )
};

export default SectionHeadshot;
