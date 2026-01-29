import "bootstrap/dist/css/bootstrap.min.css";
import { GrCertificate } from "react-icons/gr";
import { GiBookmarklet, GiVote } from "react-icons/gi";

function EducationGoalSection() {
  return (
    <section className="py-5 bg-white">
      <div className="container text-center">

        {/* Heading */}
        <h2 className="fw-bold mb-3">
          Our goal is to make online education work for everyone
        </h2>

        {/* Text */}
        <p className="text-muted mx-auto mb-4" style={{ maxWidth: "900px", lineHeight: "1.7" }}>
          Sagittis congue augue egestas volutpat egestas magna suscipit egestas
          magna ipsum vitae purus efficitur ipsum primis and cubilia laoreet
          augue egestas luctus donec diam. Curabitur ac dapibus libero mauris
          donec ociis and neque.
        </p>

        {/* Image */}
        <div className="mt-4">
          <img
            src="https://jthemes.net/themes/html/etreeks/files/images/image-03.jpg"
            alt="Education collage"
            className="img-fluid rounded-4"
          />
        </div>

        {/* Features */}
        <div className="row mt-5 text-start">

          <div className="col-md-4 mb-4">
            <div className="d-flex gap-3">
              <div className="fs-2 text-dark">
                <GiBookmarklet />
              </div>
              <div>
                <h5 className="fw-bold mb-1">Trusted Content</h5>
                <p className="text-muted mb-0">
                  Congue augue egestas magna volutpat dictum suscipit ipsum
                  egestas magna vitae purus
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="d-flex gap-3">
              <div className="fs-2 text-dark">
                <GrCertificate />
              </div>
              <div>
                <h5 className="fw-bold mb-1">Certified Teachers</h5>
                <p className="text-muted mb-0">
                  Congue augue egestas magna volutpat dictum suscipit ipsum
                  egestas magna vitae purus
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="d-flex gap-3">
              <div className="fs-2 text-dark">
                <GiVote />
              </div>
              <div>
                <h5 className="fw-bold mb-1">Lifetime Access</h5>
                <p className="text-muted mb-0">
                  Congue augue egestas magna volutpat dictum suscipit ipsum
                  egestas magna vitae purus
                </p>
              </div>
            </div>
          </div>

        </div>

        <hr className="mt-4" />
      </div>
    </section>
  );
}

export default EducationGoalSection;























// import "bootstrap/dist/css/bootstrap.min.css";
// import "../Components/Styles/EducationGoalSection.css";
// import { GrCertificate } from "react-icons/gr";
// import { GiBookmarklet } from "react-icons/gi";
// import { GiVote } from "react-icons/gi";

// function EducationGoalSection() {
//   return (
//     <>
//     <section className="education-goal py-5">
//       <div className="container text-center">

        
//         <h2 className="fw-bold mb-3">
//           Our goal is to make online education work for everyone
//         </h2>

//         <p className="text-muted mx-auto goal-text">
//           Sagittis congue augue egestas volutpat egestas magna suscipit egestas
//           magna ipsum vitae purus efficitur ipsum primis and cubilia laoreet
//           augue egestas luctus donec diam. Curabitur ac dapibus libero mauris
//           donec ociis and neque.
//         </p>

       
//         <div className="goal-image-wrapper">
//           <img
//             src="https://jthemes.net/themes/html/etreeks/files/images/image-03.jpg"
//             alt="Education collage"
//             className="goal-image"
//           />
//         </div>

       
//         <div className="row mt-5 text-start">
//           <div className="col-md-4">
//             <div className="feature-box">
//               <div className="icon"><GiBookmarklet /></div>
//               <h5>Trusted Content</h5>
//               <p>
//                 Congue augue egestas magna volutpat dictum suscipit ipsum
//                 egestas magna vitae purus
//               </p>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="feature-box">
//               <div className="icon"><GrCertificate /></div>
//               <h5>Certified Teachers</h5>
//               <p>
//                 Congue augue egestas magna volutpat dictum suscipit ipsum
//                 egestas magna vitae purus
//               </p>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="feature-box">
//               <div className="icon"></div>
//               <h5>Lifetime Access</h5>
//               <p>
//                 Congue augue egestas magna volutpat dictum suscipit ipsum
//                 egestas magna vitae purus
//               </p>
//             </div>
//           </div>
          
//         </div>
// <hr />
//       </div>
//     </section>
//     </>

// );
// }

// export default EducationGoalSection;




// // import { GrCertificate } from "react-icons/gr";
// // import { GiBookmarklet, GiVote } from "react-icons/gi";

// // function EducationGoalSection() {
// //   return (
// //     <section className="bg-white py-20">
// //       <div className="max-w-7xl mx-auto px-4 text-center">

// //         {/* Heading */}
// //         <h2 className="text-3xl md:text-4xl font-bold mb-4">
// //           Our goal is to make online education work for everyone
// //         </h2>

// //         {/* Text */}
// //         <p className="mx-auto max-w-[900px] leading-[1.7] text-gray-600">
// //           Sagittis congue augue egestas volutpat egestas magna suscipit egestas
// //           magna ipsum vitae purus efficitur ipsum primis and cubilia laoreet
// //           augue egestas luctus donec diam. Curabitur ac dapibus libero mauris
// //           donec ociis and neque.
// //         </p>

// //         {/* Image */}
// //         <div className="mt-10 flex justify-center">
// //           <img
// //             src="https://jthemes.net/themes/html/etreeks/files/images/image-03.jpg"
// //             alt="Education collage"
// //             className="w-full max-w-5xl rounded-2xl object-cover shadow-lg"
// //           />
// //         </div>

        
// //         {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

         
// //           <div className="flex gap-4 mb-5 md:mb-0">
// //             <div className="text-[34px] text-gray-800">
// //               <GiBookmarklet />
// //             </div>
// //             <div>
// //               <h5 className="font-bold mb-1">Trusted Content</h5>
// //               <p className="text-gray-600 mb-0">
// //                 Congue augue egestas magna volutpat dictum suscipit ipsum
// //                 egestas magna vitae purus
// //               </p>
// //             </div>
// //           </div>

         
// //           <div className="flex gap-4 mb-5 md:mb-0">
// //             <div className="text-[34px] text-gray-800">
// //               <GrCertificate />
// //             </div>
// //             <div>
// //               <h5 className="font-bold mb-1">Certified Teachers</h5>
// //               <p className="text-gray-600 mb-0">
// //                 Congue augue egestas magna volutpat dictum suscipit ipsum
// //                 egestas magna vitae purus
// //               </p>
// //             </div>
// //           </div>

         
// //           <div className="flex gap-4">
// //             <div className="text-[34px] text-gray-800">
// //               <GiVote />
// //             </div>
// //             <div>
// //               <h5 className="font-bold mb-1">Lifetime Access</h5>
// //               <p className="text-gray-600 mb-0">
// //                 Congue augue egestas magna volutpat dictum suscipit ipsum
// //                 egestas magna vitae purus
// //               </p>
// //             </div>
// //           </div>

// //         </div> */}




// // <div className="flex flex-col md:flex-row justify-between gap-12 mt-20 text-left">

// //   {/* Feature 1 */}
// //   <div className="flex gap-5 max-w-sm">
// //     <div className="text-[42px] text-gray-800 shrink-0">
// //       <GiBookmarklet />
// //     </div>
// //     <div>
// //       <h5 className="text-lg font-semibold mb-2">
// //         Trusted Content
// //       </h5>
// //       <p className="text-gray-500 leading-relaxed">
// //         Congue augue egestas magna volutpat dictum suscipit ipsum
// //         egestas magna vitae purus
// //       </p>
// //     </div>
// //   </div>

// //   {/* Feature 2 */}
// //   <div className="flex gap-5 max-w-sm">
// //     <div className="text-[42px] text-gray-800 shrink-0">
// //       <GrCertificate />
// //     </div>
// //     <div>
// //       <h5 className="text-lg font-semibold mb-2">
// //         Certified Teachers
// //       </h5>
// //       <p className="text-gray-500 leading-relaxed">
// //         Congue augue egestas magna volutpat dictum suscipit ipsum
// //         egestas magna vitae purus
// //       </p>
// //     </div>
// //   </div>

// //   {/* Feature 3 */}
// //   <div className="flex gap-5 max-w-sm">
// //     <div className="text-[42px] text-gray-800 shrink-0">
// //       <GiVote />
// //     </div>
// //     <div>
// //       <h5 className="text-lg font-semibold mb-2">
// //         Lifetime Access
// //       </h5>
// //       <p className="text-gray-500 leading-relaxed">
// //         Congue augue egestas magna volutpat dictum suscipit ipsum
// //         egestas magna vitae purus
// //       </p>
// //     </div>
// //   </div>

// // </div>



// //         <hr className="mt-20 border-gray-200" />
// //       </div>
// //     </section>
// //   );
// // }

// // export default EducationGoalSection;





