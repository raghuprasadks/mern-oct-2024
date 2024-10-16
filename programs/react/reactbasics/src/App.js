import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Employees from './Employees';
import SimpleInterest from './SimpleInterest';
import Counter from './Counter';
import SimpleMathCalculator from './components/SimpleMathCalculator';
import FetchAPIDemo from './components/FetchAPIDemo';
import Users from './components/Users';
import Student from './components/Student';


function App() {

  const studentdata =[{
    id: 1,
    name: "Charlie",
    job: "Janitor"
    },
    {
    id: 2,
    name: "Mac",
    job: "Bouncer"
    },
    {
    id: 3,
    name: "Dee",
    job: "Aspiring actress"
    },
    {
    id: 4,
    name: "Dennis",
    job:"Programmer"
  }]
  return (
    <div className="App">
     <h1 className='header'>Welcome to react</h1>
     {/**
     <Header></Header>
     <Content></Content>
     <Employees></Employees>
     <SimpleInterest></SimpleInterest>
     <Counter></Counter>
     <SimpleMathCalculator></SimpleMathCalculator>
     <FetchAPIDemo></FetchAPIDemo>
     <Users></Users>
       
      */}

      <Student data={studentdata}></Student>
      
      
      
      
    </div>
  );
}

export default App;
