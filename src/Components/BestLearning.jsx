
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const data = [
  {
    icon: "bi-journal-bookmark",
    title: "Trending Courses",
    desc: "Augue luctus egestas luctus neque purus an ipsum neque dolor primis libero tempus at blandit massa",
  },
  {
    icon: "bi-person-badge",
    title: "Certified Teachers",
    desc: "Augue luctus egestas luctus neque purus an ipsum neque dolor primis libero tempus at blandit massa",
  },
  {
    icon: "bi-award",
    title: "Graduation Certificate",
    desc: "Augue luctus egestas luctus neque purus an ipsum neque dolor primis libero tempus at blandit massa",
  },
  {
    icon: "bi-laptop",
    title: "Online Course Facilities",
    desc: "Augue luctus egestas luctus neque purus an ipsum neque dolor primis libero tempus at blandit massa",
  },
  {
    icon: "bi-book",
    title: "Free Books & Library",
    desc: "Augue luctus egestas luctus neque purus an ipsum neque dolor primis libero tempus at blandit massa",
  },
  {
    icon: "bi-journals",
    title: "Free Study Materials",
    desc: "Augue luctus egestas luctus neque purus an ipsum neque dolor primis libero tempus at blandit massa",
  },
];

function BestLearning() {
  return (
 
    <>
    {/* <section className="bg-white text-center py-3" style={{ marginTop: "-90px" }}> */}
<section className="bg-white text-center py-3"
      style={{
        minHeight: "90vh",
        backgroundImage:
          "url('https://qspiders.com/BackgroundWave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop:"-90px"
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
       
          <h2 className="fw-bold">Best Learning Opportunities</h2>
          <p className="text-muted mt-2 mx-auto" style={{ maxWidth: "750px" }}>
            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
            libero tempus, blandit posuere and ligula varius magna a porta
          </p>
        </div>

        {/* Cards */}
       
        <div className="row g-4">
          {data.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="card h-100 border-0 shadow-sm p-4">
                
                <div className="mb-3 text-primary fs-1">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <h5 className="fw-semibold mb-2">{item.title}</h5>
                <p className="text-muted mb-0 small">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
      
    </section>
    <hr />
    
</>
   
  );
}

export default BestLearning;
