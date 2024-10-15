import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Employees from './Employees';


function App() {
  return (
    <div className="App">
     <h1>Welcome to react</h1>
     <Header></Header>
     <Content></Content>
     <Employees></Employees>
    </div>
  );
}

export default App;
