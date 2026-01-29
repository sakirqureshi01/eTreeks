import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterANDContact from "./RegisterANDContact";

/* ---------- TAG COMPONENT ---------- */
const Tag = ({ text, isHover, onEnter, onLeave }) => (
  <span
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    style={{
      display: "inline-block",
      border: "1px solid #ddd",
      padding: "6px 14px",
      borderRadius: "6px",
      fontSize: "13px",
      marginRight: "8px",
      cursor: "pointer",
      color: isHover ? "#fff" : "#6c757d",
      backgroundColor: isHover ? "#ff2d55" : "transparent",
      borderColor: isHover ? "#ff2d55" : "#ddd",
      transition: "0.3s",
    }}
  >
    {text}
  </span>
);

/* ---------- BLOG ITEM COMPONENT ---------- */
const BlogItem = ({ img, title, date, desc, tags }) => {
  const [hoverTag, setHoverTag] = useState(null);

  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-start gap-4 mt-5">
        <img
          src={img}
          alt={title}
          style={{
            width: "220px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />

        <div>
          <h4 className="fw-bold">{title}</h4>
          <p className="text-muted small">{date}</p>
          <p className="text-muted">{desc}</p>

          <div className="mt-2">
            {tags.map((tag) => (
              <Tag
                key={tag}
                text={tag}
                isHover={hoverTag === tag}
                onEnter={() => setHoverTag(tag)}
                onLeave={() => setHoverTag(null)}
              />
            ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

/* ---------- MAIN BLOG ---------- */
function Blog() {
  return (
    <>
    <section className="py-4">
      <div className="container">

        {/* Breadcrumb */}
        <p className="text-muted small mb-4">
          <a href="/" className="text-decoration-none text-dark fw-semibold">
            Home
          </a>{" "}
          &raquo; <span>Blog Listing</span>
        </p>

        <div className="row">

          {/* BLOG LIST */}
          <div className="col-lg-8">
            <BlogItem
              img="https://jthemes.net/themes/html/etreeks/files/images/blog/article-3.jpg"
              title="Ligula varius magna porta a pretium"
              date="March 11, 2020 · Joel Peterson"
              desc="Vitae auctor integer a congue magna undo pretium at purus pretium ligula a rutrum luctus risus..."
              tags={["Ideas & Opinions", "Students", "eTreeks News"]}
            />

            <BlogItem
              img="https://jthemes.net/themes/html/etreeks/files/images/blog/article-5.jpg"
              title="20 magna undo at purus pretium"
              date="March 04, 2020 · Jennifer K."
              desc="Integer a congue magna undo pretium at purus pretium ligula..."
              tags={["eTreeks News", "eTreeks for Business"]}
            />

            <BlogItem
              img="https://jthemes.net/themes/html/etreeks/files/images/blog/article-8.jpg"
              title="12 dolor primis libero tempus ligula"
              date="February 24, 2020 · Michael Deal"
              desc="Vitae auctor integer a congue magna undo pretium at purus..."
              tags={["Education Process", "Students"]}
            />

            <BlogItem
              img="https://jthemes.net/themes/html/etreeks/files/images/blog/article-2.jpg"
              title="Ultrice eTreeks justo purus ipsum"
              date="February 19, 2020 · Aaron Wall"
              desc="Pretium at purus pretium ligula and rutrum luctus risus..."
              tags={["eTreeks News", "Education Process"]}
            />
          </div>

          {/* SIDEBAR */}
          <div className="col-lg-4">
            <input
              className="form-control mb-4"
              placeholder="Search"
            />

            <h6 className="fw-bold mb-3">Categories</h6>
            <ul className="list-unstyled">
              {[
                "eTreeks News (36)",
                "Students & Instructors (81)",
                "Ideas & Opinions (76)",
                "Education Process (143)",
                "eTreeks for Business (24)",
                "Uncategorized (42)",
              ].map((cat, i) => (
                <li
                  key={cat}
                  style={{
                    padding: "10px 0",
                    borderBottom:
                      i === 5 ? "none" : "1px dashed #ddd",
                    color: "#0d6efd",
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>

    <RegisterANDContact/>
    </>
  );
}

export default Blog;

























// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../Components/Styles/Blog.css";

// function Blog() {
//   return (
//     <section className="py-4 blog-page">
//       <div className="container">

       
//         <p className="text-muted small mb-4">
//           <a href="/" className="text-decoration-none text-dark fw-semibold">
//             Home
//           </a>{" "}
//           &raquo; <span>Blog Listing</span>
//         </p>

//         <div className="row">

         
//           <div className="col-lg-8">

           
//             <div className="blog-item d-flex mb-5">
//               <img
//                 src="https://jthemes.net/themes/html/etreeks/files/images/blog/article-3.jpg"
//                 alt=""
//                 className="blog-img"
//               />

//               <div className="ms-4">
//                 <h4 className="fw-bold">
//                   Ligula varius magna porta a pretium
//                 </h4>

//                 <p className="text-muted small">
//                   March 11, 2020 - By Joel Peterson
//                 </p>

//                 <p className="text-muted">
//                   Vitae auctor integer a congue magna undo pretium at purus
//                   pretium ligula a rutrum luctus risus and ultrice blandit
//                   justo and purus ipsum neque dolor primis libero tempus...
//                 </p>

//                 <div className="blog-tags">
//                   <span>Ideas & Opinions</span>
//                   <span>Students</span>
//                   <span>eTreeks News</span>
//                 </div>
//               </div>
//             </div>

//             <hr />

            
//             <div className="blog-item d-flex mt-5">
//               <img
//                 src="https://jthemes.net/themes/html/etreeks/files/images/blog/article-5.jpg"
//                 alt=""
//                 className="blog-img"
//               />

//               <div className="ms-4">
//                 <h4 className="fw-bold">
//                   20 magna undo at purus pretium
//                 </h4>

//                 <p className="text-muted small">
//                   March 04, 2020 - By Jennifer K.
//                 </p>

//                 <p className="text-muted">
//                   Integer a congue magna undo pretium at purus pretium ligula
//                   and rutrum luctus risus and ultrice blandit justo purus
//                   ipsum neque dolor primis libero tempus...
//                 </p>

//                 <div className="blog-tags">
//                   <span>eTreeks News</span>
//                   <span>eTreeks for Business</span>
//                 </div>
//               </div>
//             </div>
//             <hr />
//                {/* //////////////// */}
//                 <div className="blog-item d-flex mt-5">
//               <img
//                 src="https://jthemes.net/themes/html/etreeks/files/images/blog/article-8.jpg"
//                 alt=""
//                 className="blog-img"
//               />

//               <div className="ms-4">
//                 <h4 className="fw-bold">
//                   12 dolor primis libero tempus ligula at varius magna porta a pretium
//                 </h4>

//                 <p className="text-muted small">
//                   February 24, 2020 - By Michael Deal
//                 </p>

//                 <p className="text-muted">
//                 Vitae auctor integer a congue magna undo pretium at purus pretium ligula a rutrum luctus risus and ultrice blandit justo purus ipsum...
//                 </p>

//                 <div className="blog-tags">
//                   <span>Education Process</span>
//                   <span>Students</span>
//                 </div>
//               </div>
//             </div>
//             <hr />
             

//                 <div className="blog-item d-flex mt-5">
//               <img
//                 src="https://jthemes.net/themes/html/etreeks/files/images/blog/article-2.jpg"
//                 alt=""
//                 className="blog-img"
//               />

//               <div className="ms-4">
//                 <h4 className="fw-bold">
//                   Ultrice eTreeks justo purus ipsum igula varius magna porta a pretium
//                 </h4>

//                 <p className="text-muted small">
//                   February 19, 2020 - By Aaron Wall
//                 </p>

//                 <p className="text-muted">
//                 Pretium at purus pretium ligula and rutrum luctus risus undo ultrice blandit justo purus ipsum neque dolor primis libero tempus...
//                 </p>

//                 <div className="blog-tags">
//                   <span>eTreeks News</span>
//                   <span>Education Process</span>
//                 </div>
//               </div>
//             </div>
//             <hr />
//           </div>

        
//           <div className="col-lg-4">

          
//             <div className="mb-4">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search"
//               />
//             </div>

            
//             <div className="blog-categories">
//               <h6 className="fw-bold mb-3">Categories</h6>

//               <ul className="list-unstyled">
//                 <li>eTreeks News (36)</li>
//                 <li>Students & Instructors (81)</li>
//                 <li>Ideas & Opinions (76)</li>
//                 <li>Education Process (143)</li>
//                 <li>eTreeks for Business (24)</li>
//                 <li>Uncategorized (42)</li>
//               </ul>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Blog;
