import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Styles/TeacherProfile.css"
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import BestCoursesAllTime from "./BestCoursesAllTime";
import TeacherBusinessSection from "./TeacherBusinessSection";
import TeacherListing from "./TeacherListing";

 function TeacherProfile() {
  return (
    <>
    <section className="py-5">
      <div className="container">

        {/* Breadcrumb */}
        <div className="mb-4 text-muted">
          Home <span className="mx-2">»</span> All Teachers <span className="mx-2">»</span>
          <strong>David Smith</strong>
        </div>

        <hr />

        <div className="row mt-5">
          {/* LEFT SIDE */}
          <div className="col-md-4 text-center">
            <img
              src="https://jthemes.net/themes/html/etreeks/files/images/team-5.jpg"
              alt="Teacher"
              className="img-fluid rounded mb-3"
            />

            {/* Social Icons */}
            <div className="d-flex justify-content-center gap-3 mb-3">
              <span className="social-icon facebook"><FaFacebookF /></span>
              <span className="social-icon twitter"><FaTwitter /></span>
              <span className="social-icon google"><FaGooglePlusG /></span>
              <span className="social-icon linkedin"><FaLinkedinIn /></span>
            </div>

            {/* Contact */}
            <button className="btn btn-outline-secondary w-100 mb-2">
              Website
            </button>
            <button className="btn btn-outline-secondary w-100">
              hello@yourdomain.com
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-8 ">
            <h2 className="fw-bold mt-6 ms-5">David Smith</h2>
            <h5 className="text-muted mb-2 ms-5">IT & Software Courses</h5>

            <p className="text-muted ms-5">
              14,622 Total Students • 9 Courses • 4.63 Rating (738 Reviews)
            </p>

            <h4 className="ms-5">About Me</h4>
            <p className="text-muted ms-5">
             Aliqum mullam blandit tempor sapien gravida donec ipsum porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis magnis sapien sagittis sapien sem congue tempor gravida donec an enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet
            </p>

            <ul className="text-muted ms-4">
              <li>Maecenas gravida porttitor nunc tempor laoreet turpis</li>
              <li>Integer congue magna at pretium purus pretium ligula</li>
              <li>Integer congue magna at pretium purus pretium ligula at rutrum risus luctus dolor auctor ipsum blandit purus aliqum mullam blandit tempor</li>
              <li>Porttitor nunc, quis vehicula magna luctus tempor</li>
              <li>Magna at pretium purus pretium ligula at rutrum risus luctus dolor auctor ipsum blandit purus aliqum mullam blandit tempor</li>
            </ul>

            <p className="text-muted ms-5">
              Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor.
              Quisque laoreet turpis urna augue.
            </p>
          </div>
        </div>
         <h2 className="ml-4">My Courses (9)</h2>
      </div>
      <BestCoursesAllTime/>
      <TeacherBusinessSection/>
    </section>
    <TeacherListing/>
   
    </>
  );
}
export default TeacherProfile;