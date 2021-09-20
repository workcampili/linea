import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">

      //Agregar la imagen en public/assets
      // copiar la carpeta components Navbar

      <Navbar />


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
