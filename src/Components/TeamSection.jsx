import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const teamData = [
  {
    name: "Sam Richardson",
    role: "Head Of Department",
    img: "https://jthemes.net/themes/html/etreeks/files/images/team-1.jpg",
    rating: "4.89",
    reviews: "31 Reviews",
  },
  {
    name: "Kally Brooks",
    role: "Business & Management",
    img: "https://jthemes.net/themes/html/etreeks/files/images/team-2.jpg",
    rating: "4.38",
    reviews: "17 Reviews",
  },
  {
    name: "Robert Coronado",
    role: "Engineering & Technology",
    img: "https://jthemes.net/themes/html/etreeks/files/images/team-3.jpg",
    rating: "4.64",
    reviews: "23 Reviews",
  },
  {
    name: "Grow with eTreeks",
    role: "hireme@domain.com",
    img: "https://jthemes.net/themes/html/etreeks/files/images/team-13.jpg",
    rating: "0.00",
    reviews: "0 Reviews",
  },
];

function TeamSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-4">
      <div className="container">
        <div className="row">

          {teamData.map((item, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="bg-white text-center pb-3 shadow-sm rounded overflow-hidden">

                {/* Image Box */}
                <div
                  className="position-relative overflow-hidden"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="img-fluid w-100"
                    style={{
                      transition: "0.4s ease",
                      transform:
                        hovered === index ? "scale(1.1)" : "scale(1)",
                    }}
                  />

                  {/* Overlay */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center gap-3 align-items-end"
                    style={{
                      opacity: hovered === index ? 1 : 0,
                      transition: "0.4s",
                      paddingBottom: "30px",
                      fontSize: "26px",
                      color: "rgb(139,139,236)",
                      background: "rgba(0,0,0,0.05)",
                      cursor: "pointer",
                    }}
                  >
                    <div className="d-flex justify-content-center gap-3 mb-3">
                     <span className="social-icon twitter"><FaTwitter /></span>
                    <span className="social-icon facebook"><FaFacebookF /></span>
                    <span className="social-icon linkedin"><FaLinkedinIn /></span>
                    </div>

                  </div>
                </div>

                {/* Text */}
                <h5 className="mt-3">{item.name}</h5>
                <p className="text-muted mb-2">{item.role}</p>

                <div className="fw-semibold" style={{ color: "#f4b400" }}>
                  ⭐⭐⭐⭐⭐ <span>{item.rating}</span>
                </div>
                <small className="text-muted">{item.reviews}</small>
              </div>
            </div>
          ))}

        </div>
      </div>
      <hr />
    </section>
  );
}

export default TeamSection;
