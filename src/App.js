import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Header from '../src/components/Header/Header'
import ListProducts from './components/ListProducts/ListProducts';




function App() {
  return (

    // JSX

    <div className="App">
    
     <NavBar/>
     <Header/>
     <ListProducts/>

    </div>

  );
}

export default App;
