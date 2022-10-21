import React from 'react'
import Navbar from './components/Navbar'

export default function App() {
  
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode(){
    setDarkMode(prevState => !prevState)
  }

  React.useEffect(() => {
    const style = darkMode ? "dark" : ""
    document.getElementById("htmlTag").className = style;
  },[darkMode])

  return (
   <div>
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
      />
      {/* <UserForm />
      <ExcerciseForm />
      <UserStatus /> */}
   </div>
  )
}

// <p>TODO:</p>
//       <ul>
//         <li>Mostrar una interfaz diferente para cada tipo de ejercicio a agregar</li>
//         <li>Poner graficas a la derecha con el rendimiento (GET)</li>
//         <li>Registro de usuarios</li>
//         <li>Registro de ejercicios</li>
//         <li>Cambiar de usuario con un dropdown</li>
//         <li>Animaciones por ejercicio (Monito corriendo :v</li>
//         <li>Hacer darkmode</li>
//         <li>Hacer responsivo</li>
//         <li>Que sea mi propia API</li>
//       </ul>