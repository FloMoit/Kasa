import Banner from "../../components/banner/banner";
import Dropdown from "../../components/dropdown/dropdown";
import "./about.scss";

function About() {
  // Set page title
  const title = document.querySelector("title");
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
      body: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      body: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
  title.textContent = "Kasa - A Propos";

  return (
    <>
      <Banner about={true} />
      <div className="about">
        {/* Return as much Dropdowns as aboutData length with corresponding information */}
        {texts.map((elt) => (
          <Dropdown
            title={elt.title}
            body={elt.body}
            key={elt.title}
            isList={false}
            className="about__drop"
          />
        ))}
      </div>
    </>
  );
}

export default About;
