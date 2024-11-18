import { useState } from "react";
import Button from "./Button";


function Card({ firstName, title, age, animal }) { // don't forget the props here! or: const {firstName, title, age, animal, click } = props || and then props in the function props: (props)

  const [animalValue, setAnimalValue] = useState(animal);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((prev) => !prev);

  const handleChange = (e) => setAnimalValue(e.target.value);


  return (<div className="card">
    <h2>{firstName}</h2>
    <p>Title: {title}</p>
    <p>Age: {age}</p>

    {isEditing ? (
      <input type="text" value={animalValue} onChange={handleChange} />
    ) : (
      <p>Animal: {animalValue}</p>
    )}
    <Button click={toggleEdit} text={isEditing ? "Save" : "Edit"} />

  </div>
  );
}

export default Card;
// hier wird die Funktion an den button übergeben und in diesem Component aufgerufen und ausgeführt.