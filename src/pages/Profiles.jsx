import Header from "../Header";
import Footer from "../Footer";
import { useRef, useState } from 'react';
import '../App.css';

export default function Profiles() {

   // profile background images
   const LinkedIn = "/Profile-bg/LinkedIn.png";

   var spanRef1 = useRef();
   var spanRef2 = useRef();
   var spanRef3 = useRef();
   var spanRef4 = useRef();
   // var spanRef5 = useRef();
   // var spanRef6 = useRef();
   // var spanRef7 = useRef();
   // var spanRef8 = useRef();

   var [copied, setCopied] = useState({ id1: false, id2: false, id3: false, id4: false, id5: false, id6: false, id7: false, id8: false });
   // const [animate, setAnimate] = useState(false);

   var handleCopy = (ref, id) => {
      navigator.clipboard.writeText(ref.current.innerText);
      setCopied({ ...copied, [id]: true });
      // setAnimate(true);
      setTimeout(() => {
         setCopied({ ...copied, [id]: false });
         // setAnimate(false);
      }, 2000); // Change back to clipboard icon after 2 seconds
   };
   return (
      <>
         {/* <Header /> */}
         <div className="m-0 p-0 bg-black " id="Profiles">
            <h3 className="p-3 text-white"># My Profiles</h3>
            <div className="container-fluid m-auto d-flex flex-column row  p-0 justify-content-center align-items-center">

               {/* <div className="card  d-flex col bg-black m-0 p-0 border w-75 " >
                  <div className="card-header bg-primary text-white border rounded ">
                     Coding Profiles
                  </div>
                  <ul className="list-group list-group-flush text-nowrap bg-black " >

                     <li className="list-group-item d-flex flex-row justify-content-between overflow-scroll bg-black text-white" >
                        <span className=""><i className="bi bi-code-square mx-2"></i>LeetCode <i className="bi bi-arrow-right"></i></span>
                        <span ref={spanRef1} className="text-info "><a href="https://leetcode.com/javid4962" target="blank">https://leetcode.com/javid4962</a></span>
                        <button
                           className="button btn border-0 text-white"
                           onClick={() => handleCopy(spanRef1, 'id1')}
                        >
                           <i className={`bi ${copied.id1 ? 'bi-check' : 'bi-clipboard'}`}></i>
                        </button>
                     </li>

                     <li className="list-group-item d-flex flex-row justify-content-between overflow-scroll bg-black text-white">
                        <span><i className="bi bi-code-slash mx-2"></i>Hackerrank <i className={'bi bi-arrow-right '}></i></span>
                        <span ref={spanRef2} className="text-info"><a href="https://www.hackerrank.com/profile/javid_4962" target="blank" >https://www.hackerrank.com/profile/javid_4962</a></span>
                        <button
                           className="button btn border-0 text-white"
                           onClick={() => handleCopy(spanRef2, 'id2')}
                        >
                           <i className={`bi ${copied.id2 ? 'bi-check' : 'bi-clipboard'} `}></i>
                        </button>
                     </li>

                     <li className="list-group-item d-flex flex-row justify-content-between overflow-scroll bg-black text-white">
                        <span className=""><i className="bi bi-linkedin mx-2"></i>Linkedin <i className="bi bi-arrow-right"></i></span>
                        <span ref={spanRef3} className="text-info"><a href="https://www.linkedin.com/in/masthan-javid-vali-shaik-3a15ba248/" target="blank">https://www.linkedin.com/in/masthan-javid-vali-shaik-3a15ba248/</a></span>
                        <button
                           className="button btn border-0 text-white"
                           onClick={() => handleCopy(spanRef3, 'id3')}
                        >
                           <i className={`bi ${copied.id3 ? 'bi-check' : 'bi-clipboard'}`}></i>
                        </button>
                     </li>

                     <li className="list-group-item d-flex flex-row justify-content-between overflow-scroll bg-black text-white">
                        <span className=""><i className="bi bi-github mx-2"></i>GitHub <i className="bi bi-arrow-right"></i></span>
                        <span ref={spanRef4} className="text-info"><a href="https://github.com/javid4962" target="blank">https://github.com/javid4962</a></span>
                        <button
                           className="button btn border-0 text-white"
                           onClick={() => handleCopy(spanRef4, 'id4')}
                        >
                           <i className={`bi ${copied.id4 ? 'bi-check' : 'bi-clipboard'}`}></i>
                        </button>
                     </li>


                  </ul>
               </div> */}
               <div className="row container-fluid m-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                  {/* LinkedIn */}
                  <div className=" bg-dark border border-4 border-black rounded col col-rows-3 p-3" >
                     <span className="row fs-3 text-light d-flex justify-content-center">LinkedIn</span>

                     <span ref={spanRef1} className="text-info d-none"><a href="https://www.linkedin.com/in/masthan-javid-vali-shaik-3a15ba248/" target="blank">https://www.linkedin.com/in/masthan-javid-vali-shaik-3a15ba248/</a></span>

                     <div className="row  " style={{ backgroundImage: "url(/Profile-bg/LinkedIn.png)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '15rem' }}>
                     </div>
                     <div className="row border position-static top-0 ">
                        <button className="btn bg-black text-success border col" onClick={() => handleCopy(spanRef1, 'id1')}> <i className={`bi text-success ${copied.id1 ? 'bi-check2-all' : 'bi-clipboard'}`}></i> Copy Link</button>
                        <button className="btn bg-black text-warning border col"><i className="bi bi-box-arrow-up-right text-warning"></i> <a href="https://www.linkedin.com/in/masthan-javid-vali-shaik-3a15ba248/" target="blank" className="text-warning">Open Link</a></button>
                     </div>
                  </div>

                  {/* GitHub */}
                  <div className=" bg-dark border border-4 border-black rounded col col-rows-3 p-3" >
                     <span className="row fs-3 text-light d-flex justify-content-center">GitHub</span>

                     <span ref={spanRef2} className="text-info d-none"><a href="https://www.github.com/javid4962" target="blank">https://www.github.com/javid4962</a></span>

                     <div className="row  " style={{ backgroundImage: "url(/Profile-bg/GitHub.png)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '15rem' }}>
                     </div>
                     <div className="row border position-static top-0">
                        <button className="btn bg-black text-success border col" onClick={() => handleCopy(spanRef2, 'id2')}> <i className={`bi text-success ${copied.id2 ? 'bi-check2-all' : 'bi-clipboard'}`}></i> Copy Link</button>
                        <button className="btn bg-black text-warning border col"><i className="bi bi-box-arrow-up-right text-warning"></i> <a href="https://www.github.com/javid4962" target="blank" className="text-warning">Open Link</a></button>
                     </div>
                  </div>

                  {/* Leetcode */}
                  <div className=" bg-dark border border-4 border-black rounded col col-rows-3 p-3" >
                     <span className="row fs-3 text-light d-flex justify-content-center">LeetCode</span>

                     <span ref={spanRef3} className="text-info d-none"><a href="https://leetcode.com/javid4962" target="blank">https://leetcode.com/javid4962</a></span>

                     <div className="row  " style={{ backgroundImage: "url(/Profile-bg/LeetCode.png)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '15rem' }}>
                     </div>
                     <div className="row border position-static top-0">
                        <button className="btn bg-black text-success border col" onClick={() => handleCopy(spanRef3, 'id3')}> <i className={`bi text-success ${copied.id3 ? 'bi-check2-all' : 'bi-clipboard'}`}></i> Copy Link</button>
                        <button className="btn bg-black text-warning border col"><i className="bi bi-box-arrow-up-right text-warning"></i> <a href="https://leetcode.com/javid4962" target="blank" className="text-warning">Open Link</a></button>
                     </div>
                  </div>

                  {/* HackerRank */}
                  <div className=" bg-dark border border-4 border-black rounded col col-rows-3 p-3" >
                     <span className="row fs-3 text-light d-flex justify-content-center">Hackerrank</span>

                     <span ref={spanRef4} className="text-info d-none"><a href="https://www.hackerrank.com/profile/javid_4962" target="blank">https://www.hackerrank.com/profile/javid_4962</a></span>

                     <div className="row  " style={{ backgroundImage: "url(/Profile-bg/Hackerrank.png)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '15rem' }}>
                     </div>
                     <div className="row border position-static top-0">
                        <button className="btn bg-black text-success border col" onClick={() => handleCopy(spanRef4, 'id4')}> <i className={`bi text-success ${copied.id4 ? 'bi-check2-all' : 'bi-clipboard'}`}></i> Copy Link</button>
                        <button className="btn bg-black text-warning border col"><i className="bi bi-box-arrow-up-right text-warning"></i> <a href="https://www.hackerrank.com/profile/javid_4962" target="blank" className="text-warning">Open Link</a></button>
                     </div>
                  </div>




               </div>
            </div>
         </div>
         {/* <Footer /> */}
      </>
   );
}
