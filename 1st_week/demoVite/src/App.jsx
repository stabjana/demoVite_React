import './App.css'
import Card from './data/components/Card.jsx'
import { useState } from 'react';
import personsData from './data/personsData' // renamed

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // to false again! 

  const handleLoginClick = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <>
      <header><h1>Demo app for practicing React</h1>
        {isLoggedIn ? (
          <div>
            <main>
              {
                personsData.map((person) => (
                  <Card
                    key={person.id}
                    firstName={person.firstName}
                    title={person.title}
                    age={person.age}
                    animal={person.animal} />
                ))
              }
            </main>
            <button onClick={handleLoginClick}>Log out</button>
          </div>
        ) : (
          <div className='logInSect'>
            <p>Please log in to see the list</p>
            <button onClick={handleLoginClick}>Log in</button>
          </div>
        )
        }
      </header>
    </>
  );

}

export default App;