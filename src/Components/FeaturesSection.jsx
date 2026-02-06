import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  FaBook,
  FaChalkboardTeacher,
  FaCertificate,
  FaLaptop,
  FaBookOpen,
  FaFolderOpen,
} from "react-icons/fa";

function FeaturesSection() {
  const features = [
    {
      title: "Trending Courses",
      desc: "Augue luctus egestas luctus neque purus an ipsum neque dolor primis libero tempus at blandit massa",
      icon: FaBook,
    },
    {
      title: "Certified Teachers",
      desc: "Augue luctus egestas luctus neque purus an ipsum neque dolor primis libero tempus at blandit massa",
      icon: FaChalkboardTeacher,
    },
    {
      title: "Graduation Certificate",
      desc: "Augue luctus egestas luctus neque purus an ipsum neque dolor primis libero tempus at blandit massa",
      icon: FaCertificate,
    },
    {
      title: "Online Course Facilities",
      desc: "Augue luctus egestas luctus neque purus an ipsum neque dolor primis libero tempus at blandit massa",
      icon: FaLaptop,
    },
    {
      title: "Free Books & Library",
      desc: "Augue luctus egestas luctus neque purus an ipsum neque dolor primis libero tempus at blandit massa",
      icon: FaBookOpen,
    },
    {
      title: "Free Study Materials",
      desc: "Augue luctus egestas luctus neque purus an ipsum neque dolor primis libero tempus at blandit massa",
      icon: FaFolderOpen,
    },
  ];

  return (
    <section className="py-20 bg-gray-50"
      style={{
        minHeight: "90vh",
        backgroundImage:
          "url('https://qspiders.com/BackgroundWave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Bootstrap Grid */}
        <div className="row g-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="col-lg-4 col-md-6">
                {/* Card */}
                <div className="group bg-white rounded-2xl shadow-sm p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

                  {/* Icon */}
                  <Icon
                    className="
                      text-5xl mb-5
                      bg-gradient-to-r from-blue-500 to-green-400
                      bg-clip-text text-transparent
                      transition-all duration-300
                      group-hover:scale-110
                      group-hover:from-green-400 group-hover:to-blue-500
                    "
                  />

                  {/* Title */}
                  <h4 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
      <h1 className="text-red-500 text-5xl font-bold">
  TAILWIND WORKING
</h1>

    </section>
  );
}

export default FeaturesSection;
