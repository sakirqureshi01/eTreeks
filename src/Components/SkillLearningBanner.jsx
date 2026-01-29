import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  FaFire,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaLaptop,
  FaBook,
} from "react-icons/fa";

function SkillLearningBanner() {
  return (
    <section
      className="d-flex align-items-center text-white"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/src/assets/bg-03.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(88,70,140,0.9), rgba(63,59,130,0.9))",
        }}
      />

      {/* Content */}
      <div className="container position-relative text-center">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            <h1 className="fw-bold display-5 mb-4">
              Get Quality Education with eTreeks
            </h1>

            <p className="opacity-75 mb-4 mx-auto" style={{ maxWidth: "750px" }}>
              Integer congue magna at pretium purus pretium ligula at rutrum luctus
              risus eros dolor auctor ipsum blandit luctus purus vehicula magna
              a tempor laoreet
            </p>

            {/* <button className="btn btn-danger px-4 py-3 mb-5 fw-semibold">
              Start Learning Now!
            </button> */}
                 <Link to="/Start Learning">
              <button
                className="btn btn-danger btn-lg px-4"
                style={{
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(224,23,78,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#dc3545";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
               Start Learning
              </button>
            </Link>
            {/* ICON ROW */}
            <div className="row justify-content-center g-4">
              <IconItem icon={<FaFire />} label="TRENDING COURSES" />
              <IconItem icon={<FaChalkboardTeacher />} label="CERTIFIED TEACHERS" />
              <IconItem icon={<FaGraduationCap />} label="GRADUATION CERTIFICATE" />
              <IconItem icon={<FaLaptop />} label="ONLINE COURSE FACILITIES" />
              <IconItem icon={<FaBook />} label="FREE BOOKS & LIBRARY" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function IconItem({ icon, label }) {
  return (
    <div className="col-6 col-md-4 col-lg-2 text-center">
      <div style={{ fontSize: "48px" }}>{icon}</div>
      <p className="fw-semibold mt-2 small">
        {label.split(" ").map((word, i) => (
          <span key={i} className="d-block">
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}

export default SkillLearningBanner;




// import {
//   FaFire,
//   FaChalkboardTeacher,
//   FaGraduationCap,
//   FaLaptop,
//   FaBook,
// } from "react-icons/fa";



// function SkillLearningBanner() {
//   return (
//     <section
//       className="
//         relative min-h-screen
//         bg-[url('/src/assets/bg-03.jpg')]
//         bg-cover bg-center
//         flex items-center
//       "
//     >
//       {/* Overlay */}
//       <div className="absolute " />

//       {/* Content */}
//       <div className="relative z-10 w-full px-4">
//         <div className="max-w-5xl mx-auto text-center text-white">
//           <h1 className="font-bold text-3xl md:text-5xl mb-4">
//             Get Quality Education with eTreeks
//           </h1>

//           <p className="opacity-90 max-w-3xl mx-auto mb-4">
//             Integer congue magna at pretium purus pretium ligula at rutrum luctus
//             risus eros dolor auctor ipsum blandit luctus purus vehicula magna
//             a tempor laoreet
//           </p>

//           <button
//   className="
//     bg-pink-600 hover:bg-pink-700
//     text-white font-semibold
//     px-7 py-3 rounded-lg
//     transition-colors
//     mb-4
//   "
// >
//   Start Learning Now!
// </button>


//           {/* ICON ROW */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
//             <IconItem icon={<FaFire />} label="TRENDING COURSES" />
//             <IconItem icon={<FaChalkboardTeacher />} label="CERTIFIED TEACHERS" />
//             <IconItem icon={<FaGraduationCap />} label="GRADUATION CERTIFICATE" />
//             <IconItem icon={<FaLaptop />} label="ONLINE COURSE FACILITIES" />
//             <IconItem icon={<FaBook />} label="FREE BOOKS & LIBRARY" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function IconItem({ icon, label }) {
//   return (
//     <div className="flex flex-col items-center gap-2">
//       <div className="text-5xl">{icon}</div>
//       <p className="text-sm font-semibold leading-tight text-center">
//         {label.split(" ").map((w, i) => (
//           <span key={i} className="block">
//             {w}
//           </span>
//         ))}
//       </p>
//     </div>
//   );
// }

// export default SkillLearningBanner;








