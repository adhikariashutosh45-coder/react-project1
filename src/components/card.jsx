
const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.image} className="image" />
      </div>

      <div className="center">
        <h3>{props.company} <span>{props.posted}</span></h3>
        <h2>{props.position}</h2>
        <div>
          <h4>{props.jobType}</h4>
          <h4>{props.level}</h4>
        </div>

        <div className="bottom">
          <h3>{props.salary}</h3>
          <p>{props.location}</p>
        </div>
      </div>

      <button className="applybtn">Apply Now</button>
    </div>
  );
};

export default Card;
