import React from "react";
import Languages from "../components/knowledges/Languages";
import Experience from "../components/knowledges/Experience";
import OtherSkills from "../components/knowledges/OtherSkills";
import Hobbies from "../components/knowledges/Hobbies";


const Knowledges = () => {
  return (
    <section className="Knowledges main_item ">
      <div className="KnowledgesContent">
        <Languages />
        <Experience />
        <OtherSkills/>
        <Hobbies/>
      </div>
    </section>
  );
};

export default Knowledges;
