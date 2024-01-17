import "./host.scss";
import type { Host } from "../../types/host";

function Host(props: { host: Host }) {
  const { host } = props;
  return (
    <div className="host">
      <p className="host__name">{host.name}</p>
      <img className="host__img" src={host.picture} alt={host.name} />
    </div>
  );
}

export default Host;
