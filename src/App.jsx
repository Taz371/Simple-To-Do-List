import { useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (<ToDoList/>)
}

/*function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  )
}*/

export default App
