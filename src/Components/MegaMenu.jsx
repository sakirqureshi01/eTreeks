

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MegaMenu() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">

          {/* LEFT: TOP COURSES */}
          <div className="col-lg-3">
            <h6 className="fw-bold mb-4">
              TOP 5 ONLINE COURSES:
            </h6>

            <ul className="list-unstyled mb-0">
              {[
                "English for Tourism",
                "Python Programming - Working with Lists and Files",
                "Computer Networking - Wired and Wireless Networks",
                "Digital Marketing: The Ultimate Guide to Strategic",
                "The Complete iOS 10 & Swift 3 Developer Course",
              ].map((course, i) => (
                <li
                  key={i}
                  style={{
                    padding: "14px 0",
                    borderBottom:
                      i === 4 ? "none" : "1px dashed #dcdcdc",
                    color: "#6c757d",
                    cursor: "pointer",
                  }}
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER: FEATURED NEWS */}
          <div className="col-lg-6">
            <h6 className="fw-bold mb-4">
              FEATURED NEWS:
            </h6>

            <img
              src="https://jthemes.net/themes/html/etreeks/files/images/blog/featured-news.jpg"
              alt="featured"
              className="img-fluid mb-4"
            />

            <h4 className="fw-bold">
              Study smart and save time with these 5 tips
            </h4>
            <p className="text-muted">
              Porta semper lacus cursus, feugiat primis ultrice in ligula
              risus auctor tempus feugiat dolor impedit magna...
            </p>
          </div>

          {/* RIGHT: LATEST NEWS */}
          <div className="col-lg-3">
            <h6 className="fw-bold mb-4">
              LATEST NEWS:
            </h6>

            {[
              {
                img: "https://jthemes.net/themes/html/etreeks/files/images/blog/latest-post-1.jpg",
                text:
                  "Etiam sapien risus ante auctor tempus an accumsan...",
                time: "18 hours ago",
              },
              {
                img: "https://jthemes.net/themes/html/etreeks/files/images/blog/latest-post-2.jpg",
                text:
                  "Blandit tempor sapien ipsum, porta risus auctor justo...",
                time: "Feb 17, 2020",
              },
              {
                img: "https://jthemes.net/themes/html/etreeks/files/images/blog/latest-post-3.jpg",
                text:
                  "Cursus risus an auctor risus laoreet undo auctor varius...",
                time: "Feb 07, 2020",
              },
            ].map((item, i, arr) => (
              <div
                key={i}
                className="d-flex gap-3"
                style={{
                  padding: "15px 0",
                  borderBottom:
                    i === arr.length - 1
                      ? "none"
                      : "1px dashed #dcdcdc",
                }}
              >
                <img
                  src={item.img}
                  alt="news"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />

                <div>
                  <p
                    className="mb-1"
                    style={{ fontSize: "14px" }}
                  >
                    {item.text}
                  </p>
                  <small className="text-muted">
                    {item.time}
                  </small>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default MegaMenu;



