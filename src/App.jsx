import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Navbar from './components/NavBar';
import InputFields from './components/InputFields';

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <hr></hr>
      <InputFields />
    </div>
  );
}
export default App;
