import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/appRoutes'; // is named export


function App() {

  return (
    <RouterProvider router={router} />
  );

}

export default App;