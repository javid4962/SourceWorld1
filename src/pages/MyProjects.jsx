import Header from "../Header";
import Footer from "../Footer";

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
// const none = "/img_not_found.jpg";

export default function MyProjects() {
    return (
        <>
            <Header />
            <hr className="m-0 p-0" />
            <div className="bg-black">

                <h3 className="p-3 text-white"># My Projects</h3>
                <div className="row container-fluid m-0 g-3 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 ">

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
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Wordpress</b>.</p></div>
                                {/* <p className="mb-auto">content about</p> */}
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
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">Python, Machine Learning & Deep Learning</b>.</p></div>
                                {/* <p className="mb-auto">content about</p> */}
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
                                    <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">HTML, CSS & JavaScript</b>.</p></div>
                                {/* <p className="mb-auto">content about</p> */}
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
                                {/* <p className="mb-auto">content about</p> */}
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
                                {/* <p className="mb-auto">content about</p> */}
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
                                {/* <p className="mb-auto">content about</p> */}
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
                                {/* <p className="mb-auto">content about</p> */}
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
                                {/* <p className="mb-auto">content about</p> */}
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
                                {/* <p className="mb-auto">content about</p> */}
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
                                {/* <p className="mb-auto">content about</p> */}
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
                                {/* <p className="mb-auto">content about</p> */}
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
                                {/* <p className="mb-auto">content about</p> */}
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
                                {/* <p className="mb-auto">content about</p> */}
                                <div className=" gap-2 my-4 justify-content-center">
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://learnflowweatherapp.netlify.app/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                    <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href="https://github.com/javid4962/LEARNFLOW-Weather-App" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>

    )
}