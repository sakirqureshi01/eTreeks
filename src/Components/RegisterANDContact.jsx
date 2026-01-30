import "bootstrap/dist/css/bootstrap.min.css";

function RegisterANDContact() {
  return (
    <section className="py-5">
      <div className="container">

      <div
  className="rounded-4 text-white p-5"
  style={{
    backgroundImage:
      " url('https://jthemes.net/themes/html/etreeks/files/images/newsletter.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

          <div className="row align-items-center g-4">

            {/* LEFT CONTENT */}
            <div className="col-lg-5">
              <h2 className="fw-bold mb-3">
                Stay in Touch
              </h2>
              <p className="mb-0 opacity-90">
                Get personalized course recommendations, track subjects and
                courses with reminders and more
              </p>
            </div>

            {/* RIGHT FORM */}
            <div className="col-lg-7">
              <div className="d-flex flex-column flex-md-row align-items-center gap-5" style={{width:"500px"}}>

                <input
                  type="email"
                  placeholder="Your email address" 
                  className="form-control bg-transparent text-white border-0 border-bottom rounded-0"
                  style={{
                   
                  
                  }}
                />

                <button className="btn btn-danger  " style={{height:"40px", width:"240px"}}>
                  Subscribe Now
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default RegisterANDContact;

