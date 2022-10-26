function WalkerCard({ name, years_of_experience, pace, image }) {
  return (
    <li className="card">
      <div className="card__content">
        <h1 className="card__title">{name}</h1>
        <div className="walkerInfo">
          <img className="walker-img" src={image} alt="walker_image"></img>
          <div className="walkerText">
            <p>Years of Experience: {years_of_experience}</p>
            <p>Pace: {pace}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default WalkerCard;
