import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="homeContent">
        <div className="presentation">
          <h1> IVEKE DA SILVA wilfrid</h1>
          <h2>Développeur web Back-end / Intégrateur reactjs</h2>
        </div>

        <div className="dm content_item">
          <p>
            Pour une meilleur expérience utiliser un ordinateur de bureau ou un
            laptop
          </p>
        </div>

        <div className="pdf">
          <a
            href="/media/cv_wilfrid.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info"
          >
            Télécharger CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
