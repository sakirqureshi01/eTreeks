import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EducationGoalSection from "./EducationGoalSection";
import SkillLearning from "./SkillLearning";
import StatsSection from "./StatsSection";
import TeamSection from './TeamSection';
import TeacherBusinessSection from "./TeacherBusinessSection";
import LatestNews from './LatestNews';
import HelpCTA from "./HelpCTA";

function BcomeTecherFindOut() {
  return (
    <>
    <section className="py-1"
      style={{
        minHeight: "90vh",
        backgroundImage:
          "url('https://qspiders.com/BackgroundWave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center">

        {/* Heading */}
        <h2 className="fw-bold mb-3">
          Transform your life through online <br /> education with eTreeks
        </h2>

        <p className="text-muted mx-auto mb-5" style={{ maxWidth: "720px" }}>
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
          libero tempus, blandit posuere and ligula varius magna a porta
        </p>

        {/* Cards */}re
        <div className="row gy-4">

          {/* Card 1 */}
          <div className="col-md-4">
            <img
              src="https://jthemes.net/themes/html/etreeks/files/images/icons/creative.png"
              alt="Plan Your Course"
              className="mb-4"
              style={{ width: "90px" }}
            />
            <h5 className="fw-semibold">Plan Your Course</h5>
            <p className="text-muted">
              Augue luctus neque at purus ipsum neque and dolor primis libero
              tempus a blandit
            </p>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <img
              src="https://jthemes.net/themes/html/etreeks/files/images/icons/film.png"
              alt="Record Your Video"
              className="mb-4"
              style={{ width: "90px" }}
            />
            <h5 className="fw-semibold">Record Your Video</h5>
            <p className="text-muted">
              Augue luctus neque at purus ipsum neque and dolor primis libero
              tempus a blandit
            </p>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <img
              src="https://jthemes.net/themes/html/etreeks/files/images/icons/classroom.png"
              alt="Build Your Community"
              className="mb-4"
              style={{ width: "90px" }}
            />
            <h5 className="fw-semibold">Build Your Community</h5>
            <p className="text-muted">
              Augue luctus neque at purus ipsum neque and dolor primis libero
              tempus a blandit
            </p>
          </div>
        </div>
        <hr />
      </div>
    </section>
    <EducationGoalSection/>
    <SkillLearning/>
    <StatsSection/>
    <TeamSection/>
    <TeacherBusinessSection/>
    <LatestNews/>
    <HelpCTA/>
    
    </>
  );
}

export default BcomeTecherFindOut
