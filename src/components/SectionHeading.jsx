// SectionHeading component
// React concept: Props - parent passes title and subtitle as props,
// so this one component can be reused for every section.
function SectionHeading(props) {
  return (
    <div className="section-heading">
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  );
}

export default SectionHeading;
