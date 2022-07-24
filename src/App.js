import {BrowserRouter, Routes, Route, Suspense } from 'react-router-dom';
import {ContextClothesProvider} from './Context/ContextClothes';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './pages/Categories';
import ClothesPage from './pages/ClothesPage';
import ExchangeAndReturnPage from './pages/ExchangeAndReturnPage';
import Cart from './pages/Cart';
import AddCartModal from './components/AddCartModal/AddCartModal';
import FavoritesPage from './pages/FavoritesPage';
function App() {
  return (
    <div className="App">
      <ContextClothesProvider>
      <AddCartModal/>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/:forIt' element={<Categories/>}/>
          <Route path='/categories/:forClothes' element={<ClothesPage/>}/>
          <Route path='/:categories/:forClothes' element={<ClothesPage/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/exchangeandreturnpage' element={<ExchangeAndReturnPage/>}/>
          <Route path='/favorites' element={<FavoritesPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </ContextClothesProvider>
  
    </div>
  );
}

export default App;
