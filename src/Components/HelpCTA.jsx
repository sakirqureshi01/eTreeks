
import "bootstrap/dist/css/bootstrap.min.css";

export default function HelpCTA() {
  return (
    <div className="container my-3 d-flex justify-content-center">
      <section
        className="w-100 rounded overflow-hidden"
        style={{
          backgroundImage:
            "url(https://your-background-image.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          className="text-center text-white px-3"
          style={{
             background:
              "linear-gradient(rgba(92,72,155,0.9), rgba(72,61,139,0.9))",
            
            padding: "80px 20px",
          }}
        >
          <h2 className="fw-bold mb-3">
            Need Help? Get in Touch
          </h2>

          <p className="text-white-50 mb-4">
            Have questions about teaching and career opportunities?
          </p>

          <a
            href="mailto:hello@yourdomain.com"
            className="btn btn-danger btn-lg fw-semibold"
          >
            hello@yourdomain.com
          </a>
        </div>
      </section>
    </div>
  );
}



