import Button from "./Button";


function Card({ firstName, title, age, animal, click }) { // don't forget the props here! 
  return (<div className="card">
    <h2>{firstName}</h2>
    <p>Title: {title}</p>
    <p>Age: {age}</p>
    <p>Animal: {animal}</p>
    <Button text="Edit" click={click} />
  </div>
  )
}

export default Card;