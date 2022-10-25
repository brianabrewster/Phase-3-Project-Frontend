function WalkerCard({ name, years_of_experience, pace, image }) {
    return(
        <li className="card">
         <div className="card__content">
             <h1 className="card__title">{name}</h1>
             <img className="walker-img" src={image} alt="walker_image"></img>
             <p>Years of Experience: {years_of_experience}</p>
             <p>Pace: {pace}</p>
         </div>
         </li>  
     )
}

export default WalkerCard;