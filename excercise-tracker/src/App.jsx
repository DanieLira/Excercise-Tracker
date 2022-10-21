import React from 'react'
import Navbar from './components/Navbar'
import FormSideBar from './components/FormSideBar'
import Dashboard from './components/Dashboard'

export default function App() {
  
  const [darkMode, setDarkMode] = React.useState(false)
  const [showSideBar, setShowSideBar] = React.useState(true)

  function toggleDarkMode(){
    setDarkMode(prevState => !prevState)
  }

  function toggleSideBar(){
    setShowSideBar(prevState => !prevState)
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
      <FormSideBar 
        showSideBar={showSideBar}
        toggleSideBar={toggleSideBar}  
      />
      <Dashboard />
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