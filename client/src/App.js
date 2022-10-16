import './App.css';
import {useState} from "react";
import axios from "axios"


function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);



  const [employeeList, setEmployeeList] = useState([])

  // !When we make a request, we get all the info from the database, stored it in an array, and display it in frontend.


  const addEmployee =()=>{
    axios.post('http://localhost:3001/create', {name:name, age:age, country:country, position:position, wage:wage,})
    .then(()=>{
      console.log("Success from frontend")
      setEmployeeList([...employeeList, {name:name, age:age, country:country, position:position, wage:wage,}])
    })



        //!now see in index.js, we send this object to the body attribute of req, so it holds all this data.
        //!From there, we can insert that data to the database
        //!then we will console out a success message
  }

  
  const getEmployees=()=>{
    axios.get('http://localhost:3001/employees', {name:name, age:age, country:country, position:position, wage:wage,})
    .then((response)=>{
      // console.log(response)
      setEmployeeList(response.data)
    })
  }

  return (
    <div className="App">
      
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" name="name" onChange={(event)=>{setName(event.target.value)}}></input>

  <label htmlFor="Age">Age</label>
  <input type="text" id="Age" name="Age"  onChange={(event)=>{setAge(event.target.value)}}></input>

  <label htmlFor="Country">Country</label>
  <input type="text" id="Country" name="Country" onChange={(event)=>{setCountry(event.target.value)}}></input>

  <label htmlFor="Position">Position</label>
  <input type="text" id="Position" name="Position" onChange={(event)=>{setPosition(event.target.value)}}></input>

  <label htmlFor="Wage">Wage</label>
  <input type="text" id="Wage" name="Wage" onChange={(event)=>{setWage(event.target.value)}}></input>
  
  <button onClick={addEmployee}>Submit</button>

  <hr></hr>

  <button onClick={getEmployees}>Show employees</button>
  
  {employeeList.map((value,key) => {
    return <div className='employee'>
          <p>Name: {value.name}</p>
          <p>Age: {value.age}</p>
          <p>Country: {value.country}</p>
          <p>Position: {value.position}</p>
          <p>Wage: {value.wage}</p>
          
       </div>

  })}


    </div>
  );
}

export default App;


  // const show=()=>{
  //   document.write(name+age+country+position+wage)
  // }