import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function TeacherBusinessSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-4">

          {/* CARD 1 */}
          <div className="col-lg-6">
            <div className="card h-100 shadow border-0 rounded-4">
              <div className="card-body d-flex align-items-center gap-4 flex-column flex-md-row text-center text-md-start p-4">

                <img
                  src="https://jthemes.net/themes/html/etreeks/files/images/image-04.png"
                  alt="Become a Teacher"
                  className="img-fluid"
                  style={{ maxWidth: "200px" }}
                />

                <div>
                  <h4 className="fw-bold mb-2">Become a Teacher</h4>
                  <p className="text-muted mb-3">
                    Feugiat primis ligula a risus auctor egestas an augue
                    mauris and viverra tortor iaculis an euugiat viverra
                  </p>

                  <Link to="/Find Out Moree" className="btn btn-danger px-4 py-2">
                    Find Out More
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-lg-6">
            <div className="card h-100 shadow border-0 rounded-4">
              <div className="card-body d-flex align-items-center gap-4 flex-column flex-md-row text-center text-md-start p-4">

                <img
                  src="https://jthemes.net/themes/html/etreeks/files/images/image-05.png"
                  alt="Business"
                  className="img-fluid"
                  style={{ maxWidth: "200px" }}
                />

                <div>
                  <h4 className="fw-bold mb-2">eTreeks for Business</h4>
                  <p className="text-muted mb-3">
                    Feugiat primis ligula a risus auctor egestas an augue
                    mauris and viverra tortor iaculis an euugiat viverra
                  </p>

                  <button className="btn btn-danger px-4 py-2">
                    Find Out More
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TeacherBusinessSection;






// import "bootstrap/dist/css/bootstrap.min.css";
// import "../Components/Styles/TeacherBusinessSection.css";
// import { Link } from "react-router-dom";
// function TeacherBusinessSection() {
//   return (
//     <section className="teacher-business py-5">
//       <div className="container">
//         <div className="row g-4">

//           {/* CARD 1 */}
//           <div className="col-lg-6">
//             <div className="tb-card">
//               <div className="tb-img">
//                 <img
//                   src="https://jthemes.net/themes/html/etreeks/files/images/image-04.png"
//                   alt="Become a Teacher"
//                 />
//               </div>

//               <div className="tb-content">
//                 <h4>Become a Teacher</h4>
                
//                 <p>
//                   Feugiat primis ligula a risus auctor egestas an augue
//                   mauris and viverra tortor iaculis an euugiat viverra
//                 </p>

//             <Link to="/Find Out Moree"><button className="btn tb-btn">Find Out More</button></Link>
                
                  
              
//               </div>
//             </div>
//           </div>

//           {/* CARD 2 */}
//           <div className="col-lg-6">
//             <div className="tb-card">
//               <div className="tb-img">
//                 <img
//                   src="https://jthemes.net/themes/html/etreeks/files/images/image-05.png"
//                   alt="Business"
//                 />
//               </div>

//               <div className="tb-content">
//                 <h4>eTreeks for Business</h4>
//                 <p>
//                   Feugiat primis ligula a risus auctor egestas an augue
//                   mauris and viverra tortor iaculis an euugiat viverra
//                 </p>

//                 <button className="btn tb-btn">
//                   Find Out More
//                 </button>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default TeacherBusinessSection;
