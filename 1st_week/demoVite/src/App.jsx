import './App.css'
import Card from './Card.jsx'

function App() {
  return (
    <div>
    <header>Logo</header>
    <main>
    <Card firstName="Steffi" title="Student" age="29"/>
    <Card firstName="Dave" title="CEO" age="25"/>
    <Card firstName="Mary" title="Developer" age="45"/>
    <Card firstName="Bert" title="Developer" age="35"/>
    <Card firstName="Carl" title="Developer" age="25"/>
    </main>
    </div>
  )
}

export default App