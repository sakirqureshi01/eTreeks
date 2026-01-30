


import "bootstrap/dist/css/bootstrap.min.css";

function StatsSection() {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#ffbe0b" }}
    >
      <div className="container">
        <div className="row text-center align-items-center">

          {/* Item 1 */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="d-flex align-items-center gap-4">
              <h1
                className="fw-bold mb-0"
                style={{ fontSize: "64px", color: "#1f2933" }}
              >
                2,769
              </h1>

              <div className="text-start">
                <h6 className="fw-semibold mb-1">
                  Online Courses
                </h6>
                <a
                  href="#"
                  className="text-decoration-none small"
                  style={{ color: "#1f2933" }}
                >
                  Learn More &gt;
                </a>
              </div>

              {/* Divider */}
              <div
                className="d-none d-md-block"
                style={{
                  height: "70px",
                  width: "1px",
                  background: "rgba(0,0,0,0.2)",
                  marginLeft: "40px",
                }}
              />
            </div>
          </div>

          {/* Item 2 */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="d-flex align-items-center gap-4">
              <h1
                className="fw-bold mb-0"
                style={{ fontSize: "64px", color: "#1f2933" }}
              >
                637
              </h1>

              <div className="text-start">
                <h6 className="fw-semibold mb-1">
                  Free Online Tutorials
                </h6>
                <a
                  href="#"
                  className="text-decoration-none small"
                  style={{ color: "#1f2933" }}
                >
                  Discover More &gt;
                </a>
              </div>

              <div
                className="d-none d-md-block"
                style={{
                  height: "70px",
                  width: "1px",
                  background: "rgba(0,0,0,0.2)",
                  marginLeft: "40px",
                }}
              />
            </div>
          </div>

          {/* Item 3 */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="d-flex align-items-center gap-4">
              <h1
                className="fw-bold mb-0"
                style={{ fontSize: "64px", color: "#1f2933" }}
              >
                942
              </h1>

              <div className="text-start">
                <h6 className="fw-semibold mb-1">
                  eBooks Available
                </h6>
                <a
                  href="#"
                  className="text-decoration-none small"
                  style={{ color: "#1f2933" }}
                >
                  Discover More &gt;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StatsSection;
