import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const testimonials = [
  {
    text:
      "Etiam sapien a sagittis congue and augue massa varius egestas a suscipit magna undo tempus aliquet porta magna ipsum and mauris placerat feugiat primis integer an auctor cursus euismod at purus pretium efficitur ipsum laoreet augue egestas.",
    name: "Jim M.",
    role: "Software Engineer",
    img: "https://jthemes.net/themes/html/etreeks/files/images/review-author-1.jpg",
  },
  {
    text:
      "Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec. Dapibus curabitur and libero quisque tristique neque phasellus blandit tristique",
    name: "Jennifer",
    role: "Graphic Designer",
    img: "https://jthemes.net/themes/html/etreeks/files/images/review-author-2.jpg",
  },
  {
    text:
      "Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum a porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus",
    name: "Joel Peterson",
    role: "Online Student",
    img: "https://jthemes.net/themes/html/etreeks/files/images/review-author-3.jpg",
  },
  {
    text:
      "In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate mullam molestie bibendum quis, aliquet an elementum massa ut sagittis. Aliqum mullam blandit tempor sapien gravida donec ipsum porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et sem magnis sapien sagittis sapien",
    name: "Michael Deal",
    role: "UX Designer",
    img: "https://jthemes.net/themes/html/etreeks/files/images/review-author-4.jpg",
  },
];

////////////////////////////////

function WordPress() {

const { slug } = useParams();
console.log(slug);


  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-8">
            <h1 className="fw-bold mb-3">
              WordPress for Beginners: Create a Website Step by Step
            </h1>

            <p className="text-muted">
              Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo.
              Velna vitae auctor congue magna nihil impedit ligula risus.
            </p>

            <p className="text-muted small">
              Created by: <strong>Kally Brooks</strong> · Last updated: 2/2020 ·
              Languages: English, German + 7 more
            </p>

            <div className="d-flex align-items-center gap-2 mb-4">
              <div className="text-warning">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="text-muted">
                4.84 (468 Ratings) · 14,425 Students Enrolled
              </span>
            </div>

            {/* WHAT YOU'LL LEARN */}
            <div className="learn-box p-4 mb-5 bg-light">
              <h5 className="fw-bold mb-3">What you'll learn</h5>
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>Nullam rutrum eget nunc varius</li>
                    <li>Integer congue magna at pretium purus</li>
                    <li>Risus at congue etiam aliquam</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>Pretim ligula at rutrum dolor auctor</li>
                    <li>Ligula at rutrum risus integer</li>
                    <li>Congue etiam aliquam egestas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* REQUIREMENTS */}
            <h5 className="fw-bold">Requirements</h5>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, lectus laoreet impedit gestas. Aenean magna ligula eget dolor suscipit egestas viverra dolor iaculis luctus magna suscipit egestas
            </p>
            <ul>
              <li>Pretim ligula auctor nulla vitae massa</li>
              <li>Rutrum risus integer magna</li>
              <li>Aliquam sapien egestas posuere</li>
            </ul>
            {/* <div className=""></div> */}
            <h5 className="fw-bold">Course description</h5>
            <p className="text-muted">
              Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo
            </p>
            <ul>
              <li>Pretium ligula dolor auctor nulla vitae massa a purus aliqum blandit</li>
              <li>Ligula at rutrum risus integer congue magna at pretium purus pretium gravida</li>
              <li>Congue etiam aliquam sapien egestas posuere auctor congue magna</li>
              <li>Aliquet elementum massa vestibulum ut sagittis massa lorem</li>
            </ul>






            <section className="py-5 ">
      <div className="container">
        <div className="row ">
          <div className="col-lg-8 ">

            {testimonials.map((item, index) => (
              <div className="testimonial-card mb-4 border boeder-1"  key={index}>
                <p className="text-muted mb-4">{item.text}</p>

                <div className="d-flex align-items-center gap-3">
                 <img
                 src={item.img}
                className="rounded-circle"
                 width="55"
                 height="55"
                  style={{ objectFit: "cover" }}
/>

                  <div>
                    <div className="text-warning mb-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    <h6 className="mb-0 fw-semibold">{item.name}</h6>
                    <small className="text-muted">{item.role}</small>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
          </div>
{/* ////////////////////////////////////////// */}

      
        
          
      
      
   
          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4">
            <div className="course-card shadow-sm">
              <img
                src="https://jthemes.net/themes/html/etreeks/files/images/courses/course-5-img.jpg"
                className="img-fluid rounded-top"
                alt="course"
              />

              <div className="p-4">
                <h3 className="fw-bold">
                  $74.99 <del className="text-muted fs-6">$124.99</del>
                </h3>

                <p className="text-danger small">
                  16 days left at this price!
                </p>

                <button className="btn btn-danger w-100 mb-3">
                  Start Course Now
                </button>

                <button className="btn btn-outline-secondary w-100 mb-4">
                  Add To List
                </button>

                <h6 className="fw-bold">This course includes:</h6>
                <ul className="list-unstyled text-muted small">
                  <li>✔ English, German, Italian + more</li>
                  <li>✔ 3 hours on-demand video</li>
                  <li>✔ 12 downloadable resources</li>
                  <li>✔ Full lifetime access</li>
                  <li>✔ Access on mobile & TV</li>
                  <li>✔ Certificate of Completion</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WordPress;




//  WordPress