import "./tag.scss";

function Tag({ name }) {
  return (
    <div className="tag">
      <p className="white">{name}</p>
    </div>
  );
}

Tag.defaultProps = {
  name: "Tag name",
};

export default Tag;
