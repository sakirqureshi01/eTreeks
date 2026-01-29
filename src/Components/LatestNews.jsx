import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function LatestNews() {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="row align-items-center mb-5">
        <div className="col-md-8">
          <h2 className="fw-bold">Our Stories & Latest News</h2>
          <p className="text-muted mt-3">
            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
            primis libero tempus, blandit posuere and ligula varius magna a
            porta
          </p>
        </div>

        <div className="col-md-4 text-md-end mt-3 mt-md-0">
          <Link to="/Read More Stories"><button className="btn btn-outline-danger px-4 py-2">
            Read More Stories</button></Link>
          
         
         
        </div>
      </div>

    
      <div className="row">
        <div className="col-md-3 news-card">
          <p className="text-muted small">March 11, 2020</p>
          <h5 className="fw-bold">
            Integer congue magna at pretium purus pretium
          </h5>
          <p className="text-muted">
            An enim nullam tempor sapien gravida donec enim blandit ipsum
            porta justo integer odio velna vitae auctor integer
          </p>
          <p className="fw-semibold text-muted">By Joel Peterson</p>
        </div>

        <div className="col-md-3 news-card border-start">
          <p className="text-muted small">March 04, 2020</p>
          <h5 className="fw-bold">
            Congue magna eTreeks purus pretium magnis
          </h5>
          <p className="text-muted">
            Donec enim blandit and ipsum porta justo integer odio a velna
            vitae auctor an integer congue magna at pretium nulla
          </p>
          <p className="fw-semibold text-muted">By Jennifer K.</p>
        </div>

        <div className="col-md-3 news-card border-start">
          <p className="text-muted small">February 24, 2020</p>
          <h5 className="fw-bold text-decoration-underline">
            8 neque dolor primis a libero tempus blandit
          </h5>
          <p className="text-muted">
            Porta justo integer odio velna vitae an auctor integer congue
            magna at pretium purus ligula rutrum luctus risus ultrice
          </p>
          <p className="fw-semibold text-muted">By Michael Deal</p>
        </div>

        <div className="col-md-3 news-card border-start">
          <p className="text-muted small">February 19, 2020</p>
          <h5 className="fw-bold">
            Ligula varius magna and porta a laoreet pretium
          </h5>
          <p className="text-muted">
            Vitae auctor integer a congue magna undo pretium at purus
            pretium ligula a rutrum luctus risus and ultrice blandit
          </p>
          <p className="fw-semibold text-muted">By Aaron Wall</p>
        </div>
      </div>
      <hr />
    </div>
    
  );
}

export default LatestNews;
