import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import personsData from "../data/personsData";

const SinglePage = () => {
    const { id } = useParams(); /* params object comes with the root and we destructure it with: {} */
    const person = personsData.find((person) => person.id === parseInt(id));
    // personsData array and find: single element an looks: does the element id matching with the id?
    // works with unique ids because it will stop searching when it finds a match

    const navigate = useNavigate();

    return (
        <div>
            <h2>Single Page for {person.firstName}</h2>
            <p>Title: {person.title} </p>
            <p>Age: {person.age}</p>
            <p>Animal:{person.animal} </p>
            <Button text="Back to list" onClick={() => navigate(-1)} />
        </div>
    );
};

export default SinglePage;