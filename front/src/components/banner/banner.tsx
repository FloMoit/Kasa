import "./banner.scss";

function Banner() {
  // Create different classNames for house and about pages banners

  return (
    <section className="banner banner__home">
      <h1 className="white banner__home__h1">Chez vous, partout et ailleurs</h1>
      <div className="banner__home__darkener"></div>
    </section>
  );
}

export default Banner;
