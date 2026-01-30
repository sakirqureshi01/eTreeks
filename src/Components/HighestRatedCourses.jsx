import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar, FaUsers } from "react-icons/fa";

const courses = [
  {
    title: "English for Beginners: Intensive English Speaking Course",
    students: 37348,
    hours: "54 Total Hours",
    updated: "Updated 2/2020",
    rating: 4.92,
    reviews: 731,
    price: "$32.99",
    oldPrice: "$59.99",
  },
  {
    title: "Complete Spanish Course: Learn Spanish Language | Beginners",
    students: 25491,
    hours: "48 Total Hours",
    updated: "Updated 2/2020",
    rating: 4.78,
    reviews: 469,
    price: "$24.99",
    oldPrice: "$44.99",
  },
  {
    title: "Deutch: Master 120 Common Phrasal Verbs",
    students: 29035,
    hours: "83 Total Hours",
    updated: "Updated 12/2019",
    rating: 4.89,
    reviews: 576,
    price: "$44.99",
    oldPrice: "$72.99",
  },
  {
    title: "French - Course 2 | Language Lessons For Beginners",
    students: 28035,
    hours: "36 Total Hours",
    updated: "Updated 12/2019",
    rating: 4.84,
    reviews: 417,
    price: "$19.99",
    oldPrice: "$39.99",
  },
  {
    title: "Spanish for Beginners. The Complete Method. Level 2",
    students: 24651,
    hours: "62 Total Hours",
    updated: "Updated 01/2020",
    rating: 4.85,
    reviews: 458,
    price: "$52.99",
    oldPrice: "$74.99",
  },
  {
    title: "Practice and Perfect Your French - Intermediate Level",
    students: 19163,
    hours: "28 Total Hours",
    updated: "Updated 11/2019",
    rating: 4.92,
    reviews: 461,
    price: "$39.99",
    oldPrice: "$62.99",
  },
];

function HighestRatedCourses() {
  return (
    <section className="py-5 bg-white" style={{marginTop:"-100px"}}>
      <div className="container">

        {/* HEADER */}
        <div className="mb-5">
          <h2 className="fw-bold mb-2">
            Highest Rated Online Courses
          </h2>
          <p className="text-muted col-lg-7 mb-0">
            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
            libero tempus, blandit posuere and ligula varius magna a porta
          </p>
        </div>

        {/* COURSE LIST */}
        <div className="row g-4">
          {courses.map((course, index) => (
            <div className="col-lg-6" key={index}>
              <div className="border rounded-3 p-4 h-100">

                {/* TOP ROW */}
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h6 className="fw-semibold mb-0 w-75">
                    {course.title}
                  </h6>

                  <div className="text-end">
                    <strong className="fs-5">
                      {course.price}
                    </strong>
                    <div className="text-muted text-decoration-line-through small">
                      {course.oldPrice}
                    </div>
                  </div>
                </div>

                {/* META */}
                <div className="d-flex align-items-center gap-3 text-muted small mb-2">
                  <span className="d-flex align-items-center gap-1">
                    <FaUsers />
                    {course.students}
                  </span>
                  <span>
                    {course.hours} – {course.updated}
                  </span>
                </div>

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

export default HighestRatedCourses;
