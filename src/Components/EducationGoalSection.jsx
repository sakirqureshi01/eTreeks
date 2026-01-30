import "bootstrap/dist/css/bootstrap.min.css";
import { GrCertificate } from "react-icons/gr";
import { GiBookmarklet, GiVote } from "react-icons/gi";

function EducationGoalSection() {
  return (
    // <section className="bg-white text-center py-3">
    <section className="bg-white text-center py-3" style={{ marginTop: "-100px" }}>

      <div className="container">

        {/* Heading */}
        <h2 className="fw-bold mb-4">
          Our goal is to make online education work for everyone
        </h2>

        {/* Text */}
        <p
          className="text-muted mx-auto mb-4"
          style={{ maxWidth: "900px", lineHeight: "1.7" }}
        >
          Sagittis congue augue egestas volutpat egestas magna suscipit egestas
          magna ipsum vitae purus efficitur ipsum primis and cubilia laoreet
          augue egestas luctus donec diam. Curabitur ac dapibus libero mauris
          donec ociis and neque.
        </p>

        {/* Image */}
        <div className="mt-3">
          <img
            src="https://jthemes.net/themes/html/etreeks/files/images/image-03.jpg"
            alt="Education collage"
            className="img-fluid rounded-4"
          />
        </div>

        {/* Features */}
        <div className="row mt-4 text-start">

          <div className="col-md-4 mb-3">
            <div className="d-flex gap-3">
              <div className="fs-2 text-dark">
                <GiBookmarklet />
              </div>
              <div>
                <h5 className="fw-bold mb-1">Trusted Content</h5>
                <p className="text-muted mb-0">
                  Congue augue egestas magna volutpat dictum suscipit ipsum
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="d-flex gap-3">
              <div className="fs-2 text-dark">
                <GrCertificate />
              </div>
              <div>
                <h5 className="fw-bold mb-1">Certified Teachers</h5>
                <p className="text-muted mb-0">
                  Congue augue egestas magna volutpat dictum suscipit ipsum
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="d-flex gap-3">
              <div className="fs-2 text-dark">
                <GiVote />
              </div>
              <div>
                <h5 className="fw-bold mb-1">Lifetime Access</h5>
                <p className="text-muted mb-0">
                  Congue augue egestas magna volutpat dictum suscipit ipsum
                </p>
              </div>
            </div>
          </div>

        </div>

        <hr className="mt-4" />
      </div>
    </section>
  );
}

export default EducationGoalSection;






