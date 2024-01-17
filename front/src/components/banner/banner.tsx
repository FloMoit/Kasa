import "./banner.scss";

function Banner(props) {
  const classes = props.about
    ? ["banner banner__about", "white banner__about__h1"]
    : ["banner banner__home", "white banner__home__h1"];

  return (
    <section className={classes[0]}>
      <h1 className={classes[1]}>
        Chez vous, <br className="banner__sm" /> partout et ailleurs
      </h1>
    </section>
  );
}

Banner.defaultProps = {
  about: false,
};

export default Banner;
