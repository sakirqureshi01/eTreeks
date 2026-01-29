import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function MostPopularCourses() {
  return (
    <section
      className="py-5"
      style={{ background: "#fafafa" }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 text-center text-md-start">

          {/* CONTENT */}
          <div style={{ maxWidth: "700px" }}>
            <h2 className="fw-bold">Most Popular Courses</h2>
            <p className="text-muted mt-3">
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero tempus, blandit posuere and ligula varius magna
              a porta
            </p>
          </div>

          {/* BUTTON */}
          <Link to="/View All Courses">
            <button
              className="btn fw-semibold"
              style={{
                background: "#fff",
                color: "#333",
                border: "2px solid #e5e5e5",
                padding: "14px 30px",
                borderRadius: "10px",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e63946";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "#e63946";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(230,57,70,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#333";
                e.currentTarget.style.borderColor = "#e5e5e5";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              View All Courses
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default MostPopularCourses;









// import "bootstrap/dist/css/bootstrap.min.css";

// import { Link } from "react-router-dom";
// import "../Components/Styles/MostPopularCourses.css";

// function MostPopularCourses() {
//   return (
//     <>
//     <section className="popular-courses-section py-5">
//       <div className="container">
//         <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

          
//           <div className="content">
//             <h2 className="fw-bold">Most Popular Courses</h2>
//             <p className="text-muted mt-3">
//               Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
//               primis libero tempus, blandit posuere and ligula varius magna
//               a porta
//             </p>
//           </div>

//           <Link to="/View All Courses"><button className="btn view-all-btn">
//             View All Courses
//           </button></Link>
          

//         </div>
//       </div>

//     </section>
    
//     </>

//   );
// }

// export default MostPopularCourses;
