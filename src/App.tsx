import { Routes, Route } from "react-router-dom"
import routes from "./routes"

function App() {
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
