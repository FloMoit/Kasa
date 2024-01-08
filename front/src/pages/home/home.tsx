import Banner from "../../components/banner/banner.tsx";
import Gallery from "../../components/gallery/gallery.tsx";

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
