import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
/*
const courses = [
  {
    slug: "beginner-english-foundations",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-1-img.jpg",
    tags: ["Languages", "English"],
    title: "Beginner Level English - Foundations",
    rating: 4.5,
    reviews: 26,
    oldPrice: "$149.99",
    price: "$138.99",
  },
  {
    slug: "beginner-english-foundations",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-2-img.jpg",
    tags: ["Languages", "English"],
    title: "Diploma in Basic English Grammar - Revised 2019",
    rating: 5,
    reviews: 118,
    oldPrice: "$174.99",
    price: "$59.99",
  },
  {
    slug: "beginner-english-foundations",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-3-img.jpg",
    tags: ["IT Management"],
    title: "Diploma in Information Technology Management",
    rating: 4.5,
    reviews: 72,
    oldPrice: "$119.99",
    price: "$34.99",
  },
  {
    slug: "beginner-english-foundations",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-4-img.jpg",
    tags: ["SEO", "Marketing"],
    title: "Google AdWords for Beginners 2020",
    rating: 5,
    reviews: 281,
    oldPrice: null,
    price: "Free Course",
  },
  {
    slug: "/wordpress",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-5-img.jpg",
    tags: ["Design", "Wordpress"],
    title: "Wordpress for Beginners – Master WordPress Quickly",
    rating: 4.5,
    reviews: 58,
    oldPrice: "$94.99",
    price: "$62.99",
  },
  {
    slug: "beginner-english-foundations",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-9-img.jpg",
    tags: ["Science", "Diploma"],
    title: "Industrial Engineering Control Value Basics",
    rating: 5,
    reviews: 31,
    oldPrice: "$149.99",
    price: "$45.99",
  },
  {
    slug: "beginner-english-foundations",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-8-img.jpg",
    tags: ["Internet", "Marketing"],
    title: "Instagram Marketing 2020: Step-By-Step Guide",
    rating: 5,
    reviews: 774,
    oldPrice: "$169.99",
    price: "$33.99",
  },
  {
    slug: "beginner-english-foundations",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-10-img.jpg",
    tags: ["Science", "Engines"],
    title: "Diesel Engine Cycles, Maintenance & Control",
    rating: 4.5,
    reviews: 26,
    oldPrice: "$154.99",
    price: "$41.99",
  },
];*/

const courses = [
  {
    slug: "english-foundation",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-1-img.jpg",
    tags: ["Languages", "English"],
    title: "Beginner Level English - Foundations",
    rating: 4.5,
    reviews: 26,
    oldPrice: "$149.99",
    price: "$138.99",
  },
  {
    slug: "basic-english-grammar",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-2-img.jpg",
    tags: ["Languages", "English"],
    title: "Diploma in Basic English Grammar - Revised 2019",
    rating: 5,
    reviews: 118,
    oldPrice: "$174.99",
    price: "$59.99",
  },
  {
    slug: "it-management",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-3-img.jpg",
    tags: ["IT Management"],
    title: "Diploma in Information Technology Management",
    rating: 4.5,
    reviews: 72,
    oldPrice: "$119.99",
    price: "$34.99",
  },
  {
    slug: "google-adwords",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-4-img.jpg",
    tags: ["SEO", "Marketing"],
    title: "Google AdWords for Beginners 2020",
    rating: 5,
    reviews: 281,
    oldPrice: null,
    price: "Free Course",
  },
  {
    slug: "wordpress",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-5-img.jpg",
    tags: ["Design", "Wordpress"],
    title: "Wordpress for Beginners – Master WordPress Quickly",
    rating: 4.5,
    reviews: 58,
    oldPrice: "$94.99",
    price: "$62.99",
  },

    {
    slug: "english-foundation",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-9-img.jpg",
    tags: ["Scince", "Diploma"],
    title: "Industrial engineering- Control Valve Basics",
    rating: 5,
    reviews: 31,
    oldPrice: "$149.99",
    price: "$45.99",
  },

    {
    slug: "english-foundation",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-8-img.jpg",
    tags: ["Internet", "Marketing"],
    title: "Instagram Marketing 2020: A Step-By-Step to 10,000 Followes",
    rating: 5,
    reviews: 374,
    oldPrice: "$169.99",
    price: "$33.99",
  },

    {
    slug: "english-foundation",
    img: "https://jthemes.net/themes/html/etreeks/files/images/courses/course-10-img.jpg",
    tags: ["Scince", "Engines"],
    title: "Diesel Engine Cycles,Maitenance,& Control",
    rating: 5,
    reviews: 374,
    oldPrice: "$154.99",
    price: "$41.99",
  },
];



function CoursesSection() {
  return (
  // <section className="py-4  bg-Secondary ">
   <section
      className="d-flex align-items-center"
      style={{
        minHeight: "90vh",
        backgroundImage:
          "url('https://qspiders.com/BackgroundWave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
  <div className="container">
    <div className="row g-4">

      {courses.map((course, index) => (
        <div className="col-lg-3 col-md-6 " key={index}>
          
          <Link
            to={`/wordpress/${course.slug}`}
            className="text-decoration-none text-dark  "
          >
            <div
              className="bg-white rounded-3 overflow-hidden h-100 shadow-sm border boeder"
              style={{ transition: "0.3s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.classList.add("shadow");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.classList.remove("shadow");
              }}
            >
              {/* Image */}
              <img
                src={course.img}
                alt={course.title}
                className="w-100"
                style={{
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              {/* Body */}
              <div className="p-4">

                {/* Tags */}
                <div className="mb-2">
                  {course.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="badge bg-#f0f1f2  text-dark me-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h5 className="fw-semibold mb-2" style={{ fontSize: "17px" }}>
                  {course.title}
                </h5>

                {/* Rating */}
                <div className="text-warning small mb-2">
                  ⭐⭐⭐⭐⭐
                  <span className="text-muted ms-2">
                    {course.rating} ({course.reviews} Ratings)
                  </span>
                </div>

                {/* Price */}
                <div className="fs-5">
                  {course.oldPrice && (
                    <del className="text-muted me-2">
                      {course.oldPrice}
                    </del>
                  )}
                  <strong className="text-dark">
                    {course.price}
                  </strong>
                </div>

              </div>
            </div>
          </Link>

        </div>
      ))}

    </div>
  </div>
</section>

  );
}

export default CoursesSection;













