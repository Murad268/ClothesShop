import {BrowserRouter, Routes, Route, Suspense } from 'react-router-dom';
import {ContextClothesProvider} from './Context/ContextClothes';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './pages/Categories';
import ClothesPage from './pages/ClothesPage';
function App() {
  return (
    <div className="App">
      
      <ContextClothesProvider>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/:forIt' element={<Categories/>}/>
          <Route path='/categories/:forClothes' element={<ClothesPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </ContextClothesProvider>
  
    </div>
  );
}

export default App;
