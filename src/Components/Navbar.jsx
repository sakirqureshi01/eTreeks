import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import logo from "../assets/logo-1.png";
import '../Components/Styles/Navbar.css'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom ">
      <div className="container">

        {/* LOGO */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2"
        style={{height:"60px"}}>
         
           

           <img src={logo}
                alt="Sakir Raza Logo"
                className="navbar-logo"
                style={{ height: "90px" }}
                />

           
          
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-center gap-lg-4">

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/about">
                About
              </Link>
            </li>

            {/* PAGES */}
            <li
              className="nav-item dropdown"
              onMouseEnter={(e) =>
                e.currentTarget
                  .querySelector(".dropdown-menu")
                  ?.classList.add("show")
              }
              onMouseLeave={(e) =>
                e.currentTarget
                  .querySelector(".dropdown-menu")
                  ?.classList.remove("show")
              }
            >
              <span
                className="nav-link dropdown-toggle fw-medium"
                role="button"
                data-bs-toggle="dropdown"
              >
                Pages
              </span>

              <ul className="dropdown-menu">
              
               
              
                <li>
               <Link className="dropdown-item mb-2" to="/About Us Page">
              <div className="d-flex justify-content-between align-items-center gap-4 mb-2">
             <span>About Us Page  <hr className="dotted-line mt-2" /></span>
            <span>Become a Teacher  <hr className="dotted-line mt-2" /></span>
           </div>
         </Link></li>


               
                    <li>
               <Link className="dropdown-item" to="/Categories Listing">
              <div className="d-flex justify-content-between align-items-center gap-4 mb-2"> 
             <span>Categories Listing <hr className="dotted-line mt-2" /></span>
            <span>Pricing Plans Page <hr className="dotted-line mt-2" /></span>
           </div>
         </Link></li>

               
             
                   <li>
               <Link className="dropdown-item" to="/Category Details">
              <div className="d-flex justify-content-between align-items-center gap-4 mb-2"> 
             <span>Category Details <hr className="dotted-line mt-2" /></span>
            <span>Reviews Page <hr className="dotted-line mt-2" /></span>
           </div>
         </Link></li>

       
                 <li>
               <Link className="dropdown-item" to="/Courses Listing">
              <div className="d-flex justify-content-between align-items-center gap-4 mb-2"> 
             <span>Courses Listing <hr className="dotted-line mt-2" /></span>
            <span>FAQs Page <hr className="dotted-line mt-2" /></span>
           </div>
         </Link></li>
                 <li>
               <Link className="dropdown-item" to="/Course Details">
              <div className="d-flex justify-content-between align-items-center gap-4 mb-2"> 
             <span>Course Details <hr className="dotted-line mt-2" /></span>
            <span>Blog Listing<hr className="dotted-line mt-2" /></span>
           </div>
         </Link></li>
                   <li>
               <Link className="dropdown-item" to="/Teachers Listing">
              <div className="d-flex justify-content-between align-items-center gap-4 mb-2"> 
             <span>Teachers Listing <hr className="dotted-line mt-2" /></span>
            <span>Single Post<hr className="dotted-line mt-2" /></span>
           </div>
         </Link></li>
                 <li>
               <Link className="dropdown-item " to="/Teacher Profile">
              <div className="d-flex justify-content-between align-items-center gap-4 mb-2 "> 
             <span>Teacher Profile <hr className="dotted-line mt-2" /></span>
            <span>Pricing Plans Page <hr className="dotted-line mt-2" /></span>
           </div>
         </Link></li>
                  <li>
               <Link className="dropdown-item" to="#">
              <div className="d-flex justify-content-between align-items-center gap-4 mb-2"> 
             <span>Categories Listing <hr className="dotted-line mt-2" /></span>
            <span>Contacts Page<hr className="dotted-line mt-2" /></span>
           </div>
         </Link></li>
           </ul>
            </li>

            {/* CATEGORIES */}
            <li
              className="nav-item dropdown"
              onMouseEnter={(e) =>
                e.currentTarget
                  .querySelector(".dropdown-menu")
                  ?.classList.add("show")
              }
              onMouseLeave={(e) =>
                e.currentTarget
                  .querySelector(".dropdown-menu")
                  ?.classList.remove("show")
              }
            >
              <span
                className="nav-link dropdown-toggle fw-medium"
                role="button"
                data-bs-toggle="dropdown"
              >
                Categories
              </span>

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/FindOutMore-1">Development</Link></li>
                <li><Link className="dropdown-item" to="/FindOutMore-1">Finance & Accounting</Link></li>
                <li><Link className="dropdown-item" to="/FindOutMore-1">IT & Software</Link></li>
                <li><Link className="dropdown-item" to="/FindOutMore-1">Photography</Link></li>
                 <li><Link className="dropdown-item" to="/FindOutMore-1">Office Productivity</Link></li>
                <li><Link className="dropdown-item" to="/FindOutMore-1">Math & Science</Link></li>
                <li><Link className="dropdown-item" to="/FindOutMore-1">Languages</Link></li>
                <li><Link className="dropdown-item" to="/FindOutMore-1">Marketing</Link></li>
                <li><Link className="dropdown-item" to="/FindOutMore-1">Health & Fitness</Link></li>
              </ul>
            </li>
           
  
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/MegaMenu">
                Mega Menu
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/blog">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/contacts">
                Contacts
              </Link>
            </li>

            {/* LANGUAGE */}
            <li
              className="nav-item dropdown"
              onMouseEnter={(e) =>
                e.currentTarget
                  .querySelector(".dropdown-menu")
                  ?.classList.add("show")
              }
              onMouseLeave={(e) =>
                e.currentTarget
                  .querySelector(".dropdown-menu")
                  ?.classList.remove("show")
              }
            >
              <span
                className="nav-link dropdown-toggle d-flex align-items-center gap-2 fw-medium"
                role="button"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://jthemes.net/themes/html/etreeks/files/images/icons/flags/uk.png"
                  alt="EN"
                  style={{ width: "22px" }}
                />
                En
              </span>

              <ul className="dropdown-menu dropdown-menu-end">
  <li>
    <span className="dropdown-item d-flex align-items-center gap-2">
      <img
        src="https://flagcdn.com/w20/de.png"
        alt="Deutsch"
        style={{ width: "20px", height: "20px" }}
      />
      Deutsch
    </span>
  </li>

  <li>
    <span className="dropdown-item d-flex align-items-center gap-2">
      <img
        src="https://flagcdn.com/w20/es.png"
        alt="Español"
        style={{ width: "20px", height: "20px" }}
      />
      Español
    </span>
  </li>

  <li>
    <span className="dropdown-item d-flex align-items-center gap-2">
      <img
        src="https://flagcdn.com/w20/fr.png"
        alt="Français"
        style={{ width: "20px", height: "20px" }}
      />
      Français
    </span>
  </li>
</ul>

            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;






 {/* <img src="https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjk3YzQxYjJjMTY0ODE5MWI2YTc2YmM0ZTY5M2Y2MTk6ZmlsZV8wMDAwMDAwMGJhZGM3MjA4ODI1YjA2OGY3MTlkZjc4MyIsInRzIjoiMjA0ODMiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6ImFlODVjYWUxOTI2MTc2MmEyYWMxZmZiZGY0NWIyNDQwZGRjYjU4MDJiMWRhMWQ3MWYwOGI4OWZlN2IwMDlmMGEiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY3AiOm51bGwsIm1hIjpudWxsfQ==" alt="eTreeks"  */}

















