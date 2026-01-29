
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const courses = [
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-1-img.jpg",
    tags: ["Languages", "English"],
    title: "Beginner Level English Foundation",
    rating: "4.5 (26 Ratings)",
    oldPrice: "$149.99",
    price: "$138.99",
  },
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-2-img.jpg",
    tags: ["Languages", "English"],
    title: "Diploma in Basic English Grammar - Revised 2019",
    rating: "5 (118 Ratings)",
    oldPrice: "$174.99",
    price: "$59.99",
  },
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-3-img.jpg",
    tags: ["Network Security"],
    title: "Computer Cyber Security: End Point Protection",
    rating: "4.5 (72 Ratings)",
    oldPrice: "$199.99",
    price: "$34.99",
  },
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-4-img.jpg",
    tags: ["SEO", "Marketing"],
    title: "Google AdWords for Beginners 2020",
    rating: "5 (581 Ratings)",
    price: "Free Course",
  },
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-5-img.jpg",
    tags: ["Design", "WordPress"],
    title: "WordPress for Beginners – Master Quickly",
    rating: "4.15 (58 Ratings)",
    oldPrice: "$194.99",
    price: "$62.99",
  },
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-6-img.jpg",
    tags: ["Software", "Productivity"],
    title: "Excel Essentials Series Level 1 & 2",
    rating: "5 (31 Ratings)",
    oldPrice: "$149.99",
    price: "$45.99",
  },
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-7-img.jpg",
    tags: ["Web Design", "HTML5"],
    title: "Landing Page Design & CRO 2020",
    rating: "4.8 (74 Ratings)",
    oldPrice: "$109.99",
    price: "$23.99",
  },
  {
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-8-img.jpg",
    tags: ["Internet", "Marketing"],
    title: "Instagram Marketing 2020 Step-By-Step",
    rating: "5 (374 Ratings)",
    oldPrice: "$169.99",
    price: "$33.99",
  },
];

function BestCoursesAllTime() {
  return (
    <section className="py-5 bg-white">
      <div className="container">

        {/* HEADER */}
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <div>
            <h2 className="fw-bold fs-3 mb-1">
              Best Courses of All-Time
            </h2>
            <p className="text-muted mb-0">
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
            </p>
          </div>

          <Link to="/View All Courses-001">
            <button className="btn btn-outline-danger px-4 py-2">
              View All Courses
            </button>
          </Link>
        </div>

        {/* SLIDER */}
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
              <div className="card h-100 shadow-sm course-card">

                <img
                  src={item.img}
                  alt=""
                  className="card-img-top course-img"
                />

                <div className="card-body p-4">

                  {/* TAGS */}
                  <div className="mb-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="badge bg-light text-dark fw-normal me-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* TITLE */}
                  <h5 className="fw-semibold fs-6 mb-2">
                    {item.title}
                  </h5>

                  {/* RATING */}
                  <div className="d-flex align-items-center text-warning small mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <span className="text-muted ms-2">
                      {item.rating}
                    </span>
                  </div>

                  {/* PRICE */}
                  <div className="fs-6 mt-2">
                    {item.oldPrice && (
                      <del className="text-muted me-2">
                        {item.oldPrice}
                      </del>
                    )}
                    <strong>{item.price}</strong>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* NAV BUTTONS */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-outline-secondary best-prev">←</button>
          <button className="btn btn-outline-secondary best-next">→</button>
        </div>

      </div>
    </section>
  );
}

export default BestCoursesAllTime;













// import "bootstrap/dist/css/bootstrap.min.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { Link } from "react-router-dom";
// import "swiper/css";
// import { FaStar } from "react-icons/fa";
// import "swiper/css/navigation";


// const courses = [
//   {
//     img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-1-img.jpg",
//     tags: ["Languages", "English"],
//     title: "Beginner Level English Foundation",
//     rating: "4.5 (26 Ratings)",
//     oldPrice: "$149.99",
//     price: "$138.99",
//   },
//   {
//     img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-2-img.jpg",
//     tags: ["Languages", "English"],
//     title: "Diploma in Basic English Grammar - Revised 2019",
//     rating: "5 (118 Ratings)",
//     oldPrice: "$174.99",
//     price: "$59.99",
//   },
//   {
//     img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-3-img.jpg",
//     tags: ["Network Security"],
//     title: "Computer Cyber Security: End Point Protection",
//     rating: "4.5 (72 Ratings)",
//     oldPrice: "$199.99",
//     price: "$34.99",
//   },
//   {
//     img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-4-img.jpg",
//     tags: ["SEO", "Marketing"],
//     title: "Google AdWords for Beginners 2020",
//     rating: "5 (581 Ratings)",
//     price: "Free Course",
//   },
//   {
//     img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-5-img.jpg",
//     tags: ["Design", "WordPress"],
//     title: "WordPress for Beginners – Master Quickly",
//     rating: "4.15 (58 Ratings)",
//     oldPrice: "$194.99",
//     price: "$62.99",
//   },
//   {
//     img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-6-img.jpg",
//     tags: ["Software", "Productivity"],
//     title: "Excel Essentials Series Level 1 & 2",
//     rating: "5 (31 Ratings)",
//     oldPrice: "$149.99",
//     price: "$45.99",
//   },
//   {
//     img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-7-img.jpg",
//     tags: ["Web Design", "HTML5"],
//     title: "Landing Page Design & CRO 2020",
//     rating: "4.8 (74 Ratings)",
//     oldPrice: "$109.99",
//     price: "$23.99",
//   },
//   {
//     img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-8-img.jpg",
//     tags: ["Internet", "Marketing"],
//     title: "Instagram Marketing 2020 Step-By-Step",
//     rating: "5 (374 Ratings)",
//     oldPrice: "$169.99",
//     price: "$33.99",
//   },
// ];

// function BestCoursesAllTime() {
//   return (
//     <section className="py-10 bg-white">
//       <div className="container">

//         {/* HEADER */}
//         <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
//           <div>
//             <h2 className="fw-bold text-2xl mb-1">
//               Best Courses of All-Time
//             </h2>
//             <p className="text-muted">
//               Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
//             </p>
//           </div>

//           <Link to="/View All Courses-001">
            
//             <button className="btn btn-outline-danger px-4 py-2
//             ">

//               View All Courses
//             </button>
//           </Link>
//         </div>

//         <Swiper
//                     modules={[Navigation, Autoplay]}
//                     autoplay={{ delay: 3000 }}
//                     navigation={{
//                       prevEl: ".best-prev",
//                       nextEl: ".best-next",
//                     }}
//                     spaceBetween={20}
//                     breakpoints={{
//                       0: { slidesPerView: 1 },
//                       768: { slidesPerView: 2 },
//                       992: { slidesPerView: 4 },
//                     }}
//                   >
//                     {courses.map((item, index) => (
//                       <SwiperSlide key={index}>
//                         <div className="card h-100 shadow-sm">
//                           <img
//                   src={item.img}
//                   alt=""
//                   className="w-full h-[200px] object-cover"
//                 />

               
//                 <div className="p-4">
                 
//                   <div className="mb-2">
//                     {item.tags.map((tag, i) => (
//                       <span
//                         key={i}
//                         className="
//                           inline-block bg-gray-100
//                           px-2 py-1 text-sm
//                           rounded-md mr-2 mb-2
//                         "
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

                  
//                   <h5 className="text-[16px] font-semibold mb-2">
//                     {item.title}
//                   </h5>

                
//                   <div className="flex items-center text-yellow-500 text-sm mb-2">
//                     {[...Array(5)].map((_, i) => (
//                       <FaStar key={i} />
//                     ))}
//                     <span className="text-gray-600 ml-2">
//                       {item.rating}
//                     </span>
//                   </div>

                
//                   <div className="text-lg mt-2">
//                     {item.oldPrice && (
//                       <del className="text-gray-400 mr-2">
//                         {item.oldPrice}
//                       </del>
//                     )}
//                     <strong className="text-gray-800">
//                       {item.price}
//                     </strong>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="d-flex justify-content-center gap-3 mt-4">
//             <button className="btn btn-outline-secondary best-prev">←</button>
//             <button className="btn btn-outline-secondary best-next">→</button>
//           </div>

//       </div>
//     </section>
//   );
// }

// export default BestCoursesAllTime;




