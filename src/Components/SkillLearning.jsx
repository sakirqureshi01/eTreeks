
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


function SkillLearning() {
  return (
    // <section className="py-5 bg-light">
    <>
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
      <div className="container py-4">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <h1 className="fw-bold mb-3">
              Learn new personal & <br />
              professional skills online
            </h1>

            <p className="text-muted mb-3">
              An enim nullam tempor sapien gravida donec porta and blandit
              ipsum enim justo integer velna vitae auctor integer congue
              magna and purus pretium risus ligula rutrum luctus.
            </p>

            <ul className="mb-4">
              <li className="mb-2">
                Nullam rutrum eget nunc varius etiam mollis risus undo
              </li>
              <li className="mb-2">
                Integer congue magna at pretium purus pretium ligula at rutrum
                risus luctus dolor auctor ipsum blandit purus
              </li>
              <li className="mb-2">
                Risus at congue etiam aliquam sapien egestas posuere
              </li>
            </ul>

            <Link to="/Get Start">
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
                Get Start
              </button>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src="https://jthemes.net/themes/html/etreeks/files/images/image-02.png"
              alt="Learning"
              className="img-fluid"
              style={{ height: "550px", objectFit: "contain" }}
            />
          </div>

        </div>
      </div>
        
    </section>
   </>
  );
}

export default SkillLearning;

