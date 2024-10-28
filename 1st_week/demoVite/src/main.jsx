import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const name = 'Steffi';
const first_page = 2019;

const demo = (<div>
  <h1>Hello World! My name is {name}</h1>
  <p>I have {2024-first_page} years of building webpages experience.</p>
  </div>)

// capital D marks the component:
  const Demo = () => {
    return (<div>
      <h1>Hello Component! My name is {name}</h1>
      <p>I have {2024-first_page} years of building webpages experience.</p>
      </div>

    )
  }
// here we are rendering: 
createRoot(document.getElementById('root')).render( // createRoot is a method defined inside react-dom
  <StrictMode>
    <App/>   
  </StrictMode>,
)
