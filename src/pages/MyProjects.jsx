import Header from "../Header";
import Footer from "../Footer";
import Profiles from "./Profiles"
import '../App.css';

// Project Images
const bg1 = "/PremiumShoesBrand-SmartInternz.png";
const bg1_1 = "/PremiumShoesBrand2.png";
const bg2 = "/BoneTumorPrediction.png";
const bg3 = "/NetflixClone.png";
const bg3_1 = "/NetflixClone2.png";
const bg4 = "/Portfolio.png";
const bg5 = "/SimpleLandingPage.png";
const bg5_1 = "/SimpleLandingPage2.png";
const bg6 = "/todo-app.png";
const bg7 = "/ProfileCard.png";
const bg8 = "/RestaurantLandingPage.png";
const bg8_1 = "/RestaurantLandingPage2.png";
const bg9 = "/FitnessTracker.png";
const bg10 = "/ShoesShop.png";
const bg10_1 = "/ShoesShop1.png";
const bg10_2 = "/ShoesShop2.png";
const bg10_3 = "/ShoesShop3.png";
const bg11 = "/ClothsShop.jpg";
const bg11_1 = "/ClothsShop1.jpg";
const bg11_2 = "/ClothsShop2.jpg";
const bg12 = "/OnlineLearningPlatform.png";
const bg12_1 = "/OnlineLearningPlatform1.png";
const bg12_2 = "/OnlineLearningPlatform2.png";
const bg12_3 = "/OnlineLearningPlatform3.png";
const bg13 = "/WeatherApp.png";
const bg13_1 = "/WeatherApp1.png";
const bg13_2 = "/WeatherApp2.png";
const bg13_3 = "/WeatherApp3.png";
const bg13_4 = "/WeatherApp4.png";
const none = "/img_not_found.jpg";

// Internship Certificate Images
const ic1 = "/Certificates/Internships/Salesforce.png";
const ic2 = "/Certificates/Internships/CiscoCybersecurity.png";
const ic3 = "/Certificates/Internships/CiscoJavascript.png";
const ic4 = "/Certificates/Internships/OctaNet.png";
const ic5 = "/Certificates/Internships/SmartInternz-FWD.png";
const ic6 = "/Certificates/Internships/LearnFlow.png";
const ic7 = "/Certificates/Internships/SmartInternz-WP.png";

// Course Completion Certificate Images
const cc1 = "/Certificates/Courses/NPTEL-ESSP.png";
const cc2 = "/Certificates/Courses/CodeTantra-C.png";
const cc3 = "/Certificates/Courses/CodeTantra-python.png";
// const cc4 = "/Certificates/Courses/NPTEL-ESSP.png";
const cc5 = "/Certificates/Courses/tcsion-CS.png";
const cc6 = "/Certificates/Courses/tcsion-RWCL.png";
const cc7 = "/Certificates/Courses/NPTEL-IML.png";
const cc8 = "/Certificates/Courses/NPTEL-OSF.png";
const cc9 = "/Certificates/Courses/LinkedIn-JavaScript.png";
const cc10 = "/Certificates/Courses/LinkedIn-HTML.png";
const cc11 = "/Certificates/Courses/LinkedIn-ECMAScript.png";
const cc12 = "/Certificates/Courses/LinkedIn-Reactjs.png";
const cc13 = "/Certificates/Courses/ExcelR-Python&SQL.png";
const cc14 = "/Certificates/Courses/ExcelR-Java.png";

// other Certificate Images
const oc1 = "/Certificates/Others/Microsoft-Azure.png"
const oc2 = "/Certificates/Others/Hackerrank-CSS.png"

export default function MyProjects() {
    return (
        <>
            <Header />
            <hr className="m-0 p-0" />
            <div className="bg-black">

                {/* Aside navigation bullets */}
                <div className="position-sticky z-2 d-inline-block" style={{ top: '15%' }}>
                    <nav className="navbar-nav ms-auto mb-1 mb-lg-0 d-flex gap-0  " >
                        <li className="nav-item  side-link" style={{ width: '45%' }}>
                            <a className="nav-link text-secondary px-2 py-1 text-center overflow-hidden bg-dark border border-black" href='#Projects' style={{  textOverflow: 'ellipsis' }}>Projects</a>
                        </li>
                        <li className="nav-item side-link" style={{ width: '45%' }}>
                            <a className="nav-link text-secondary px-2 py-1 text-center overflow-hidden bg-dark border border-black" href='#Certificates' style={{  textOverflow: 'ellipsis' }}>Certificates</a>
                        </li>
                        <li className="nav-item side-link" style={{ width: '45%' }}>
                            <a className="nav-link text-secondary px-2 py-1 text-center overflow-hidden bg-dark border border-black" href='#Profiles' style={{  textOverflow: 'ellipsis' }}>Profiles</a>
                        </li>


                    </nav>
                </div>

                {/* Projects section */}
                <h3 className="p-3 text-white" id="Projects"># My Projects</h3>
                <div className="row container-fluid m-0 g-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3" >

                    {/* PremiumShoesBrand-wordpress */}
                    <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <div className="d-flex overflow-auto">
                                <img src={bg1} alt="" className="d-sm-block d-md-block p-2" loading="lazy" style={{ height: "300px" }} />
                                <img src={bg1_1} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                            </div>
                            <div className="col p-4 d-flex flex-column overflow-auto">
                                <h3 className="mb-0"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Premium Shoes Brand</a></h3>
                                <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p>
                                </div>

                                <div className=" gap-2 my-4 justify-content-center">
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BoneTumorPrediction-Python */}
                    <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <img src={bg2} alt="" className="d-sm-block d-md-block p-2 img-fluid" loading="lazy" style={{ height: "300px" }} />
                            <div className="col p-4 d-flex flex-column overflow-auto">
                                <h3 className="mb-0"><a href="https://github.com/javid4962/Bone_Tumor_Prediction" target="blank" className="text-primary">Bone Tumor Prediction</a></h3>
                                <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Python, Machine Learning & Deep Learning</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">21/04/2024</span></p>
                                </div>

                                <div className=" gap-2 my-4 justify-content-center">
                                    {/* <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button> */}
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/Bone_Tumor_Prediction" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NetflixClone-HTML,CSS & JS */}
                    <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <div className="d-flex overflow-auto">
                                <img src={bg3} alt="" className="d-sm-block d-md-block p-2 img-fluid" loading="lazy" style={{ height: "300px" }} />
                                <img src={bg3_1} alt="" className="d-sm-block d-md-block p-2 img-fluid" loading="lazy" style={{ height: "300px" }} />
                            </div>
                            <div className="col p-4 d-flex flex-column overflow-auto">
                                <h3 className="mb-0"><a href="https://github.com/javid4962/Netfilx_Clone" target="blank" className="text-primary">Netflix Clone</a></h3>
                                <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">HTML, CSS & JavaScript</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/03/2024</span></p>    </div>

                                <div className=" gap-2 my-4 justify-content-center">
                                    {/* <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/Netflix_Clone/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button> */}
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/Netfilx_Clone" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio- React & Bootstrap */}
                    <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <img src={bg4} alt="" className="d-sm-block d-md-block p-2 img-fluid overflow-auto" loading="lazy" style={{ height: '300px' }} />
                            <div className="col p-4 d-flex flex-column overflow-auto">
                                <h3 className="mb-0"><a href="https://github.com/javid4962/Portfolio" target="blank" className="text-primary">Portfolio</a></h3>
                                <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">React.js & Bootstrap</b>.</p></div>

                                <div className=" gap-2 my-4 justify-content-center">
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962-portfolio.netlify.app/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/Portfolio" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SimpleLandingPage- HTML, CSS & JavaScript */}
                    <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <div className="d-flex overflow-auto">
                                <img src={bg5} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                                <img src={bg5_1} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" />
                            </div>
                            <div className="col p-4 d-flex flex-column overflow-auto">
                                <h3 className="mb-0"><a href="https://github.com/javid4962/SimpleLandingPage" target="blank" className="text-primary">Simple Landing Page</a></h3>
                                <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">HTML, CSS & JavaScript</b>.</p></div>

                                <div className=" gap-2 my-4 justify-content-center">
                                    {/* <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962-portfolio.netlify.app/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button> */}
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/SimpleLandingPage" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* To-do-App - HTML, CSS & JavaScript */}
                    <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <div className="d-flex overflow-auto">
                                <img src={bg6} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                            </div>
                            <div className="col p-4 d-flex flex-column overflow-auto">
                                <h3 className="mb-0"><a href="https://github.com/javid4962/To-Do-app" target="blank" className="text-primary">To-Do site</a></h3>
                                <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">HTML, CSS & JavaScript</b>.</p></div>

                                <div className=" gap-2 my-4 justify-content-center">
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962-to-do-app.netlify.app/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/To-Do-app" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ProfileCard - React.js & Bootstrap */}
                    <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <div className="d-flex overflow-auto">
                                <img src={bg7} alt="" className="d-sm-block d-md-block p-2 img-fluid w-100" loading="lazy" style={{ height: "300px" }} />
                            </div>
                            <div className="col p-4 d-flex flex-column overflow-auto">
                                <h3 className="mb-0"><a href="https://github.com/javid4962/To-Do-app" target="blank" className="text-primary">Profile Card</a></h3>
                                <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">React.js & Bootstrap</b>.</p></div>

                                <div className=" gap-2 my-4 justify-content-center">
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962-profile-card.netlify.app/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/Profile_Card" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Restaurant Landing Page - HTML & CSS */}
                    <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <div className="d-flex overflow-auto ">
                                <img src={bg8_1} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                                <img src={bg8} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                            </div>
                            <div className="col p-4 d-flex flex-column overflow-auto">
                                <h3 className="mb-0"><a href="https://github.com/javid4962/Restaurant-landingpage" target="blank" className="text-primary">Restaurant Landing Page</a></h3>
                                <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">HTML & CSS</b>.</p></div>

                                <div className=" gap-2 my-4 justify-content-center">
                                    {/* <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962-profile-card.netlify.app/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button> */}
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/Restaurant-landingpage" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FitnessTracker - HTML, CSS & JavaScript */}
                    <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <div className="d-flex overflow-auto ">
                                <img src={bg9} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                                {/* <img src={bg8} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{height:"300px"}}/> */}
                            </div>
                            <div className="col p-4 d-flex flex-column overflow-auto ">
                                <h3 className="mb-0"><a href="https://github.com/javid4962/Fitness-Tracker-App" target="blank" className="text-primary">Fitness Tracker site</a></h3>
                                <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">HTML, CSS & JavaScript</b>.</p></div>

                                <div className=" gap-2 my-4 justify-content-center">
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://learnflow-fitness-tracker.netlify.app/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/Fitness-Tracker-App" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shoes shop - HTML, CSS & JavaScript */}
                    <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <div className="d-flex overflow-auto ">
                                <img src={bg10} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                                <img src={bg10_1} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                                <img src={bg10_2} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                                <img src={bg10_3} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                                <iframe height={'300px'} src="https://www.youtube.com/embed/TS6rv5w6gg8?si=Bg44y3nsR8jryf8-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
                            </div>
                            <div className="col p-4 d-flex flex-column overflow-auto ">
                                <h3 className="mb-0"><a href="https://github.com/javid4962/Shoes-Ecommerce-Website" target="blank" className="text-primary">Shoe's Den - Ecommerce</a></h3>
                                <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">HTML, CSS & JavaScript</b>.</p></div>

                                <div className=" gap-2 my-4 justify-content-center">
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://shoesden.netlify.app/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/Shoes-Ecommerce-Website" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cloths shop - HTML, CSS & JavaScript */}
                    <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <div className="d-flex overflow-auto ">
                                <img src={bg11} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                                <img src={bg11_1} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                                <img src={bg11_2} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                            </div>
                            <div className="col p-4 d-flex flex-column overflow-auto ">
                                <h3 className="mb-0"><a href="https://github.com/javid4962/Cloths-Ecommerce-Website" target="blank" className="text-primary">Cloths Shop - Ecommerce</a></h3>
                                <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">HTML, CSS & JavaScript</b>.</p></div>

                                <div className=" gap-2 my-4 justify-content-center">
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://clothsden.netlify.app/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/Cloths-Ecommerce-Website" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Online Learning Platform - HTML, CSS & JavaScript */}
                    <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <div className="d-flex overflow-auto ">
                                <img src={bg12} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                                <img src={bg12_1} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                                <img src={bg12_2} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                                <img src={bg12_3} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                            </div>
                            <div className="col p-4 d-flex flex-column overflow-auto ">
                                <h3 className="mb-0"><a href="https://github.com/javid4962/LEARNFLOW-Online-Learning-Platform" target="blank" className="text-primary">Online Learning Platform</a></h3>
                                <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">HTML, CSS & JavaScript</b>.</p></div>

                                <div className=" gap-2 my-4 justify-content-center">
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://learnflow-onlinelearningplatform.netlify.app/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/LEARNFLOW-Online-Learning-Platform" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Weather App - HTML, CSS & JavaScript */}
                    <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <div className="d-flex overflow-auto ">
                                <img src={bg13} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                                <img src={bg13_1} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                                <img src={bg13_2} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                                <img src={bg13_3} alt="" className="d-sm-block d-md-block p-2 img-fluid " loading="lazy" style={{ height: "300px" }} />
                            </div>
                            <div className="col p-4 d-flex flex-column overflow-auto ">
                                <h3 className="mb-0"><a href="https://github.com/javid4962/LEARNFLOW-Weather-App" target="blank" className="text-primary">Weather App</a></h3>
                                <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">HTML, CSS & JavaScript</b>.</p></div>

                                <div className=" gap-2 my-4 justify-content-center">
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://learnflowweatherapp.netlify.app/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/LEARNFLOW-Weather-App" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certificates section */}
                <h3 className="p-3 text-white" id="Certificates"># My Certificates</h3>

                    {/* internship certificates */}
                <h6 className="text-center text-white text-uppercase mt-5 bg-secondary p-2">Internship Certificates</h6>
                <div className="row container-fluid m-0 g-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4" >

                    {/* Salesforce Developer VI */}
                    <div className="col">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center"><a href="https://smartinternz.com/internships/salesforce_certificates/6d4e0869a271896a65f53e281d4ba846" target="blank" className="text-light">Salesforce Developer Virtual Internship</a></span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={ic1} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* Cisco VIP in CyberSecurity */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center">CISCO Virtual Internship Program - CyberSecurity</span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={ic2} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                    {/* Cisco JavaScript Essentials */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center">CISCO JavaScript Essentials</span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={ic3} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* OctaNet WebDevelopment Internship */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center"><a href="https://certificate.givemycertificate.com/c/1496ea28-5dc1-4906-b021-033044b17462" target="blank" className="text-light">OctaNet Webdevelopment Internship</a></span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={ic4} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* SmartInternz -LTVI Frontend */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center"><a href="https://apsche.smartinternz.com/certificate/student/03fcd68e5673f08be96d2b6bb5be8261" target="blank" className="text-light">SmartInternz Virtual Internship - Frontend</a></span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={ic5} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* LearnFlow Internship */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center">LearnFlow Internship - Frontend</span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={ic6} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* SmartInternz-VI WordPress */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center"><a href="https://smartinternz.com/internships/salesforce_certificates/6d4e0869a271896a65f53e281d4ba846" target="blank" className="text-light">SmartInternz Virtual Internship - WordPress</a></span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={ic7} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>

                    {/* Course Completion Certificates */}
                <h6 className="text-center text-white text-uppercase mt-5 bg-secondary p-2">Course Completion Certificates</h6>
                <div className="row container-fluid m-0 g-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4" >

                    {/* NPTEL Enhancing soft skills and personality */}
                    <div className="col">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center">NPTEL Enhancing soft skills and personality</span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={cc1} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* C Programming - CodeTantra */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center">C Programming - CodeTantra</span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={cc2} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* Python Programming - CodeTantra */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center">Python Programming - CodeTantra</span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={cc3} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* MongoDB - CodeTantra */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center"><a href="https://certificate.givemycertificate.com/c/1496ea28-5dc1-4906-b021-033044b17462" target="blank" className="text-light">MongoDB - CodeTantra</a></span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={none} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* TCS Communication */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center"><a href="https://apsche.smartinternz.com/certificate/student/03fcd68e5673f08be96d2b6bb5be8261" target="blank" className="text-light">TCS Communication</a></span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={cc5} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* TCS Resume Writing & Cover Letter */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center">TCS Resume Writing & Cover Letter</span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={cc6} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* NPTEL Machine learning */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center"><a href="https://smartinternz.com/internships/salesforce_certificates/6d4e0869a271896a65f53e281d4ba846" target="blank" className="text-light">NPTEL Intoduction to Machine learning</a></span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={cc7} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* NPTEL Operating System Fundamentals */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center"><a href="https://smartinternz.com/internships/salesforce_certificates/6d4e0869a271896a65f53e281d4ba846" target="blank" className="text-light">NPTEL Operating System Fundamentals</a></span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={cc8} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* JavaScript Essentials */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center"><a href="https://smartinternz.com/internships/salesforce_certificates/6d4e0869a271896a65f53e281d4ba846" target="blank" className="text-light">JavaScript Essentials - LinkedIn</a></span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={cc9} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* HTML Essesntials */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center"><a href="https://smartinternz.com/internships/salesforce_certificates/6d4e0869a271896a65f53e281d4ba846" target="blank" className="text-light">HTML Essesntials - LinkedIn</a></span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={cc10} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* Learning ECMAScript */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center"><a href="https://smartinternz.com/internships/salesforce_certificates/6d4e0869a271896a65f53e281d4ba846" target="blank" className="text-light">Learning ECMAScript - LinkedIn</a></span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={cc11} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* React.js Learning */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center"><a href="https://smartinternz.com/internships/salesforce_certificates/6d4e0869a271896a65f53e281d4ba846" target="blank" className="text-light">React.js Learning - LinkedIn</a></span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={cc12} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* Python & SQL */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center"><a href="https://smartinternz.com/internships/salesforce_certificates/6d4e0869a271896a65f53e281d4ba846" target="blank" className="text-light">Python Programming and SQL - ExcelR</a></span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={cc13} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                    
                    {/* Basics of Programming in Java */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center"><a href="https://smartinternz.com/internships/salesforce_certificates/6d4e0869a271896a65f53e281d4ba846" target="blank" className="text-light">Basics of Programming in Java - ExcelR</a></span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={cc14} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>

                    {/* Other Certificates */}
                <h6 className="text-center text-white text-uppercase mt-5 bg-secondary p-2">Other Certificates</h6>
                <div className="row container-fluid m-0 g-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4" >

                    {/* Microsoft Azure Administrator Associate */}
                    <div className="col">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center">Microsoft Azure Administrator Associate</span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={oc1} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* Hackerrank CSS Basics */}
                     <div className="col ">
                        <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                            {/* project thumbnail */}
                            <details>
                                <summary>
                                    <span className="m-2 text-center">Hackerrank CSS Basics</span>
                                    <div className="d-flex overflow-auto justify-content-center">
                                        <img src={oc2} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
                                    </div>
                                </summary>

                                <div className="col p-4 d-flex flex-column overflow-auto">

                                    <div className="m-2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?
                                        {/* <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p>
                                    <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">26/04/2024</span></p> */}
                                    </div>

                                    <div className=" gap-2 my-4 justify-content-center">
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://javid4962.github.io/PremiumShoesBrand/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                        <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/PremiumShoesBrand" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                </div>
            </div>
            <Profiles />
            <Footer />
        </>

    )
}