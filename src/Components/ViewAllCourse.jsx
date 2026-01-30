
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import PremiumSection from "./PremiumSection";

const categories = [
  { icon: "bi-code-slash", title: "Development", count: 36 },
  { icon: "bi-piggy-bank", title: "Finance", count: 28 },
  { icon: "bi-cpu", title: "IT & Software", count: 54 },
  { icon: "bi-diagram-3", title: "Networking", count: 59 },
  { icon: "bi-flask", title: "Sciences", count: 78 },
  { icon: "bi-graph-up", title: "Marketing", count: 68 },
  { icon: "bi-book", title: "Languages", count: 103 },
  { icon: "bi-trophy", title: "Health & Fitness", count: 62 },
  { icon: "bi-palette", title: "Design & Arts", count: 78 },
  { icon: "bi-gear", title: "Engineering", count: 39 },
  { icon: "bi-camera", title: "Photography", count: 35 },
  { icon: "bi-journal-bookmark", title: "Life Science", count: 37 },
  { icon: "bi-calculator", title: "Mathematics", count: 94 },
  { icon: "bi-easel", title: "Teaching", count: 80 },
  { icon: "bi-music-note-beamed", title: "Music", count: 148 },
  { icon: "bi-file-text", title: "Journalism", count: 136 },
  { icon: "bi-cash-coin", title: "Skilled Trades", count: 59 },
  { icon: "bi-house", title: "Real Estate", count: 63 },
];

function ViewAllCourse() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      {/* Breadcrumb */}
      <div className="container py-3">
        <small className="text-muted">
          Home <span className="mx-2">»</span> Course Categories
        </small>
      </div>

      {/* HERO */}
      <section
        className="d-flex align-items-center"
        style={{
          minHeight: "300px",
          backgroundImage:
            "linear-gradient(to right, rgba(190,60,80,0.88), rgba(120,40,100,0.88)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-white">
          <h1 className="fw-bold display-5 mb-3">Course Categories</h1>

          <div className="d-flex flex-wrap align-items-center gap-4 mb-2 fs-5">
            <span>
              <strong>3486</strong> courses found in{" "}
              <strong>18 categories</strong>
            </span>

            <div className="d-flex gap-3">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-envelope"></i>
              <i className="bi bi-bookmark"></i>
            </div>

            <span>
              <strong>54.2k</strong>
            </span>
          </div>

          <p className="fs-5 mb-0">
            <strong>164,714 students</strong> are learning online on eTreeks
          </p>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <div className="container my-5">
        <div className="row g-4">
          {categories.map((item, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-sm-6">
              <div
                className="text-center p-4 h-100 bg-white rounded"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  border: "1px solid #eaeaea",
                  cursor: "pointer",
                  transition: "0.3s",
                  transform:
                    hovered === index ? "translateY(-5px)" : "translateY(0)",
                  boxShadow:
                    hovered === index
                      ? "0 10px 25px rgba(0,0,0,0.08)"
                      : "none",
                }}
              >
                <i
                  className={`bi ${item.icon}`}
                  style={{ fontSize: "48px", color: "#444" }}
                ></i>
                <h6 className="mt-3 fw-semibold">{item.title}</h6>
                <p className="text-muted mb-0">{item.count} Courses</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INFO SECTION */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold">
            Our goal is to make online education work for everyone
          </h2>
          <p className="text-muted col-lg-9 mx-auto mt-3">
            Sagittis congue augue egestas volutpat egestas magna suscipit
            egestas magna ipsum vitae purus efficitur ipsum primis.
          </p>

          <div className="my-5">
            <img
              src="https://jthemes.net/themes/html/etreeks/files/images/image-03.jpg"
              alt="Education"
              className="img-fluid rounded-4 w-100"
            />
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <i className="bi bi-book fs-1"></i>
              <h5 className="mt-3 fw-semibold">Trusted Content</h5>
              <p className="text-muted">
                Congue augue egestas magna volutpat dictum suscipit
              </p>
            </div>

            <div className="col-md-4">
              <i className="bi bi-person-check fs-1"></i>
              <h5 className="mt-3 fw-semibold">Certified Teachers</h5>
              <p className="text-muted">
                Congue augue egestas magna volutpat dictum suscipit
              </p>
            </div>

            <div className="col-md-4">
              <i className="bi bi-infinity fs-1"></i>
              <h5 className="mt-3 fw-semibold">Lifetime Access</h5>
              <p className="text-muted">
                Congue augue egestas magna volutpat dictum suscipit
              </p>
            </div>
          </div>
        </div>
      </section>

      <PremiumSection />
    </>
  );
}

export default ViewAllCourse;

