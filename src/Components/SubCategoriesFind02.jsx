// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
//  import "../Components/Styles/subCategoriesFind02.css";

// const categories = [
//   { title: "English Grammar", count: 36 },
//   { title: "English Pronunciation", count: 11 },
//   { title: "English Conversation", count: 14 },
//   { title: "English Vocabulary", count: 17 },
//   { title: "Business English", count: 22 },
//   { title: "Test Prep", count: 13 },
//   { title: "Beginner Level", count: 78 },
//   { title: "Intermediate Level", count: 24 },
//   { title: "Expert Level", count: 9 },
// ];

// function SubCategoriesFind02() {
//   return (
//     <>
//     <section className="sub-categories py-5">
//       <div className="container">
//         {/* Heading */}
//         <div className="text-center mb-5">
//           <h2 className="fw-bold">English Language Sub-Categories</h2>
//           <p className="text-muted mt-2">
//             Discover thousands of online courses from the best experts
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="row g-4">
//           {categories.map((item, index) => (
//             <div className="col-lg-2 col-md-4 col-sm-6" key={index}>
//               <div className="category-card h-100">
//                 <h6 className="fw-semibold mb-1 text-dark">{item.title}</h6>
//                 <span className="text-muted">{item.count} Courses</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//    <div className="row px-5 m-3">
//     <h3 >The Best English Courses of 2019</h3>
//     <p > Aliquam a augue suscipit, luctus neque purus  ipsum neque  <br />dolor primis libero tempus, blandit posuere and ligula varius magna a porta</p>
//    </div>
//     </>
//   );
// }

// export default SubCategoriesFind02


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  { title: "English Grammar", count: 36 },
  { title: "English Pronunciation", count: 11 },
  { title: "English Conversation", count: 14 },
  { title: "English Vocabulary", count: 17 },
  { title: "Business English", count: 22 },
  { title: "Test Prep", count: 13 },
  { title: "Beginner Level", count: 78 },
  { title: "Intermediate Level", count: 24 },
  { title: "Expert Level", count: 9 },
];

function SubCategoriesFind02() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      {/* SUB CATEGORIES */}
      <section
        className="py-5"
        style={{ backgroundColor: "#f6f8f8" }}
      >
        <div className="container">

          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">
              English Language Sub-Categories
            </h2>
            <p className="text-muted mt-2">
              Discover thousands of online courses from the best experts
            </p>
          </div>

          {/* Cards */}
          <div className="row g-4">
            {categories.map((item, index) => (
              <div
                className="col-lg-2 col-md-4 col-sm-6"
                key={index}
              >
                <div
                  className="h-100"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    background: "#fff",
                    border: "1px solid #e6e6e6",
                    borderRadius: "8px",
                    padding: "22px 18px",
                    cursor: "pointer",
                    transition: "0.3s",
                    transform:
                      hovered === index
                        ? "translateY(-4px)"
                        : "translateY(0)",
                    boxShadow:
                      hovered === index
                        ? "0 10px 25px rgba(0,0,0,0.08)"
                        : "none",
                  }}
                >
                  <h6 className="fw-semibold mb-1 text-dark">
                    {item.title}
                  </h6>
                  <span className="text-muted">
                    {item.count} Courses
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEXT SECTION */}
      <div className="container my-4">
        <h3>The Best English Courses of 2019</h3>
        <p className="text-muted">
          Aliquam a augue suscipit, luctus neque purus ipsum neque
          <br />
          dolor primis libero tempus, blandit posuere and ligula varius magna a
          porta
        </p>
      </div>
    </>
  );
}

export default SubCategoriesFind02;
