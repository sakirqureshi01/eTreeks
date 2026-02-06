import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/styles/CareerTracks.css";
import DemoBooking from "./DemoBooking";
import { Link } from "react-router-dom";

const tracks = [
  
  {
    title: "Software Developer",
    img: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
  },
  {
    title: "UI/UX Designer",
    img: "https://cdn-icons-png.flaticon.com/512/921/921594.png",
  },
  {
    title: "DevOps",
    img: "https://cdn-icons-png.flaticon.com/512/919/919831.png",
  },
  {
    title: "Cloud Engineer – AWS, Azure & GCP",
    img: "https://cdn-icons-png.flaticon.com/512/4149/4149677.png",
  },
  {
    title: "Software Test Engineer",
    img: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
  },
  {
    title: "Automation Engineer",
    img: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
  },
  {
    title: "Performance Test Engineer",
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
  },
  {
    title: "Banking Insurance & Finance",
    img: "https://cdn-icons-png.flaticon.com/512/2830/2830284.png",
  },
  {
    title: "Data Science",
    img: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
  },
  {
    title: "Data Analytics",
    img: "https://cdn-icons-png.flaticon.com/512/1260/1260165.png",
  },
  {
    title: "Data Engineer",
    img: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  },
  {
    title: "AI / ML",
    img: "https://cdn-icons-png.flaticon.com/512/4712/4712100.png",
  },

];

function CareerTracks() {
  return (
    <>
       <section
      className=" align-items-center"
      style={{
        minHeight: "90vh",
        backgroundImage:
          "url('https://qspiders.com/BackgroundWave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    <h2 className="fw-bold  px-5">
            Book Your Demo Class
          </h2>
    <Link to="/Demo-class" style={{textDecoration:"none", color:"black"}}>
    <div className="container my-5">
      <div className="row g-4">
       {tracks.map((item, index) => (
  <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
    <div className="career-card text-center">
      <div className="icon mb-3">
        <img
          src={item.img}
          alt={item.title}
          width="50"
        />
      </div>
      <h6 className="fw-bold">{item.title}</h6>
    </div>
  </div>
 
  
))}



      </div>
    </div>

   </Link>
  </section>
    </>
  );
}

export default CareerTracks;