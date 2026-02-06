import React from "react";

function YoutubeVideo() {
  return (
    <>
      {/* ===== VIDEO SECTION ===== */}
      <section className="bg-dark text-white py-5"
        style={{
        minHeight: "90vh",
        backgroundImage:
          "url('https://qspiders.com/BackgroundWave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="container text-center">

          <h1 className="fw-bold">
            Find the right instructor for you from <br />
            over 10,000 teachers
          </h1>

          <p className="mt-3 text-light">
            Feugiat primis ligula risus auctor laoreet augue egestas
          </p>

          {/* Video */}
          <div className="ratio ratio-16x9 mt-2 rounded overflow-hidden">
            <iframe className="mt-32"
              src="https://www.youtube.com/embed/0gv7OC9L2s8?si=6ENHmeJAVSt1LNlW"
              title="YouTube video"
              allowFullScreen
            ></iframe>
           
          </div>

        </div>
      </section>

      {/* ===== LOGO SLIDER ===== */}
  <section className="py-5"
    style={{
       
        backgroundImage:
          "url('https://qspiders.com/BackgroundWave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
  <div className="container text-center">

    <h3 className="">
      Trusted by companies of all sizes:
    </h3>

    <marquee
      behavior="scroll"
      direction="left"
      scrollamount="10"
      loop="infinite"
    >
      <div className="d-flex align-items-center gap-5">

        {/* Logos */}
        <img src="https://jthemes.net/themes/html/etreeks/files/images/brand-1.png" className="img-fluid "   style={{ width: "140px", height: "80px", objectFit: "contain" }} />
        <img src="https://jthemes.net/themes/html/etreeks/files/images/brand-2.png" className="img-fluid"   style={{ width: "140px", height: "80px", objectFit: "contain" }} />
        <img src="https://jthemes.net/themes/html/etreeks/files/images/brand-3.png" className="img-fluid"   style={{ width: "140px", height: "80px", objectFit: "contain" }} />
        <img src="https://jthemes.net/themes/html/etreeks/files/images/brand-4.png" className="img-fluid"   style={{ width: "140px", height: "80px", objectFit: "contain" }} />
        <img src="https://jthemes.net/themes/html/etreeks/files/images/brand-5.png" className="img-fluid"   style={{ width: "140px", height: "80px", objectFit: "contain" }} />
        <img src="https://jthemes.net/themes/html/etreeks/files/images/brand-6.png" className="img-fluid"   style={{ width: "140px", height: "80px", objectFit: "contain" }} />
        <img src="https://jthemes.net/themes/html/etreeks/files/images/brand-7.png" className="img-fluid"   style={{ width: "140px", height: "80px", objectFit: "contain" }} />
        <img src="https://jthemes.net/themes/html/etreeks/files/images/brand-7.png" className="img-fluid"    style={{ width: "140px", height: "80px", objectFit: "contain" }}/>
        <img src="https://jthemes.net/themes/html/etreeks/files/images/brand-5.png" className="img-fluid"    style={{ width: "140px", height: "80px", objectFit: "contain" }}/>
       

        {/* 👇 SAME LOGOS DUPLICATE (for smooth loop) */}
        <img src="https://jthemes.net/themes/html/etreeks/files/images/brand-7.png" className="img-fluid"    style={{ width: "140px", height: "100px", objectFit: "contain" }}/>
        <img src="https://jthemes.net/themes/html/etreeks/files/images/brand-1.png" className="img-fluid"   style={{ width: "140px", height: "100px", objectFit: "contain" }} />
        <img src="https://jthemes.net/themes/html/etreeks/files/images/brand-3.png" className="img-fluid"   style={{ width: "140px", height: "100px", objectFit: "contain" }} />
       
      </div>
    </marquee>

  </div>
</section>

<hr />
      
    </>
  );
}

export default YoutubeVideo;

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/0gv7OC9L2s8?si=6ENHmeJAVSt1LNlW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

