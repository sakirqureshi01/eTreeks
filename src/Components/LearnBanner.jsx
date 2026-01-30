
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function LearnBanner() {
  return (
    <section className="py-5" style={{backgroundImage:" https://jthemes.net/themes/html/etreeks/files/images/bg-map.png" }}>
      <div className="container">
        <div className="bg-white rounded-4 overflow-hidden">
          <div className="row g-0">

            {/* IMAGE */}
            <div className="col-lg-8">
              <div
                className="h-100"
                style={{
                  minHeight: "350px",
                  backgroundImage:
                    "url('https://jthemes.net/themes/html/etreeks/files/images/banner-3-img.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
           

            {/* CONTENT */}
            <div className="col-lg-4 d-flex align-items-center bg-dark">
              <div className="p-5 text-lg-start text-center">
                <h2 className="fw-bold mb-4 text-light">
                  Learn something new <br /> every day with{" "}
                  <span className="text-danger">eTreeks</span>
                </h2>

                <Link to="/find-out-more">
                  <button className="btn btn-danger px-4 py-2">
                    Find Out More
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnBanner;

