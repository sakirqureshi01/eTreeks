// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "../Components/Styles/PremiumSection.css";

// function PremiumSection() {
//   return (
//     <section className="premium-section d-flex align-items-center">
//       <div className="container">
//         <div className="row align-items-center">

         
//           <div className="col-lg-7 text-white mb-5 mb-lg-0">
//             <h1 className="fw-bold display-5 mb-4">
//               Go eTreeks Premium.<br />
//               Transform your life through online education.
//             </h1>

//             <ul className="premium-list">
//               <li>
//                 Sagittis congue augue egestas volutpat egestas magna suscipit
//                 egestas magna ipsum vitae purus efficitur ipsum primis and cubilia
//                 laoreet
//               </li>
//               <li>
//                 Integer congue magna 1,000 free courses pretium ligula at rutrum
//                 risus luctus dolor auctor ipsum blandit purus
//               </li>
//               <li>
//                 Feugiat 50% off ligula risus auctor egestas an augue mauris
//                 viverra tortor in iaculis placerat
//               </li>
//             </ul>
//           </div>

         
//           <div className="col-lg-5">
//             <div className="pricing-card p-5 text-center mx-auto">
//               <i className="bi bi-crown-fill crown-icon"></i>

//               <h3 className="fw-bold mt-3">Premium Monthly</h3>
//               <p className="text-muted">
//                 For just <strong>$11.99</strong> per month, you get:
//               </p>

//               <ul className="list-unstyled text-start premium-features mt-4">
//                 <li><i className="bi bi-check-circle-fill"></i> Exclusive Monthly Discounts</li>
//                 <li><i className="bi bi-check-circle-fill"></i> Your Discounts Never Expire</li>
//                 <li><i className="bi bi-check-circle-fill"></i> Up To 50% Off Your Certification</li>
//                 <li><i className="bi bi-check-circle-fill"></i> High Resolution Videos</li>
//                 <li><i className="bi bi-check-circle-fill"></i> Offline Viewing</li>
//                 <li><i className="bi bi-check-circle-fill"></i> Uninterrupted Ad-Free Learning</li>
//                 <li><i className="bi bi-check-circle-fill"></i> 24/7 Premium Support</li>
//               </ul>

//               <button className="btn btn-danger w-100 mt-4 py-2">
//                 Go Premium
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default PremiumSection;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function PremiumSection() {
  return (
    <section
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(to right, rgba(88,70,140,0.9), rgba(63,59,130,0.9)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-7 text-white mb-5 mb-lg-0">
            <h1 className="fw-bold display-5 mb-4">
              Go eTreeks Premium.
              <br />
              Transform your life through online education.
            </h1>

            <ul style={{ paddingLeft: "1.2rem" }}>
              <li className="mb-3" style={{ lineHeight: 1.7 }}>
                Sagittis congue augue egestas volutpat egestas magna suscipit
                egestas magna ipsum vitae purus efficitur ipsum primis and cubilia
                laoreet
              </li>
              <li className="mb-3" style={{ lineHeight: 1.7 }}>
                Integer congue magna 1,000 free courses pretium ligula at rutrum
                risus luctus dolor auctor ipsum blandit purus
              </li>
              <li className="mb-3" style={{ lineHeight: 1.7 }}>
                Feugiat 50% off ligula risus auctor egestas an augue mauris
                viverra tortor in iaculis placerat
              </li>
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="col-lg-5">
            <div
              className="bg-white text-center p-5 mx-auto"
              style={{
                maxWidth: "420px",
                borderRadius: "12px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
            >
              <i
                className="bi bi-crown-fill"
                style={{ fontSize: "48px", color: "#f4b400" }}
              ></i>

              <h3 className="fw-bold mt-3">Premium Monthly</h3>
              <p className="text-muted">
                For just <strong>$11.99</strong> per month, you get:
              </p>

              <ul className="list-unstyled text-start mt-4">
                {[
                  "Exclusive Monthly Discounts",
                  "Your Discounts Never Expire",
                  "Up To 50% Off Your Certification",
                  "High Resolution Videos",
                  "Offline Viewing",
                  "Uninterrupted Ad-Free Learning",
                  "24/7 Premium Support",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="mb-2"
                    style={{ fontSize: "15px" }}
                  >
                    <i
                      className="bi bi-check-circle-fill me-2"
                      style={{ color: "#28a745" }}
                    ></i>
                    {text}
                  </li>
                ))}
              </ul>

              <button className="btn btn-danger w-100 mt-4 py-2">
                Go Premium
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PremiumSection;

