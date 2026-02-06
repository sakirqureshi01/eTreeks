import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  FaFire,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaLaptop,
  FaBook,
} from "react-icons/fa";

function SkillLearningBanner() {
  return (

     <section
      className="d-flex align-items-center"
      style={{
        minHeight: "90vh",
        backgroundImage:
          "url('https://qspiders.com/BackgroundWave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
       
      }}
    >
      {/* Overlay */}
      <div
        style={{
        
          inset: 0,
          background:
            "linear-gradient(to right, rgba(88,70,140,0.9), rgba(63,59,130,0.9))",
        }}
      />

      {/* Content */}
      <div className="container position-relative text-center">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            <h1 className="fw-bold display-5 mb-4">
              Get Quality Education with eTreeks
            </h1>

            <p className="opacity-75 mb-4 mx-auto" style={{ maxWidth: "750px" }}>
              Integer congue magna at pretium purus pretium ligula at rutrum luctus
              risus eros dolor auctor ipsum blandit luctus purus vehicula magna
              a tempor laoreet
            </p>

           
                 <Link to="/Start Learning">
              <button
                className="btn btn-danger btn-lg px-4"
            
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
               Start Learning
              </button>
            </Link>
            {/* ICON ROW */}
            <div className="row justify-content-center g-4">
              <IconItem icon={<FaFire />} label="TRENDING COURSES" />
              <IconItem icon={<FaChalkboardTeacher />} label="CERTIFIED TEACHERS" />
              <IconItem icon={<FaGraduationCap />} label="GRADUATION CERTIFICATE" />
              <IconItem icon={<FaLaptop />} label="ONLINE COURSE FACILITIES" />
              <IconItem icon={<FaBook />} label="FREE BOOKS & LIBRARY" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function IconItem({ icon, label }) {
  return (
    <div className="col-6 col-md-4 col-lg-2 text-center">
      <div style={{ fontSize: "48px" }}>{icon}</div>
      <p className="fw-semibold mt-2 small">
        {label.split(" ").map((word, i) => (
          <span key={i} className="d-block">
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}

export default SkillLearningBanner;


