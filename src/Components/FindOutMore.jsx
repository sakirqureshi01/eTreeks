
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { FaStar } from "react-icons/fa";

import SubCategoriesFind02 from "./subCategoriesFind02";
import CoursesSection from "./CoursesSection";
import RegisterCTA from "./RegisterCTA";

const courses = [
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-18-img.jpg",
    tags: ["Linda J.Rose", "38 Hours"],
    title: "English Gramer Launch Advanced: Upgrade Your Speaking",
    rating: "4.5 (474 Ratings)",
    oldPrice: "$109.99",
    price: "$23.99",
  },
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-20-img.jpg",
    tags: ["Divid Smith", "35 Hours"],
    title: "Beginner English Course: Learn to Speack English Like a Pro!",
    rating: "5 (374 Ratings)",
    oldPrice: "$169.99",
    price: "$33.99",
  },
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-19-img.jpg",
    tags: ["Becky Reed", "44 Hours"],
    title: "Learn English Language: Intermediate",
    rating: "5 (231 Ratings)",
    oldPrice: "$149.99",
    price: "$45.99",
  },
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-1-img.jpg",
    tags: ["Linda J.Rose", "16 Hours"],
    title: "Beginner Level English - Foundation",
    rating: "4.5 (226 Ratings)",
    oldPrice: "$149.99",
    price: "$138.99",
  },
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-2-img.jpg",
    tags: ["Becky Reed", "27 Hours"],
    title: "Diploma in basic English Grammar - Revised 2019",
    rating: "5 (418 Ratings)",
    oldPrice: "$174.99",
    price: "$59.99",
  },
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-15-img.jpg",
    tags: ["Rebert Coronado", "35 Hours"],
    title: "The English Subjunctive - Intermediate",
    rating: "4.5 (372 Ratings)",
    oldPrice: "$119.99",
    price: "$34.99",
  },
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-16-img.jpg",
    tags: ["Kally Brooks", "56 Hours"],
    title: "Complete English Course Beginners",
    rating: "5 (281 Ratings)",
    oldPrice: "$119.99",
    price: "$84.99",
  },
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-17-img.jpg",
    tags: ["Sum Richardson", "30 Hours"],
    title: "Learn English for Beginers: The Ultimate 30-Leasson Course",
    rating: "4.1 (358 Ratings)",
    oldPrice: "$194.99",
    price: "$62.99",
  },
];

function FindOutMore() {
  return (
    <>
      {/* Breadcrumb */}
      
      <div className="container py-3">
        <small className="text-muted">
          Home <span className="mx-2">»</span> English Language Courses
        </small>
      </div>

      {/* HERO SECTION */}
      <section
        className="d-flex align-items-center text-white"
        style={{
          minHeight: "320px",
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(190, 60, 80, 0.85),
              rgba(120, 40, 100, 0.85)
            ),
            url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-5">
            English Language Courses
          </h1>

          <div className="d-flex align-items-center gap-4 my-3 flex-wrap">
            <span>
              <strong>289</strong> courses found
            </span>

            <div className="d-flex gap-3 fs-5">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-envelope"></i>
              <i className="bi bi-bookmark"></i>
            </div>

            <span>
              <strong>8.4k</strong>
            </span>
          </div>

          <p className="fs-5">
            <strong>9,463 students</strong> are learning English Language on eTreeks
          </p>
        </div>
      </section>

      {/* COURSES SLIDER */}
      <section className="py-5">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
            <div>
              <h2 className="fw-bold">Top 10 English Language Courses</h2>
              <p className="text-muted">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a porta
              </p>
            </div>

            <button className="btn btn-outline-danger"
              style={{
    background: "linear-gradient(123deg, #f09819, #ff512f)",
    border: "2px solid #e5e5e5",
    padding: "10px 25px",
    borderRadius: "10px",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => {
    e.target.style.background =
      "linear-gradient(123deg, #ff512f, #f09819)";
    e.target.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.target.style.background =
      "linear-gradient(123deg, #f09819, #ff512f)";
    e.target.style.transform = "scale(1)";
  }}
>
              View All Courses
            </button>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            navigation={{
              prevEl: ".best-prev",
              nextEl: ".best-next",
            }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
          >
            {courses.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card h-100 shadow-sm">
                  <img src={item.img} className="card-img-top" alt="" />

                  <div className="card-body d-flex flex-column">
                    <div className="d-flex gap-2 small text-muted mb-2">
                      {item.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>

                    <h6 className="fw-semibold">{item.title}</h6>

                    
                    <div className="flex items-center text-yellow-500 text-sm mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <span className="text-gray-600 ml-2">
                      {item.rating}
                    </span>
                  </div>

                    <div className="mt-auto">
                      {item.oldPrice && (
                        <del className="text-muted me-2">
                          {item.oldPrice}
                        </del>
                      )}
                      <strong className="text-danger">
                        {item.price}
                      </strong>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <button className="btn btn-outline-secondary best-prev">←</button>
            <button className="btn btn-outline-secondary best-next">→</button>
          </div>

        </div>
      </section>

      <SubCategoriesFind02 />
      <CoursesSection />
      <RegisterCTA />
    </>
  );
}

export default FindOutMore;