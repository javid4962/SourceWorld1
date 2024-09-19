import Header from "../Header";
import Footer from "../Footer";
import Profiles from "./Profiles"
import '../App.css';

// Project Images
// const bg1 = "/PremiumShoesBrand-SmartInternz.png";
// const bg1_1 = "/PremiumShoesBrand2.png";
// const bg2 = "/BoneTumorPrediction.png";
// const bg3 = "/NetflixClone.png";
// const bg3_1 = "/NetflixClone2.png";
// const bg4 = "/Portfolio.png";
// const bg5 = "/SimpleLandingPage.png";
// const bg5_1 = "/SimpleLandingPage2.png";
// const bg6 = "/todo-app.png";
// const bg7 = "/ProfileCard.png";
// const bg8 = "/RestaurantLandingPage.png";
// const bg8_1 = "/RestaurantLandingPage2.png";
// const bg9 = "/FitnessTracker.png";
// const bg10 = "/ShoesShop.png";
// const bg10_1 = "/ShoesShop1.png";
// const bg10_2 = "/ShoesShop2.png";
// const bg10_3 = "/ShoesShop3.png";
// const bg11 = "/ClothsShop.jpg";
// const bg11_1 = "/ClothsShop1.jpg";
// const bg11_2 = "/ClothsShop2.jpg";
// const bg12 = "/OnlineLearningPlatform.png";
// const bg12_1 = "/OnlineLearningPlatform1.png";
// const bg12_2 = "/OnlineLearningPlatform2.png";
// const bg12_3 = "/OnlineLearningPlatform3.png";
// const bg13 = "/WeatherApp.png";
// const bg13_1 = "/WeatherApp1.png";
// const bg13_2 = "/WeatherApp2.png";
// const bg13_3 = "/WeatherApp3.png";
// const bg13_4 = "/WeatherApp4.png"; 
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


const NavLink = (props) => {
  return (
    <li className="nav-item side-link" style={{ width: '45%' }}>
      <a className="nav-link text-secondary px-2 py-1 text-center overflow-hidden bg-dark border border-black" href={'#' + props.link} style={{ textOverflow: 'ellipsis' }}>{props.link}</a>
    </li>
  )
}


const Navigation = () => {
  return (
    <>
      {/* Aside navigation bullets */}
      <div className="position-sticky z-2 d-inline-block" style={{ top: '15%' }}>
        <nav className="navbar-nav ms-auto mb-1 mb-lg-0 d-flex gap-0  " >
          <NavLink link="Profiles" />
          <NavLink link="Projects" />
          <NavLink link="Certificates" />
        </nav>
      </div>
    </>
  )
}

const projectData = [
  {
    // "image": ["/PremiumShoesBrand-SmartInternz.png", "/PremiumShoesBrand2.png"],
    "image": "/PremiumShoesBrand-SmartInternz.png",
    "github": "https://github.com/javid4962/PremiumShoesBrand",
    "name": "Premium Shoes Brand",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?",
    "skills": "Wordpress",
    "update": "26/04/2024",
    "link": "https://javid4962.github.io/PremiumShoesBrand/",
    "id": "PremiumShoesBrand"
  },
  {
    "image": "/BoneTumorPrediction.png",
    "github": "https://github.com/javid4962/Bone_Tumor_Prediction",
    "name": "Bone Tumor Prediction",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?",
    "skills": "Python, Machine Learning & Deep Learning",
    "update": "21/04/2024",
    "link": "https://javid4962.github.io/PremiumShoesBrand/",
    "id": "BoneTumorPrediction"
  },
  {
    "image": "/NetflixClone.png",
    "github": "https://github.com/javid4962/Netfilx_Clone",
    "name": "Netflix Clone",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?",
    "skills": "HTML, CSS & JavaScript",
    "update": "26/03/2024",
    "link": "https://github.com/javid4962/Netfilx_Clone",
    "id": "NetflixClone"
  },
  {
    "image": "/Portfolio.png",
    "github": "https://github.com/javid4962/Portfolio",
    "name": "Portfolio",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?",
    "skills": "React.js & Bootstrap",
    "update": "",
    "link": "https://github.com/javid4962/Portfolio",
    "id": "Portfolio"
  },
  {
    "image": "/SimpleLandingPage.png",
    "github": "https://github.com/javid4962/SimpleLandingPage",
    "name": "Simple Landing Page",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?",
    "skills": "HTML, CSS & JavaScript",
    "update": "",
    "link": "https://github.com/javid4962/SimpleLandingPage",
    "id": "SimpleLandingPage"
  },
  {
    "image": "/todo-app.png",
    "github": "https://github.com/javid4962/To-Do-app",
    "name": "To-Do site",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?",
    "skills": "HTML, CSS & JavaScript",
    "update": "",
    "link": "https://javid4962-to-do-app.netlify.app/",
    "id": "ToDoSite"
  },
  {
    "image": "/ProfileCard.png",
    "github": "https://github.com/javid4962/Profile_Card",
    "name": "Profile Card",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?",
    "skills": "React.js & Bootstrap",
    "update": "",
    "link": "https://javid4962-profile-card.netlify.app/",
    "id": "ProfileCard"
  },
  {
    "image": "/RestaurantLandingPage.png",
    "github": "https://github.com/javid4962/Restaurant-landingpage",
    "name": "Restaurant Landing Page",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?",
    "skills": "HTML & CSS",
    "update": "",
    "link": "https://javid4962-profile-card.netlify.app/",
    "id": "RestaurantLandingPage"
  },
  {
    "image": "/FitnessTracker.png",
    "github": "https://github.com/javid4962/Fitness-Tracker-App",
    "name": "FitnessTracker",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?",
    "skills": "HTML, CSS & JavaScript",
    "update": "",
    "link": "https://learnflow-fitness-tracker.netlify.app/",
    "id": "FitnessTracker"
  },
  {
    "image": "/ShoesShop.png",
    "github": "https://github.com/javid4962/Shoes-Ecommerce-Website",
    "name": "Shoes shop",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?",
    "skills": "HTML, CSS & JavaScript",
    "update": "",
    "link": "https://shoesden.netlify.app/",
    "id": "ShoesShop"
  },
  {
    "image": "/ClothsShop.jpg",
    "github": "https://github.com/javid4962/Cloths-Ecommerce-Website",
    "name": "Cloths shop",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?",
    "skills": "HTML, CSS & JavaScript",
    "update": "",
    "link": "https://clothsden.netlify.app/",
    "id": "ClothShop"
  },
  {
    "image": "/OnlineLearningPlatform.png",
    "github": "https://github.com/javid4962/LEARNFLOW-Online-Learning-Platform",
    "name": "Online Learning Platform",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?",
    "skills": "HTML, CSS & JavaScript",
    "update": "",
    "link": "https://learnflow-onlinelearningplatform.netlify.app/",
    "id": "OnlineLearningPlatform"
  },
  {
    "image": "/WeatherApp.png",
    "github": "https://github.com/javid4962/LEARNFLOW-Weather-App",
    "name": "Weather App",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?",
    "skills": "HTML, CSS & JavaScript",
    "update": "",
    "link": "https://learnflowweatherapp.netlify.app/",
    "id": "WeatherApp"
  },
]

// { console.log(projectData[0].image) }



const Project = ({ image, github, name, description, skills, update, link, id }) => {
  return (
    <div className="col " key={id}>
      <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
        {/* project thumbnail */}
        <div className="d-flex overflow-auto">


          <img src={image} alt="" className="d-sm-block d-md-block p-2" loading="lazy" style={{ height: "300px" }} />
          <img src={image} alt="" className="d-sm-block d-md-block p-2 " loading="lazy" style={{ height: "300px" }} />
        </div>
        <div className="col p-4 d-flex flex-column overflow-auto">
          <h3 className="mb-0"><a href={github} target="blank" className="text-primary">{name}</a></h3>
          <div className="m-2 text-secondary">{description}
            <p className="m-2 text-primary fw-bold">Skills Used : <b className="text-warning">{skills}</b>.</p>
            <p className="m-2 text-primary fw-bold">Last Updated : <span className="text-danger">{update}</span></p>
          </div>

          <div className=" gap-2 my-4 justify-content-center">
            <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href={link} target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
            <button className="btn btn-outline-light p-1 d-block w-100 m-1" type="button"><a href={github} target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
          </div>
        </div>
      </div>
    </div>
  )
}


const Projects = () => {
  return (
    <>
      <h3 className="p-3 text-white" id="Projects"># My Projects</h3>
      <div className="row container-fluid m-0 g-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3" >

        {
          projectData.map((project) => {
            return (<Project {...project} />)
          })
        }


      </div>
    </>
  )
}

const Certificates = () => {
  return (
    <>
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
    </>
  )
}

export default function MyProjects() {
  function toTop() {
    window.scrollTo({ top: 0, ScrollBehavior: 'smooth' })
  }
  return (
    <>
      <Header />
      <hr className="m-0 p-0" />
      <div className="bg-black">

        <Navigation />
        <Profiles />
        <Projects />
        <Certificates />

      </div>
      <Footer />
    </>

  )
}