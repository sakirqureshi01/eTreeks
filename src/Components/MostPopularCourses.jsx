import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function MostPopularCourses() {
  return (
   
     <section
      className="d-flex align-items-center"
      style={{
     
        backgroundImage:
          "url('https://qspiders.com/BackgroundWave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 text-center text-md-start mb-5">

          {/* CONTENT */}
          <div style={{ maxWidth: "700px",
          
           }}>
            <h2 className="fw-bold py-2 ">Most Popular Courses</h2>
            <p className="text-muted ">
              Aliquam a augue suscipit, luctus neque purus ipsum neque  brdolor <br />
              primis libero tempus, br blandit posuere and ligula varius magna
              a porta
            </p>
          </div>

          {/* BUTTON */}
          <Link to="/View All Courses">

          <button
  className="btn fw-semibold"
  style={{
    background: "linear-gradient(123deg, #f09819, #ff512f)",
    border: "2px solid #e5e5e5",
    padding: "10px 25px",
    borderRadius: "10px",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => {
    e.target.style.background =
      "linear-gradient(123deg, #ff512f, #f09819)";
    e.target.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.target.style.background =
      "linear-gradient(123deg, #f09819, #ff512f)";
    e.target.style.transform = "scale(1)";
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






