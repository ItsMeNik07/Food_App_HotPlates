import './App.css'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import CategoriesPage from './Pages/CategoriesPage'
import Layout from './components/Layout'
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
    </Routes>
    </BrowserRouter>
  )
}

export default App
