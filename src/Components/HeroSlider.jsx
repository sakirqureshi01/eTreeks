import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Components/Styles/heroslider.css";



function HeroSlider() {
  return (
   <>
    <section className="hero-slider ">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div
            className="carousel-item active hero-slide"
            style={{
              backgroundImage:
                "url(https://jthemes.net/themes/html/etreeks/files/images/slider/slide-1.jpg)",
            }}
          >
            <div className="overlay"></div>
            <div className="container h-300">
              <div className="row h-400 align-items-center justify-content-start">
                <div className="col-md-6 text-white">
                  <h2 className="text-dark fs-1">25K+ students trust our online courses</h2>
                  <p className="text-dark fs-6">
                 Feugiat primis ligula gravida auctor egestas augue viverra mauri tortor in iaculis placerat an eugiat mauris ipsum undo viverra tortor gravida purus lorem in tortor a viverr
                  </p>
                  <button className="btn btn-danger px-4">
                    View Papular Courses
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className="carousel-item hero-slide"
            style={{
              backgroundImage:
                "url(https://jthemes.net/themes/html/etreeks/files/images/slider/slide-3.jpg)",
            }}
          >
            <div className="overlay"></div>
            <div className="container h-300">
              <div className="row h-300 align-items-center justify-content-start">
                <div className="col-md-6 text-white">
                  <h2 className="text-dark fs-1">High quality courses from the leading experts</h2>
                  <p className="text-dark fs-6">
                   Feugiat primis ligula gravida auctor egestas augue viverra mauri tortor in iaculis placerat an eugiat mauris ipsum undo viverra tortor gravida purus lorem in tortor a viverr
                  </p>
                  <button className="btn btn-danger px-4">
                    View Popular Course
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className="carousel-item hero-slide "
            style={{
              backgroundImage:
                "url(https://jthemes.net/themes/html/etreeks/files/images/slider/slide-2.jpg) ",
            }}
          >
            <div className="overlay"></div>
            <div className="container h-300">
              <div className="row h-300 align-items-center justify-content-start">
                <div className="col-md-6 text-white">
                  <h2>2,769 online courses from the best tutors</h2>
                  <p>
                    Job-ready courses with certificates and placement support.
                  </p>
                  <input className="form-control w-75 rounded " type="text" name="" id=""  />
                 
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dots */}
        <div className="carousel-indicators">
          <button data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
          <button data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
        </div>

      </div>
    </section>
   </>
  )
}

export default HeroSlider