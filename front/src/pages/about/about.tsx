import React from "react";
import Banner from "../../components/banner/banner";
import Dropdown from "../../components/dropdown/dropdown";
import "./about.scss";

const texts = [
  {
    title: "Fiabilité",
    body: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    body: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    body: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Sécurité",
    body: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

function About() {
  React.useEffect(() => {
    document.title = "Kasa - A Propos";
  }, []);

  return (
    <>
      <Banner about={true} />
      <div className="about">
        {/* Return as much Dropdowns as aboutData length with corresponding information */}
        {texts.map((elt) => (
          <Dropdown title={elt.title} body={elt.body} key={elt.title} />
        ))}
      </div>
    </>
  );
}

export default About;
