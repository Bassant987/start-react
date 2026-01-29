import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from'./components/About/About'
import Products  from './components/Products/Products'
import Feedback from'./components/Feedback/Feedback'
import Male from'./components/Male/Male'
import Female from'./components/Female/Female'


function App() {
  const routes=createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
      {index:true ,element:<Home />},
      {path:'about',element:<About />},
      {path:'products',element:<Products />,children:[
        {path:'male',element:<Male />},
        {path:'female',element:<Female />}
      ]},
      {path:'feedback ',element:<Feedback />}
    ]}
  ])
  return <> 
<RouterProvider router={routes}/>
  </>
}

export default App
