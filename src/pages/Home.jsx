import React from "react";
import Photo from "../components/Photo";


const Home = () => {
  return (
    <section className="homeContent main_item">
      {/* h1 */}
      <div className="profil homeContent_item">
        <Photo/>
      </div>
      {/* h1 */}

      {/* h2 */}
      <div className="content homeContent_item">
        <h1 className="content_item"> IVEKE DA SILVA wilfrid</h1>
        <h2 className="content_item">Développeur Back-end / Intégrateur reactjs</h2>
        <div className="dm content_item">
          <p>
            Pour une meilleur expérience utiliser un ordinateur de bureau ou un
            laptop
          </p>
        </div>
        <div className="pdf content_item">
          <a
            href="/media/cv_wilfrid.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger CV
          </a>
        </div>
      </div>
      {/* h2 */}

    </section>
  );
};

export default Home;
