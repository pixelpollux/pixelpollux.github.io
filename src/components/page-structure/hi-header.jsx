import headshot from '../../../src/assets/images/headshot.JPG';

function HiHeader() {
    return (
        <div className="hi-header">

            <h1 className="heading heading--stroke heading--shadow">hi!</h1>
            <div className="d-block d-xl-none">
                <img className="d-block col-lg-4 col-12" id="smallerheadshot" src={headshot} alt="headshot of me"/>
                <h2 className="d-block d-xl-none tinyheading ">i'm tara!</h2>
            </div>

            <div className="d-none d-xl-block arrows"></div>
        </div>
    )
};

export default HiHeader;
