import { Routes, Route } from "react-router-dom"
import routes from "./routes"

import { useEffect } from 'react'

function App() {
  const fetchData = () => {
      const today = new Date()
      const day = today.getDate()
      const month = today.getMonth() + 1
      const year = today.getFullYear()
      const hours = today.getHours(); 
      const minutes = today.getMinutes();

      const formData = {
          createAt: `${hours}:${minutes}, ${day}/${month}/${year}`
      }

      fetch('https://67a1ade25bcfff4fabe31405.mockapi.io/baodng/traffic', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(formData)            
      })
  }

  useEffect(() => {
      fetchData()
  }, []);

  return (
    <div className="main">
      <Routes>
        {routes.map((route, i) => {
          const Page = route.component
          return <Route key={i} path={route.path} element={<Page/>} />
        })}
      </Routes>
    </div>
  )
}

export default App
