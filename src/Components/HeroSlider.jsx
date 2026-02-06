


import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function HeroSection() {
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
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-md-6">
            <h1 className="fw-bold">
              Largest Software <br />
              <span className="text-warning">
                Training Organization
              </span>
            </h1>

            <p className="text-muted mt-3">
              World's premier software training institution, dedicated to
              bridging the gap between industry demands and academic curricula.
            </p>
            <Link to="/Book a Demo"> <button className="btn btn-warning mt-3 px-4 py-2">
              Book a Demo
            </button></Link>
            
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center">
            <img
              src="https://qspiders.com/landingHomeImg.png"
              alt="Training"
              className="img-fluid"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;




