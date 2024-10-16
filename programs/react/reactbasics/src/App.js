import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Employees from './Employees';
import SimpleInterest from './SimpleInterest';
import Counter from './Counter';
import SimpleMathCalculator from './components/SimpleMathCalculator';


function App() {
  return (
    <div className="App">
     <h1>Welcome to react</h1>
     {/**
     <Header></Header>
     <Content></Content>
     <Employees></Employees>
     <SimpleInterest></SimpleInterest>
     <Counter></Counter>
       
      */}
      <SimpleMathCalculator></SimpleMathCalculator>
      
      
    </div>
  );
}

export default App;
