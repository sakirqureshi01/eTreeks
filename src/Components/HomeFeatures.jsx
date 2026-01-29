import "bootstrap/dist/css/bootstrap.min.css";
import { FaBookOpen, FaChalkboardTeacher, FaInfinity } from "react-icons/fa";

function HomeFeatures() {
  return (
    <section
      className="py-4"
      style={{
        background: "linear-gradient(to right, #c94b4b, #ad13b8)",
      }}
    >
      <div className="container">
        <div className="row text-white g-4">

          {/* ITEM 1 */}
          <div className="col-md-4 d-flex align-items-center gap-3 justify-content-center justify-content-md-start text-center text-md-start">
            <FaBookOpen size={45} />
            <div>
              <h5 className="fw-bold mb-1">2,769 online courses</h5>
              <p className="mb-0 opacity-75">
                Explore a variety of fresh topics
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="col-md-4 d-flex align-items-center gap-3 justify-content-center justify-content-md-start text-center text-md-start">
            <FaChalkboardTeacher size={45} />
            <div>
              <h5 className="fw-bold mb-1">Expert instruction</h5>
              <p className="mb-0 opacity-75">
                Find the right instructor for you
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="col-md-4 d-flex align-items-center gap-3 justify-content-center justify-content-md-start text-center text-md-start">
            <FaInfinity size={45} />
            <div>
              <h5 className="fw-bold mb-1">Lifetime access</h5>
              <p className="mb-0 opacity-75">
                Learn on your schedule
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeFeatures;




















// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaBookOpen, FaChalkboardTeacher, FaInfinity } from "react-icons/fa";

// function HomeFeatures() {
//   return (
//     <section className="bg-gradient-to-r from-[#c94b4b] to-[#ad13b8] py-6">

//       <div className="container">
//         <div className="row text-white g-4">

//           <div className="col-md-4 d-flex align-items-center gap-3 justify-content-center justify-content-md-start text-center text-md-start">
//             <FaBookOpen size={45} />
//             <div>
//               <h5 className="fw-bold mb-1">2,769 online courses</h5>
//               <p className="mb-0 opacity-75">
//                 Explore a variety of fresh topics
//               </p>
//             </div>
//           </div>

//           <div className="col-md-4 d-flex align-items-center gap-3 justify-content-center justify-content-md-start text-center text-md-start">
//             <FaChalkboardTeacher size={45} />
//             <div>
//               <h5 className="fw-bold mb-1">Expert instruction</h5>
//               <p className="mb-0 opacity-75">
//                 Find the right instructor for you
//               </p>
//             </div>
//           </div>

//           <div className="col-md-4 d-flex align-items-center gap-3 justify-content-center justify-content-md-start text-center text-md-start">
//             <FaInfinity size={45} />
//             <div>
//               <h5 className="fw-bold mb-1">Lifetime access</h5>
//               <p className="mb-0 opacity-75">
//                 Learn on your schedule
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default HomeFeatures;



// import "bootstrap/dist/css/bootstrap.min.css";
// import "../Components/Styles/HomeFeatures.css";


// import { FaBookOpen, FaChalkboardTeacher, FaInfinity } from "react-icons/fa";

// function HomeFeatures() {
//   return (
//     <section className="home-features">
//       <div className="container">
//         <div className="row text-white">

//           <div className="col-md-4 d-flex align-items-center gap-3">
//             <FaBookOpen size={45} />
//             <div>
//               <h5>2,769 online courses</h5>
//               <p>Explore a variety of fresh topics</p>
//             </div>
//           </div>

//           <div className="col-md-4 d-flex align-items-center gap-3">
//             <FaChalkboardTeacher size={45} />
//             <div>
//               <h5>Expert instruction</h5>
//               <p>Find the right instructor for you</p>
//             </div>
//           </div>

//           <div className="col-md-4 d-flex align-items-center gap-3">
//             <FaInfinity size={45} />
//             <div>
//               <h5>Lifetime access</h5>
//               <p>Learn on your schedule</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default HomeFeatures;

