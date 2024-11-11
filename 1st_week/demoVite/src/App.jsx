import './App.css'
import Card from './data/components/Card.jsx'
import { useState } from 'react';
import personsData from './data/personsData' // renamed
import Button from './data/components/Button.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // to false again! 

  const toggleLogIn = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  const handleClick = (id) => {
    console.log("I am clicked", id); // new!!!
  }

  return (
    <>
      <header><h1>Demo app for practicing React</h1>
        <Button text={isLoggedIn ? "Log out" : "Log in"} click={toggleLogIn} />
      </header>
      <main>
        {isLoggedIn ? (
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
        ) : (
          <div className='logInSect'>
            <p>Please log in to see the list</p>
          </div>
        )
        }
      </main>
    </>
  );

}

export default App;