import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
//import '../Components/Styles/TredingCategeris.css'

import {
  FaMicrochip,
  FaCogs,
  FaFlask,
  FaChartLine,
  FaLanguage,
  FaCamera,
  FaPaintBrush,
  FaMusic,
  FaCode,
  FaBriefcase,
  FaHeartbeat,
} from "react-icons/fa";

const categories = [
  
  { title: "IT & Software", count: 54, icon: <FaMicrochip />, color: "#ff7a3d" },
  { title: "Engineering", count: 68, icon: <FaCogs />, color: "#16a085" },
  { title: "Science", count: 59, icon: <FaFlask />, color: "#f1b604" },
  { title: "Marketing", count: 28, icon: <FaChartLine />, color: "#8e8ec7" },
  { title: "Languages", count: 137, icon: <FaLanguage />, color: "#ff4d00" },
  { title: "Photography", count: 32, icon: <FaCamera />, color: "#2ecc71" },
  { title: "Design", count: 41, icon: <FaPaintBrush />, color: "#9b59b6" },
  { title: "Music", count: 23, icon: <FaMusic />, color: "#e67e22" },
  { title: "Programming", count: 85, icon: <FaCode />, color: "#2980b9" },
  { title: "Business", count: 64, icon: <FaBriefcase />, color: "#34495e" },
  { title: "Health", count: 19, icon: <FaHeartbeat />, color: "#e74c3c" },

];

function TrendingCategories() {
  return (
    <section className="mb-5 bg-white">
      <div className="container ">

        {/* Header */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-5 "
       
       >
          <div>
            <h2 className="fw-bold fs-3  mb-6">
              Top Trending Categories 
            </h2>
            <p className="text-muted mb-3">
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
            </p>
          </div>

          <Link to="/view-all-categories">
            <button className="btn btn-outline-danger px-4 py-2 mt-5">
              View All Categories
            </button>
          </Link>
        </div>

        {/* Slider */}
        <Swiper
        
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={{ delay: 3000 }}
          spaceBetween={10}
         slidesPerView={5}
         


          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 5 },
          }}

        >
          {categories.map((item, index) => (
            <SwiperSlide key={index} >
              
              <Link
  to="/LanguageCourses"
  className="text-decoration-none"
>
  <div
    className="category-card text-white text-center d-flex flex-column align-items-center justify-content-center rounded-4"
    style={{
      backgroundColor: item.color,
      height: "290px",
      cursor: "pointer",
    }}
  >
    <div className="fs-1 mb-3">{item.icon}</div>
    <h5 className="fw-semibold mb-1">{item.title}</h5>
    <p className="mb-0 opacity-75">{item.count} Courses</p>
  </div>
</Link>

             
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default TrendingCategories;




