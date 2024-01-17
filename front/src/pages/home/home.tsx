import Banner from "../../components/banner/banner";
import Gallery from "../../components/gallery/gallery";

function Home() {
  document.querySelector<HTMLInputElement>("title")!.value = "Accueil";

  return (
    <>
      <Banner />
      <Gallery />
    </>
  );
}

export default Home;
