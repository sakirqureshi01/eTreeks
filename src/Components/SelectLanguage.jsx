import "bootstrap/dist/css/bootstrap.min.css";

const languages = [
  {
    name: "English",
    courses: 84,
    flag: "https://flagcdn.com/w40/gb.png",
  },
  {
    name: "Deutsch",
    courses: 75,
    flag: "https://flagcdn.com/w40/de.png",
  },
  {
    name: "Español",
    courses: 54,
    flag: "https://flagcdn.com/w40/es.png",
  },
  {
    name: "Français",
    courses: 68,
    flag: "https://flagcdn.com/w40/fr.png",
  },
  {
    name: "Italiano",
    courses: 61,
    flag: "https://flagcdn.com/w40/it.png",
  },
  {
    name: "Português",
    courses: 78,
    flag: "https://flagcdn.com/w40/pt.png",
  },
  {
    name: "Русский",
    courses: 57,
    flag: "https://flagcdn.com/w40/ru.png",
  },
  {
    name: "繁體中文",
    courses: 45,
    flag: "https://flagcdn.com/w40/cn.png",
  },
  {
    name: "हिन्दी",
    courses: 43,
    flag: "https://flagcdn.com/w40/in.png",
  },
  {
    name: "日本語",
    courses: 21,
    flag: "https://flagcdn.com/w40/jp.png",
  },
];

function SelectLanguage() {
  return (
    <>
    <hr />
    {/* <section className="py-3 bg-light" style={{marginTop:"-80px"}}> */}
       <section className="py-3 bg-light"
       style={{
        minHeight: "90vh",
        backgroundImage:
          "url('https://qspiders.com/BackgroundWave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop:"-80px"
      }}
    >
      <div className="container">


        {/* HEADER */}
        <div className="mb-5">
          <h2 className="fw-bold mb-2">
            Select language you want to learn
          </h2>
          <p className="text-muted mb-0 col-lg-6">
            Aliquam a augue suscipit, luctus neque purus ipsum neque
          </p>
        </div>

        {/* LANGUAGE CARDS */}
        <div className="row g-4">
          {languages.map((lang, index) => (
            <div
              className="col-12 col-sm-6 col-lg-4 col-xl-3"
              key={index}
            >
              <div className="bg-white border rounded-3 p-4 h-100 d-flex align-items-center gap-3">

                {/* FLAG IMAGE */}
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "#f1f3f5",
                  }}
                >
                  <img
                    src={lang.flag}
                    alt={lang.name}
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h6 className="fw-semibold mb-1">
                    {lang.name}
                  </h6>
                  <p className="text-muted mb-0 small">
                    {lang.courses} Courses
                  </p>
                </div>

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

export default SelectLanguage;
