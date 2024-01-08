import Banner from "../../components/banner/banner.tsx";

function Home() {
  document.querySelector<HTMLInputElement>("title")!.value = "Accueil";

  return (
    <>
      <Banner />
    </>
  );
}

export default Home;
