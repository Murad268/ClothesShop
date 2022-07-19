import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {ContextClothesProvider} from './Context/ContextClothes';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './pages/Categories';
function App() {
  return (
    <div className="App">
      <Header/>
      <ContextClothesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categories' element={<Categories/>}/>
        </Routes>
      </BrowserRouter>
      </ContextClothesProvider>
      <Footer/>
    </div>
  );
}

export default App;
