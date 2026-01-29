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
        className="text-white"
        style={{
          background:
            "linear-gradient(90deg, rgba(220,53,69,0.9), rgba(111,66,193,0.9))",
          padding: "90px 0",
        }}
      >
        <div className="container">
          <div className="col-lg-8">

            <h1 className="fw-bold mb-3">Language Courses</h1>

            <div className="d-flex flex-wrap align-items-center gap-4 mb-2 small">
              <span>
                <strong>386</strong> courses found
              </span>

              <div className="d-flex align-items-center gap-3">
                <FaFacebookF />
                <FaTwitter />
                <FaEnvelope />
                <FaBookmark />
                <span>19.7k</span>
              </div>
            </div>

            <p className="mb-0">
              <strong>24,648 students</strong> are learning Foreign Language on
              eTreeks
            </p>

          </div>
        </div>
      </section>

      {/* 🔹 CONTENT INTRO */}
      <section className="pb-3 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-3">
            Top Language Courses of 2019
          </h2>
          <p className="text-muted col-lg-8 mb-0">
            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
            libero tempus, blandit posuere and ligula varius magna a porta
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



//  LanguageCourses