
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaTumblr,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <>
    
    <footer className="bg-white pt-5 border-top"
      style={{
        minHeight: "50vh",
        backgroundImage:
          "url('https://qspiders.com/BackgroundWave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row gy-4">

          {/* Logo & About */}
          <div className="col-md-3">
            <h4 className="fw-bold mb-3">Sakir-Raza</h4>
            <p className="text-muted small">
              Motivated and detail-oriented Computer Applications graduate seeking a fresher role as a Web / Full-Stack Developer where I can apply my knowledge of HTML, CSS, JavaScript, React, and backend technologies 
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/About eTreeks" className="text-muted text-decoration-none"> About eTreeks </Link>
                
               
               
              </li>
              <li className="mb-2 ">
                
              
                 <Link to="/Courses Catalog"className="text-muted text-decoration-none">Courses Catalog</Link>

               
              </li>
              <li className="mb-2">
                <Link to="/Our Testimonials" className="text-muted text-decoration-none"> Our Testimonials</Link>

               
              </li>
              <li className="mb-2">
                <Link to="Premium Learning" className="text-muted text-decoration-none"> Premium Learning </Link>
                
                
               
              </li>
              <li>
                <Link to="From the Blog" className="text-muted text-decoration-none">  From the Blog   </Link> 
                 
             
               
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Popular Categories</h5>
            <ul className="list-unstyled">
              <Link to="/reviews" className="text-muted text-decoration-none" >
              <li className="mb-2 text-muted">Business English</li>
              <li className="mb-2 text-muted">Software Development</li>
              <li className="mb-2 text-muted">Finance & Accounting</li>
              <li className="mb-2 text-muted">Health and Fitness</li>
              <li className="text-muted">Office Productivity</li>
              </Link>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Stay in Touch</h5>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Your Email Address"
            />
            <button className="btn btn-danger w-100 py-2"
             style={{
    background: "linear-gradient(123deg, #f09819, #ff512f)",
    border: "2px solid #e5e5e5",
    padding: "10px 25px",
    borderRadius: "10px",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => {
    e.target.style.background =
      "linear-gradient(123deg, #ff512f, #f09819)";
    e.target.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.target.style.background =
      "linear-gradient(123deg, #f09819, #ff512f)";
    e.target.style.transform = "scale(1)";
  }}
>
              Subscribe
            </button>
          </div>

        </div>

        <hr className="my-4" />

        {/* Bottom Footer */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mb-5">
          <p className="mb-0 text-muted small">
            © Copyright Sakir Raza 2026 |{" "}
            <strong>9116386100</strong> |{" "}
            <strong>sakirqureshi9116@gmail.com</strong>
          </p>

          <div className="d-flex align-items-center gap-3">
            <a href="#" className="text-muted">
              <FaFacebookF />
            </a>
            <a href="#" className="text-muted">
              <FaTwitter />
            </a>
            <a href="#" className="text-muted">
              <FaGooglePlusG />
            </a>
            <a href="#" className="text-muted">
              <FaTumblr />
            </a>

            {/* Scroll Top */}
            <a href="#"><button className="btn btn-secondary btn-sm">
              <FaArrowUp />
            </button></a>
            
          </div>
        </div>
      </div>
    </footer>
    
    </>
  );
}

export default Footer;

