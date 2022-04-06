import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// Components
import NavBar from './components/NavBar/NavBar';
// Pages
import HomePage from '../src/pages/Home'
import FAQPage from './pages/FAQPage'
import NotFoundPage from './pages/NotFound'
import DetailPage from './pages/Detail';
import ProductPage from './pages/Productos'
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (

    // JSX

    <div className="App">

    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/FAQ" element={<FAQPage />}/>
      <Route path="/aboutUs" element={<AboutUsPage />}/>
      <Route path="/productos" element={<ProductPage />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/:brand/" element={<HomePage />}/>
        <Route path="/:brand/:title" element={<DetailPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
    
    </div>

  );
}

export default App;