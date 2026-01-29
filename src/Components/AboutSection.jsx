import "bootstrap/dist/css/bootstrap.min.css";

function AboutSection() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
            <img
              src="https://jthemes.net/themes/html/etreeks/files/images/image-01.png"
              alt="About"
              className="img-fluid rounded-3"
              style={{
                maxWidth: "420px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
              }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="fw-bold mb-3">
              Transform your life <br /> through online education
            </h2>

            <p className="text-muted mb-4">
              An enim nullam tempor sapien gravida donec porta and blandit
              ipsum enim justo integer velna vitae auctor integer congue
              magna and purus pretium risus ligula rutrum luctus.
            </p>

            <ul className="list-unstyled text-muted">
              <li className="mb-2">
                Nullam rutrum eget nunc varius etiam mollis risus undo
              </li>
              <li className="mb-2">
                Integer congue magna at pretium purus pretium ligula
              </li>
              <li className="mb-2">
                Risus at congue etiam aliquam sapien egestas posuere
              </li>
              <li>
                At pretium purus integer congue magna pretium ligula
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;


// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// function AboutSection() {
//   return (
//     <section className="py-12 bg-#fff-700">
//       <div className="container">
//         <div className="row align-items-center">

//           {/* LEFT IMAGE */}
//           <div className="col-lg-6 mb-4 mb-lg-0 flex justify-center">
//             <img
//               src="https://jthemes.net/themes/html/etreeks/files/images/image-01.png"
//               alt="About"
//               className="
//                 w-full max-w-[420px]
//                 rounded-2xl
//                 shadow-[0_15px_40px_rgba(0,0,0,0.15)]
//               "
//             />
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="col-lg-6 text-center lg:text-start">
//             <h2 className="fw-bold mb-3 text-2xl lg:text-3xl">
//               Transform your life <br /> through online education
//             </h2>

//             <p className="text-muted mb-4">
//               An enim nullam tempor sapien gravida donec porta and blandit
//               ipsum enim justo integer velna vitae auctor integer congue
//               magna and purus pretium risus ligula rutrum luctus.
//             </p>

//             <ul className="space-y-2 text-gray-600 list-none no-underline">
//               <li>Nullam rutrum eget nunc varius etiam mollis risus undo</li>
//               <li>Integer congue magna at pretium purus pretium ligula</li>
//               <li>Risus at congue etiam aliquam sapien egestas posuere</li>
//               <li>At pretium purus integer congue magna pretium ligula</li>
//             </ul>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;




// import "bootstrap/dist/css/bootstrap.min.css";
// import "../Components/Styles/AboutSection.css";


// function AboutSection() {
//   return (
//     <section className="about-section py-5">
//       <div className="container">
//         <div className="row align-items-center">

//           {/* LEFT IMAGE */}
//           <div className="col-lg-6 mb-4 mb-lg-0">
//             <div className="about-img-wrapper">
//               {/* <img src={aboutImg} alt="About" className="about-img" /> */}
//               <img className="about-img" src="https://jthemes.net/themes/html/etreeks/files/images/image-01.png" alt="" />
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="col-lg-6">
//             <h2 className="fw-bold mb-3">
//               Transform your life <br /> through online education
//             </h2>

//             <p className="text-muted">
//               An enim nullam tempor sapien gravida donec porta and blandit
//               ipsum enim justo integer velna vitae auctor integer congue
//               magna and purus pretium risus ligula rutrum luctus.
//             </p>

//             <ul className="about-list">
//               <li>Nullam rutrum eget nunc varius etiam mollis risus undo</li>
//               <li>Integer congue magna at pretium purus pretium ligula</li>
//               <li>Risus at congue etiam aliquam sapien egestas posuere</li>
//               <li>At pretium purus integer congue magna pretium ligula</li>
//             </ul>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;






