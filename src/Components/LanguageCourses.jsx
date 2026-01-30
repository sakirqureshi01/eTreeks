import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaBookmark,
} from "react-icons/fa";
import SelectLanguage from "./SelectLanguage";
import BestCoursesAllTime from "./BestCoursesAllTime";
import CoursesSection from "./CoursesSection";
import RegisterCTA from "./RegisterCTA";
import HighestRatedCourses from "./HighestRatedCourses";

function LanguageCourses() {
  return (
    <>
      {/* 🔹 BREADCRUMB */}
      <section className="bg-light py-3 border-bottom">
    
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none text-dark">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#" className="text-decoration-none text-dark">
                  All Categories
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Languages
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* 🔹 HERO BANNER */}

       <section
        className="d-flex align-items-center text-white"
        style={{
          minHeight: "350px",
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(190, 60, 80, 0.85),
              rgba(120, 40, 100, 0.85)
            ),
            url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-5">
            English Language Courses
          </h1>

          <div className="d-flex align-items-center gap-4 my-3 flex-wrap">
            <span>
              <strong>289</strong> courses found
            </span>

            <div className="d-flex gap-3 fs-5">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-envelope"></i>
              <i className="bi bi-bookmark"></i>
            </div>

            <span>
              <strong>8.4k</strong>
            </span>
          </div>

          <p className="fs-5">
            <strong>9,463 students</strong> are learning English Language on eTreeks
          </p>
        </div>
      </section>
     

      <BestCoursesAllTime/>
      <SelectLanguage/>
      <HighestRatedCourses/>
      <RegisterCTA/>
      <CoursesSection/>
    </>
  );
}

export default LanguageCourses



