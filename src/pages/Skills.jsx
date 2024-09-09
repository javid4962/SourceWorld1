import Header from "../Header";
import Footer from "../Footer";
import '../App.css';


const skillData = [
    {
        "thumbnail": "/thumbnail0.jpg",
        "name": "Namaste JavaScript",
        "channelLink": "https://www.youtube.com/@akshaymarch7",
        "channelName": "@akshaymarch7",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni voluptates sit libero saepe, quasi fuga aspernatur commodi tempore, voluptatem, tenetur quisquam quo atque quae. Tempora asperiores veniam reiciendis quam ut.",
        "link": "https://youtube.com/playlist?list=PLxnjbfm5MCHFbRlyVCAqpJFdIzPN_IPID&si=M36jz99neXVrLKLu",
        "github": ""
    },
    {
        "thumbnail": "/thumbnail1.jpg",
        "name": "Sigma WebDevelopment Express",
        "channelLink": "https://www.youtube.com/@CodeWithHarry",
        "channelName": "@CodeWithHarry",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni voluptates sit libero saepe, quasi fuga aspernatur commodi tempore, voluptatem, tenetur quisquam quo atque quae. Tempora asperiores veniam reiciendis quam ut.",
        "link": "https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&si=giN74G5IDhZuHYCB",
        "github": "https://github.com/CodeWithHarry/Sigma-Web-Dev-Course"
    },
    {
        "thumbnail": "/thumbnail2.jpg",
        "name": "HTML AND CSS full course",
        "channelLink": "https://www.youtube.com/@BroCodez",
        "channelName": "@BroCodez",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni voluptates sit libero saepe, quasi fuga aspernatur commodi tempore, voluptatem, tenetur quisquam quo atque quae. Tempora asperiores veniam reiciendis quam ut.",
        "link": "https://youtube.com/playlist?list=PLZPZq0r_RZOPP5Yjt6IqgytMRY5uLt4y3&si=Qh6wlPBy9kM4Gu3W",
        "github": ""
    },
    {
        "thumbnail": "/thumbnail3.jpg",
        "name": "Full Stack Web Dev Course",
        "channelLink": "https://www.youtube.com/@freecodecamp",
        "channelName": "@freeCodeCamp.org",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni voluptates sit libero saepe, quasi fuga aspernatur commodi tempore, voluptatem, tenetur quisquam quo atque quae. Tempora asperiores veniam reiciendis quam ut.",
        "link": "https://youtu.be/nu_pCVPKzTk?si=TYI3wvCofCHyn68M",
        "github": ""
    },
    {
        "thumbnail": "/thumbnail4.jpg",
        "name": "Linux Crash Course",
        "channelLink": "https://www.youtube.com/@LearnLinuxTV",
        "channelName": "@LearnLinuxTV",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni voluptates sit libero saepe, quasi fuga aspernatur commodi tempore, voluptatem, tenetur quisquam quo atque quae. Tempora asperiores veniam reiciendis quam ut.",
        "link": "https://youtube.com/playlist?list=PLT98CRl2KxKHKd_tH3ssq0HPrThx2hESW&si=RCGxNmCIIjZPl4bD",
        "github": ""
    },
    {
        "thumbnail": "/thumbnail5.jpg",
        "name": "Java + DSA + Interview Preparation Course",
        "channelLink": "https://www.youtube.com/@KunalKushwaha",
        "channelName": "@KunalKushwaha",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Tempora asperiores veniam reiciendis quam ut.",
        "link": "https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&si=Qp9sHXDAqRE_pq_N",
        "github": ""
    },
    {
        "thumbnail": "/thumbnail6.jpg",
        "name": "cs50x 2024 Scratch",
        "channelLink": "https://www.youtube.com/@cs50",
        "channelName": "@cs50",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Magni voluptates sit libero saepe, quasi fuga aspernatur commodi tempore, voluptatem, tenetur quisquam quo atque quae.  Tempora asperiores veniam reiciendis quam ut.",
        "link": "https://youtube.com/playlist?list=PLhQjrBD2T381WAHyx1pq-sBfykqMBI7V4&si=7KGPaXMcPpg8RTgW",
        "github": ""
    },
]

const SkillCard = ({ thumbnail, name, channelName, channelLink, description, link, github }) => {
    return (
        <div className="col-auto p-2  ">
            <div className="card shadow-sm text-bg-dark ">
                <img src={thumbnail} className="p-3" loading="lazy" />
                <hr className="bg-white" />
                <div className=" p-4 text-bg-dark h-12">
                    <h4>{name} - <a href={channelLink} target="blank" className="text-primary fs-6">{channelName}</a></h4>
                    <p className="text-secondary">{description}</p>
                    <button className="btn btn-primary mx-1 border border-white" type="button"><a href={link} target="blank" className="text-white"><i className="bi bi-youtube text-danger"></i> Explore Now</a></button>


                    <button className="btn btn-primary border border-white " type="button"><a href={github} target="blank" className="text-white"><i className="bi bi-github px-1 py-0 text-black"></i>  Github</a></button>

                </div>
            </div>
        </div>
    )
}

export default function Skills() {
    return (
        <>
            <Header />
            <hr className="m-0 p-0" />
            <div className="bg-black">
                <h3 className="mb-0 p-3 text-white"># Skill Development</h3>
                <div className="container-fluid row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 m-0">
                    {
                        skillData.map(skill => {
                            console.log(skill)
                            return <SkillCard {...skill} />
                        })
                    }
                </div>
            </div>
            <Footer />
        </>

    )
}