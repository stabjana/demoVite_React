import personsData from '../data/personsData';
import Card from '../components/Card';
import Header from '../components/Header';

const List = () => {


    const handleClick = (id) => {
        console.log("I am clicked", id);
    }

    return (
        <>
            <Header />
            <main>
                <div>

                    {
                        personsData.map((person) => (
                            <Card
                                key={person.id}
                                firstName={person.firstName}
                                title={person.title}
                                age={person.age}
                                animal={person.animal}
                                click={() => handleClick(person.id)} /> // sending info to the method and return it back to the function
                        ))
                    }
                </div>

            </main>
        </>
    );

};

export default List;