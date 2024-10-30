import './App.css'
import Card from './Card.jsx'
import { useState } from 'react';

function App() {

  const [person, setPerson] = useState({
    firstname:"Ramona", 
    title:"Developer", 
    age:52,
  })

  return (
    <div>
    <header>Logo</header>
    <main>
    <Card firstname={person.firstName} title={person.title} age={person.age}/>
    <Card firstName="Dave" title="CEO" age="25"/>
    <Card firstName="Mary" title="Developer" age="45"/>
    <Card firstName="Bert" title="Developer" age="35"/>
    <Card firstName="Carl" title="Developer" age="25"/>
    </main>
    </div>
  )
}

export default App