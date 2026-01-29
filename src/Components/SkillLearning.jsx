// import "bootstrap/dist/css/bootstrap.min.css";
// import "../Components/Styles/skillLearning.css";

// import { Link } from "react-router-dom";
// function SkillLearning() {
//   return (
//     <section className="hero-about ">
//       <div className="container py-4">
//         <div className="row align-items-center">

//           {/* LEFT CONTENT */}
//           <div className="col-lg-6">
//             <h1 className="hero-title py-3">
//               Learn new personal & <br />
//               professional skills online
//             </h1>

//             <p className="hero-text py-2">
//               An enim nullam tempor sapien gravida donec porta and blandit
//               ipsum enim justo integer velna vitae auctor integer congue
//               magna and purus pretium risus ligula rutrum luctus.
//             </p>

//             <ul className="hero-list mb-4">
//               <li>Nullam rutrum eget nunc varius etiam mollis risus undo</li>
//               <li>
//                 Integer congue magna at pretium purus pretium ligula at rutrum
//                 risus luctus dolor auctor ipsum blandit purus
//               </li>
//               <li>Risus at congue etiam aliquam sapien egestas posuere</li>
//             </ul>

//            <Link to="/Get Start "><button className="btn bg-danger btn-outline-light px-4 py-2">
//              Get Start  
//             </button></Link>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="col-lg-6 text-center">
//             {/* <img src={heroImg} alt="Student" className="hero-img" /> */}
//             <img src="https://jthemes.net/themes/html/etreeks/files/images/image-02.png" alt="" className="hero-img" />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default SkillLearning;


import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function SkillLearning() {
  return (
    <section className="py-5 bg-light">
      <div className="container py-4">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <h1 className="fw-bold mb-3">
              Learn new personal & <br />
              professional skills online
            </h1>

            <p className="text-muted mb-3">
              An enim nullam tempor sapien gravida donec porta and blandit
              ipsum enim justo integer velna vitae auctor integer congue
              magna and purus pretium risus ligula rutrum luctus.
            </p>

            <ul className="mb-4">
              <li className="mb-2">
                Nullam rutrum eget nunc varius etiam mollis risus undo
              </li>
              <li className="mb-2">
                Integer congue magna at pretium purus pretium ligula at rutrum
                risus luctus dolor auctor ipsum blandit purus
              </li>
              <li className="mb-2">
                Risus at congue etiam aliquam sapien egestas posuere
              </li>
            </ul>

            <Link to="/Get Start">
              <button
                className="btn btn-danger btn-lg px-4"
                style={{
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(224,23,78,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#dc3545";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Get Start
              </button>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src="https://jthemes.net/themes/html/etreeks/files/images/image-02.png"
              alt="Learning"
              className="img-fluid"
              style={{ height: "550px", objectFit: "contain" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default SkillLearning;

