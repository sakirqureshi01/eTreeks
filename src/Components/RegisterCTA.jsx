// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../Components/Styles/registerCTA.css";

// function RegisterCTA() {
//   return (
//     <section className="register-cta">
//       <div className="register-overlay">
//         <div className="container">
//           <div className="row align-items-center gy-4">

//             {/* LEFT CONTENT */}
//             <div className="col-lg-6 text-white">
//               <h2 className="fw-light">
//                 Register now for getting
//                 <br />
//                 <strong className="fw-bold">200+ courses free access.</strong>
//               </h2>

//               <p className="fs-5 mt-3">This offer for limited time</p>

//               <p className="mt-4 mb-2">Ends in</p>

//               <div className="d-flex gap-3">
//                 <div className="time-box">00d</div>
//                 <div className="time-box">00h</div>
//                 <div className="time-box">00m</div>
//                 <div className="time-box">00s</div>
//               </div>
//             </div>

//             {/* RIGHT FORM */}
//             <div className="col-lg-5 offset-lg-1">
//               <div className="register-card">
//                 <div className="mb-3">
//                   <label className="form-label fw-semibold">
//                     Your Name*
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter Your Name*"
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label fw-semibold">
//                     Your Email*
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Enter Your Email*"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="form-label fw-semibold">
//                     Your Phone Number*
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter Your Phone Number*"
//                   />
//                 </div>

//                 <button className="btn btn-danger w-100 py-2 fw-semibold">
//                   Register Now
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default RegisterCTA;


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RegisterCTA() {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          background: "rgba(15, 25, 40, 0.85)",
          padding: "70px 0",
          marginTop: "30px",
        }}
      >
        <div className="container">
          <div className="row align-items-center gy-4">

            {/* LEFT CONTENT */}
            <div className="col-lg-6 text-white">
              <h2 className="fw-light">
                Register now for getting
                <br />
                <strong className="fw-bold">
                  200+ courses free access.
                </strong>
              </h2>

              <p className="fs-5 mt-3">
                This offer for limited time
              </p>

              <p className="mt-4 mb-2">Ends in</p>

              <div className="d-flex gap-3">
                {["00d", "00h", "00m", "00s"].map((time, i) => (
                  <div
                    key={i}
                    className="text-white text-center"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      padding: "18px 22px",
                      borderRadius: "6px",
                      fontSize: "22px",
                      fontWeight: 600,
                      minWidth: "70px",
                    }}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="col-lg-5 offset-lg-1">
              <div
                className="bg-white"
                style={{
                  padding: "35px",
                  borderRadius: "10px",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
                }}
              >
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name*"
                    style={{ padding: "12px 14px", borderRadius: "6px" }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Your Email*
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email*"
                    style={{ padding: "12px 14px", borderRadius: "6px" }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Your Phone Number*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Phone Number*"
                    style={{ padding: "12px 14px", borderRadius: "6px" }}
                  />
                </div>

                <button className="btn btn-danger w-100 py-2 fw-semibold">
                  Register Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterCTA;

