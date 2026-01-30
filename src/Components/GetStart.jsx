
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EducationGoalSection from "./EducationGoalSection";
import HelpCTA from "./HelpCTA";

function GetStart() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="container py-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/" className="text-decoration-none">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              GetStart
            </li>
          </ol>
        </nav>
      </div>

      <hr className="m-0" />

      {/* Page Title */}
      <section className="py-5 text-center bg-light">
        <div className="container">
          <h2 className="fw-bold display-6">
            Our Transparent Pricing Plans
          </h2>
          <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "720px" }}>
            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
            libero tempus, blandit posuere and ligula varius magna a porta
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4 justify-content-center">

            {/* MONTHLY */}
            <div className="col-lg-4 col-md-6">
              <div className="border rounded p-4 text-center h-100 shadow-sm">
                <h6 className="fw-bold text-uppercase mb-3">Monthly</h6>
                <h1 className="fw-bold mb-0">
                  $29<sup className="fs-5">99</sup>
                </h1>
                <p className="text-muted mb-4">per month</p>

                <ul className="list-unstyled text-muted mb-4">
                  <li className="py-1 text-black-500 ">5 Courses Included</li>
                  <li className="py-1">Course Learning Checks</li>
                  <li className="py-1">High Resolution Videos</li>
                  <li className="py-1">Certificate After Completion</li>
                  <li className="py-1 text-secondary ">
                    Interactive Courses
                  </li>
                  <li className="py-1 text-secondary ">
                    Extra Exercises
                  </li>
                  <li className="py-1 text-secondary ">
                    Offline Viewing
                  </li>
                </ul>

                <button className="btn btn-outline-secondary w-100">
                  Get Started
                </button>
              </div>
            </div>

            {/* ANNUAL (Highlighted) */}
            <div className="col-lg-4 col-md-6">
              <div className="border border-light rounded p-4 text-center h-100 shadow">
                <h6 className="fw-bold text-uppercase mb-3">Annual</h6>
                <h1 className="fw-bold text-danger mb-0">
                  $249<sup className="fs-5">99</sup>
                </h1>
                <p className="text-muted mb-4">per year</p>

                <ul className="list-unstyled text-muted mb-4">
                  <li className="py-1">10 Courses Included</li>
                  <li className="py-1">Course Learning Checks</li>
                  <li className="py-1">High Resolution Videos</li>
                  <li className="py-1">Certificate After Completion</li>
                  <li className="py-1">Interactive Courses</li>
                  <li className="py-1">Extra Exercises</li>
                  <li className="py-1 text-secondary ">
                    Offline Viewing
                  </li>
                </ul>

                <button className="btn btn-danger w-100">
                  Get Started
                </button>
              </div>
            </div>

            {/* BUSINESS */}
            <div className="col-lg-4 col-md-6">
              <div className="border rounded p-4 text-center h-100 shadow-sm">
                <h6 className="fw-bold text-uppercase mb-3">Business</h6>
                <h1 className="fw-bold mb-0">
                  $499<sup className="fs-5">99</sup>
                </h1>
                <p className="text-muted mb-4">per year</p>

                <ul className="list-unstyled text-muted mb-4">
                  <li className="py-1">15 Courses Included</li>
                  <li className="py-1">Course Learning Checks</li>
                  <li className="py-1">High Resolution Videos</li>
                  <li className="py-1">Certificate After Completion</li>
                  <li className="py-1">Interactive Courses</li>
                  <li className="py-1">Extra Exercises</li>
                  <li className="py-1">Offline Viewing</li>
                </ul>

                <button className="btn btn-outline-secondary w-100">
                  Get Started
                </button>
              </div>
            </div>

          </div>

          {/* Note */}
          <p className="text-center text-muted mt-5 small">
            <strong>Note!</strong> Prices may vary from location to location due
            to local taxation laws and conversion rates from U.S. Dollars.
          </p>
        </div>
      </section>
      <EducationGoalSection/>
      <HelpCTA/>
    </>
  );
}

export default GetStart;

