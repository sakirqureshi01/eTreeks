import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Components/Styles/Home.css"
import HomeFeatures from "./HomeFeatures";
import AboutSection from "./AboutSection";
import MostPopularCourses from "./MostPopularCourses";
import SkillLearning from "./SkillLearning";
import SkillLearningBanner from "./SkillLearningBanner";
import TrendingCategories from "./TrendingCategories";
import BestCourses from "./BestCourses";
import BestCoursesAllTime from "./BestCoursesAllTime";
import TeacherBusinessSection from "./TeacherBusinessSection";
import EducationGoalSection from "./EducationGoalSection";
import BestLearning from "./BestLearning";
import LatestNews from "./LatestNews";
import LearnBanner from "./LearnBanner";
import CoursesSection from "./CoursesSection";
import YoutubeVideo from "./YoutubeVideo";
import TeamSection from "./TeamSection";
import LanguageCourses from "./LanguageCourses";
import RegisterANDContact from './RegisterANDContact';







function Home() {
  return (
    <>
      {/* HERO SLIDER */}
      <section>
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div className="carousel-inner">

            {/* SLIDE 1 */}
            <div
              className="carousel-item active"
              style={{
                minHeight: "90vh",
                backgroundImage:
                  "url(https://jthemes.net/themes/html/etreeks/files/images/slider/slide-1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.55)",
                }}
              />

              <div className="container h-100 position-relative">
                <div className="row h-100 align-items-center">
                  <div className="col-md-6 text-white">
                    <h2 className="fw-bold fs-1">
                      25K+ students trust our online courses
                    </h2>
                    <p className="fs-5">
                      Feugiat primis ligula gravida auctor egestas augue
                      viverra mauri tortor in iaculis placerat.
                    </p>
                    <button className="btn btn-danger px-4">
                      View Popular Courses
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 2 */}
            <div
              className="carousel-item"
              style={{
                minHeight: "90vh",
                backgroundImage:
                  "url(https://jthemes.net/themes/html/etreeks/files/images/slider/slide-3.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.55)",
                }}
              />

              <div className="container h-100 position-relative">
                <div className="row h-100 align-items-center">
                  <div className="col-md-6 text-white">
                    <h2 className="fw-bold fs-1">
                      High quality courses from the leading experts
                    </h2>
                    <p className="fs-5">
                      Feugiat primis ligula gravida auctor egestas augue
                      viverra mauri tortor in iaculis placerat.
                    </p>
                    <button className="btn btn-danger px-4">
                      View Popular Courses
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 3 */}
            <div
              className="carousel-item"
              style={{
                minHeight: "90vh",
                backgroundImage:
                  "url(https://jthemes.net/themes/html/etreeks/files/images/slider/slide-2.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.55)",
                }}
              />

              <div className="container h-100 position-relative">
                <div className="row h-100 align-items-center">
                  <div className="col-md-6 text-white">
                    <h2 className="fw-bold fs-1">
                      2,769 online courses from the best tutors
                    </h2>
                    <p className="fs-5">
                      Job-ready courses with certificates and placement support.
                    </p>
                    <input
                      className="form-control w-75 rounded"
                      placeholder="Search courses"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* INDICATORS */}
          <div className="carousel-indicators">
            <button data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" />
            <button data-bs-target="#heroCarousel" data-bs-slide-to="1" />
            <button data-bs-target="#heroCarousel" data-bs-slide-to="2" />
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <HomeFeatures />
      <AboutSection />
      <MostPopularCourses />
      <CoursesSection />
      <SkillLearning />
      <SkillLearningBanner />
      <TrendingCategories />
      <BestCourses />
      <BestCoursesAllTime />
      <TeacherBusinessSection />
      <TeamSection />
      <EducationGoalSection />
      <YoutubeVideo />
      <BestLearning />
      <LatestNews />
      <LearnBanner />
    
     
  
     
      
     
    </>
  );
}

export default Home;