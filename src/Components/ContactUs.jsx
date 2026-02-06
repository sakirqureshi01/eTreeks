import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaGlobe, FaQuestionCircle } from "react-icons/fa";

function ContactUs() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="container bg-body-tertiary py-2">
        <div className="input-group">
          <a href="/" className="text-decoration-none">
            <span className="input-group-text">Home</span>
          </a>
          <span className="input-group-text">Contact Us</span>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className=" bg-white"
        style={{
        minHeight: "90vh",
        backgroundImage:
          "url('https://qspiders.com/BackgroundWave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="container text-center" >

          {/* Heading */}
          <h2 className="fw-bold mb-3 ">
            Need Help? Get in Touch
          </h2>
          <p className="text-muted mb-4">
            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
            <br />
            libero tempus, blandit posuere and ligula varius magna a porta
          </p>

          {/* Cards */}
          <div
            className="row g-0 shadow-sm mx-auto"
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              background: "#faf7f7",
             
            }}
          >
            {/* Card 1 */}
            <div className="col-md-4 p-5">
              <FaMapMarkerAlt
                style={{ fontSize: "48px", color: "#ff512f" }}
              />
              <h5 className="fw-bold mt-3">Our Location</h5>
              <p className="text-muted">
                121 King Street, Melbourne, Victoria <br />
                3000 Australia
              </p>
              <button
                className="btn btn-outline-secondary mt-3"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(123deg, #f09819, #ff512f)",
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "#ff2d55";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#6c757d";
                  e.currentTarget.style.borderColor = "#6c757d";
                }}
              >
                Find Location On Map
              </button>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 p-5 border-start">
              <FaGlobe
                style={{ fontSize: "48px", color: "#ff512f" }}
              />
              <h5 className="fw-bold mt-3">
                Partnership Request
              </h5>
              <p className="text-muted">
                For partnership and business <br />
                development inquiries
              </p>
              <button
                className="btn btn-outline-secondary mt-3"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(123deg, #f09819, #ff512f)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "#ff512f";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#6c757d";
                  e.currentTarget.style.borderColor = "#6c757d";
                }}
              >
                hello@yourdomain.com
              </button>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 p-5 border-start">
              <FaQuestionCircle
                style={{ fontSize: "48px", color: "#ff512f" }}
              />
              <h5 className="fw-bold mt-3">Need Help?</h5>
              <p className="text-muted">
                Have questions about teaching and <br />
                career opportunities?
              </p>
              <button
                className="btn btn-outline-secondary mt-3"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(123deg, #f09819, #ff512f)",
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "#ff2d55";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#6c757d";
                  e.currentTarget.style.borderColor = "#6c757d";
                }}
              >
                hello@yourdomain.com
              </button>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="d-flex justify-content-center my-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6303.683008029812!2d144.9560229666542!3d-37.8171812878301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2zMTIxIEtpbmcgU3QsIE1lbGJvdXJuZSBWSUMgMzAwMCwg0JDQstGB0YLRgNCw0LvQuNGP!5e0!3m2!1sru!2sua!4v1768900129595!5m2!1sru!2sua"
            width="90%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          />
        </div>
      </section>
    </>
  );
}

export default ContactUs;


