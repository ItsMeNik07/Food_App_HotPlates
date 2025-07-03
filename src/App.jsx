import './App.css'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import CategoriesPage from './Pages/CategoriesPage'
import Layout from './components/Layout'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Menu from './Pages/Menu'
import ItemDescription from './Pages/ItemDescription'
import Home from './Pages/Home'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Layout />}>
        <Route index element = {<Home />} />
        <Route path="categories" element = {<CategoriesPage />} />
        <Route path="menu" element = {<Menu />} />
        <Route path='item-description' element={<ItemDescription />} />
      </Route>

        <Route path="signup" element = {<Signup />} />
        <Route path="signin" element = {<Signin />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
