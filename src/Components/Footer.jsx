
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
    <footer className="bg-white pt-5 border-top">
      <div className="container">
        <div className="row gy-4">

          {/* Logo & About */}
          <div className="col-md-3">
            <h4 className="fw-bold mb-3">eTreeks</h4>
            <p className="text-muted small">
              Aliquam orci a nullam tempor sapien gravida donec enim ipsum
              porta justo velna an auctor undo congue magna laoreet augue
              sapien
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
            <button className="btn btn-danger w-100 py-2">
              Subscribe
            </button>
          </div>

        </div>

        <hr className="my-4" />

        {/* Bottom Footer */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="mb-0 text-muted small">
            © Copyright eTreeks 2020 |{" "}
            <strong>508.746.9892</strong> |{" "}
            <strong>hello@domain.com</strong>
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
            <button className="btn btn-secondary btn-sm">
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;







// import "bootstrap/dist/css/bootstrap.min.css";
// import "../Components/Styles/Footer.css";
// import { FaFacebookF, FaTwitter, FaGooglePlusG, FaTumblr, FaArrowUp } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="footer-section pt-5">
//       <div className="container">
//         <div className="row gy-4">

//           {/* Logo & About */}
//           <div className="col-md-3">
//             <h4 className="fw-bold mb-3">eTreeks</h4>
//             <p className="text-muted">
//               Aliquam orci a nullam tempor sapien gravida donec enim ipsum
//               porta justo velna an auctor undo congue magna laoreet augue
//               sapien
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="col-md-3">
//             <h5 className="fw-bold mb-3">Quick Links</h5>
//             <ul className="list-unstyled footer-links">
//               <li>About eTreeks</li>
//               <li>Courses Catalog</li>
//               <li>Our Testimonials</li>
//               <li>Premium Learning</li>
//               <li>From the Blog</li>
//             </ul>
//           </div>

//           {/* Popular Categories */}
//           <div className="col-md-3">
//             <h5 className="fw-bold mb-3">Popular Categories</h5>
//             <ul className="list-unstyled footer-links">
//               <li>Business English</li>
//               <li>Software Development</li>
//               <li>Finance & Accounting</li>
//               <li>Health and Fitness</li>
//               <li>Office Productivity</li>
//             </ul>
//           </div>

//           {/* Subscribe */}
//           <div className="col-md-3">
//             <h5 className="fw-bold mb-3">Stay in Touch</h5>
//             <input
//               type="email"
//               className="form-control mb-3"
//               placeholder="Your Email Address"
//             />
//             <button className="btn btn-danger w-100 py-2">
//               Subscribe
//             </button>
//           </div>

//         </div>

//         <hr className="my-4" />

//         {/* Bottom Footer */}
//         <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
//           <p className="mb-2 mb-md-0 text-muted">
//             © Copyright eTreeks 2020 | <strong>508.746.9892</strong> |{" "}
//             <strong>hello@domain.com</strong>
//           </p>

//           <div className="footer-icons d-flex align-items-center gap-3">
//             <FaFacebookF />
//             <FaTwitter />
//             <FaGooglePlusG />
//             <FaTumblr />
//             <div className="scroll-top">
//               <FaArrowUp />
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
