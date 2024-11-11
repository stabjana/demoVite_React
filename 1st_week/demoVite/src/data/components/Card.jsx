
function Card({ firstName, title, age, animal }) {
  return (<div className="card">
    <h2>{firstName}</h2>
    <p>Title: {title}</p>
    <p>Age: {age}</p>
    <p>Animal: {animal}</p>
  </div>
  )
}

export default Card;