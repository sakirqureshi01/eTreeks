 
 import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  FaTwitter,FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import LearnBanner from "./LearnBanner";

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
    name: "Becky Reed",
    role: "Design & Art",
    img: "https://jthemes.net/themes/html/etreeks/files/images/team-4.jpg",
    rating: "4.78",
    reviews: "31 Reviews",
  },

  //////////////////////////////
    {
    name: "David Smith",
    role: "IT & Software",
    img: "https://jthemes.net/themes/html/etreeks/files/images/team-5.jpg",
    rating: "4.64",
    reviews: "62 Reviews",
  },
  {
    name: "Linda J. Ross",
    role: "Teacher of Englisht",
    img: "https://jthemes.net/themes/html/etreeks/files/images/team-6.jpg",
    rating: "4.33",
    reviews: "59 Reviews",
  },
  {
    name: "Sergio Arriero",
    role: "Teacher of Spanish",
    img: "https://jthemes.net/themes/html/etreeks/files/images/team-7.jpg",
    rating: "4.19",
    reviews: "42 Reviews",
  },
  {
    name: "Linda Ferell",
    role: "Healt & Fitness",
    img: "https://jthemes.net/themes/html/etreeks/files/images/team-8.jpg",
    rating: "4.81",
    reviews: "72 Reviews",
  },
  ///////////////////////////

   {
    name: "Lea Victoria",
    role: "Life Science",
    img: "https://jthemes.net/themes/html/etreeks/files/images/team-9.jpg",
    rating: "4.82",
    reviews: "51 Reviews",
  },
  {
    name: "Anthony Backer",
    role: "Photography",
    img: "https://jthemes.net/themes/html/etreeks/files/images/team-10.jpg",
    rating: "4.91",
    reviews: "86 Reviews",
  },
  {
    name: "Jorge Stucky",
    role: "Science & Math",
    img: "https://jthemes.net/themes/html/etreeks/files/images/team-11.jpg",
    rating: "4.38",
    reviews: "70 Reviews",
  },
  {
    name: "Jilly Buchanan",
    role: "Real Estate",
    img: "https://jthemes.net/themes/html/etreeks/files/images/team-12.jpg",
    rating: "4.46",
    reviews: "96 Reviews",
  },
];

function TeacherListing() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
    <section className="py-5">
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
    
    </section>
    <LearnBanner/>
  </>
  );
}

export default TeacherListing;

 
 