import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";
import "../Components/Styles/review.css"
import LearnBanner from "./LearnBanner";


const reviews = [
  {
    text:
      "Etiam sapien a sagittis congue and augue massa varius egestas a suscipit magna tempus aliquet porta magna ipsum and mauris placerat a feugiat primis integer auctor cursus euismod at purus pretium efficitur ipsum orci ligula cubilia laoreet magna.",
    name: "Jim M.",
    role: "Software Engineer",
    img: "https://jthemes.net/themes/html/etreeks/files/images/review-author-1.jpg",
  },
  {
    text:
      "Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur dapibus and libero quisque tristique neque phasellus blandit tristique justo aliquam justo suscipit in magna dignissim",
    name: "Jennifer",
    role: "Graphic Designer",
    img: "https://jthemes.net/themes/html/etreeks/files/images/review-author-2.jpg",
  },
  {
    text:
      "Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum a porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales",
    name: "Joel Peterson",
    role: "Online Student",
    img: "https://jthemes.net/themes/html/etreeks/files/images/review-author-3.jpg",
  },
  {
    text:
      "In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate mullam molestie bibendum quis, aliquet an elementum massa ut sagittis. Aliqum mullam blandit tempor sapien gravida donec ipsum porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec an enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec",
    name: "Michael Deal",
    role: "UX Designer",
    img: "https://jthemes.net/themes/html/etreeks/files/images/review-author-4.jpg",
  },




  {
    text:
      "Ut non mauris libero. Sed consequat posuere nunc, eu porttitor neque dignissim nec. Donec bibendum sodales elit eu blandit. Suspendisse at finibus metus. Integer nulla pulvinar commodo nec, pulvinar sed nisi. Sed augue turpis, mollis a vehicula ornare, dapibus. Mauris donec ociis et magnis sapien sagittis",
    name: "David L.",
    role: "WordPress Student",
    img: "https://jthemes.net/themes/html/etreeks/files/images/review-author-6.jpg",
  },



  {
    text:
      "Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit at tristique justo ut aliquam vitae molestie nunc sapien justo, aliquet purus molestie venenatis aliquam eget lacinia elits",
    name: "Aaron Wall",
    role: "Online Student",
    img: "https://jthemes.net/themes/html/etreeks/files/images/review-author-7.jpg",
  },


    {
    text:
      "Etiam sapien a sagittis congue and augue massa varius egestas a suscipit magna tempus aliquet porta magna ipsum and mauris placerat a feugiat primis integer auctor cursus euismod at purus pretium efficitur ipsum orci ligula cubilia laoreet magna",
    name: "Andre Wisdom",
    role: "PHP Studentt",
    img: "https://jthemes.net/themes/html/etreeks/files/images/review-author-7.jpg",
  },
];

function Reviews() {
  return (
    <>
    
    <section className="py-5">
        
      <div className="container">
         <p className="text-muted small mb-4">
          <a href="/" className="text-decoration-none text-dark fw-semibold">
            Home
          </a>{" "}
          &raquo; <span>Blog Listing</span>
        </p>

        <div className="row g-5">
          {reviews.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <p className="text-muted mb-4">{item.text}</p>

              <div className="d-flex align-items-center gap-3">
                <img src={item.img} className="review-img" alt="" />

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
    </section>
    <LearnBanner/>
    </>
  );
}

export default Reviews;
