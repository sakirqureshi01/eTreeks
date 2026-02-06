
import "../Components/Styles/BestCourses.css"

import "bootstrap/dist/css/bootstrap.min.css";
import { FaUsers, FaStar } from "react-icons/fa";

const courses = [
  {
    title: "English for Beginners: Intensive English Speaking Course",
    students: 7348,
    hours: "54 Total Hours",
    updated: "Updated 2/2020",
    rating: 4.89,
    reviews: 331,
    price: "$34.99",
    oldPrice: "$64.99",
  },
  {
    title: "IT Management - Building Information Systems",
    students: 15491,
    hours: "48 Total Hours",
    updated: "Updated 2/2020",
    rating: 4.08,
    reviews: 264,
    price: "$22.99",
    oldPrice: "$44.99",
  },
  {
    title: "Computer Networking - Wired & Wireless Networks",
    students: 12035,
    hours: "83 Total Hours",
    updated: "Updated 12/2019",
    rating: 4.19,
    reviews: 276,
    price: "$49.99",
    oldPrice: "$72.99",
  },
  {
    title: "Hidden Secrets Of Sales & Marketing - Revised 2019",
    students: 17035,
    hours: "36 Total Hours",
    updated: "Updated 12/2019",
    rating: 4.79,
    reviews: 417,
    price: "$56.99",
    oldPrice: "$84.99",
  },
  {
    title: "Spanish for Beginners. The Complete Method. Level 2",
    students: 10651,
    hours: "62 Total Hours",
    updated: "Updated 01/2020",
    rating: 4.15,
    reviews: 458,
    price: "$29.99",
    oldPrice: "$74.99",
  },
  {
    title: "Biology - Evolution, Natural Selection and DNA",
    students: 8163,
    hours: "28 Total Hours",
    updated: "Updated 11/2019",
    rating: 4.42,
    reviews: 282,
    price: "$38.99",
    oldPrice: "$62.99",
  },
];

function BestCourses() {
  return (
    <section className="bg-light py-5"
       
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
            <div className="col-lg-6" key={index}>
              <div className="course-card bg-white border rounded-4 p-4 h-100">

                {/* TOP ROW */}
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="fw-semibold fs-5 w-75 mb-0">
                    {course.title}
                  </h5>

                  <div className="text-end">
                    <div className="d-flex align-items-center justify-content-end text-muted small mb-1">
                      <FaUsers className="me-1" />
                      {course.students}
                    </div>

                    <strong className="fs-5 d-block">
                      {course.price}
                    </strong>

                    <del className="text-muted small">
                      {course.oldPrice}
                    </del>
                  </div>
                </div>

                {/* INFO */}
                <p className="text-muted small mb-2">
                  {course.hours} – {course.updated}
                </p>

                {/* RATING */}
                <div className="d-flex align-items-center text-warning small">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-muted ms-2">
                    {course.rating} ({course.reviews} Reviews)
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default BestCourses;
