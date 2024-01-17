import "./host.scss";

function Host(props) {
  const host = props.host;
  return (
    <div className="host">
      <p className="host__name">{host.name}</p>
      <img className="host__img" src={host.picture} alt={host.name} />
    </div>
  );
}

export default Host;
