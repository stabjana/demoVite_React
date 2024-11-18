import './App.css'
import Card from './data/components/Card.jsx'
import { useState } from 'react';
import personsData from './data/personsData' // renamed
import Button from './data/components/Button.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // to false again! 

  const toggleLogIn = () => {
    setIsLoggedIn((prevState) => !prevState); // when react state is updated prev keyword = setting it to the opposite of prevState
  };

  const handleClick = (id) => {
    console.log("I am clicked", id); // new!!! --- Falls Card etwas an App melden müsste (z. B. durch den Klick auf einen Button), würde App eine Funktion als Prop an Card weitergeben, die Card dann aufrufen kann. So wie hier.

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