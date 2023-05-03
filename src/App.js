import {useState} from 'react'

function App() {
   const [person, setPerson] = useState({name:'', email:''})
   const [peopleArr, setPeopleArr] = useState([])
   const handleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    let newPerson = {...person, [name]:value}
    setPerson({...newPerson, id:new Date().getTime().toString()})
    newPerson = {name:'', email:''}
    }
   const handleSubmit = (e)=>{
    e.preventDefault()
    setPeopleArr([...peopleArr, person])
    setPerson({name:'', email:''})



   }    
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" id='name' name='name' value={person.name} onChange={handleChange} />
        <label htmlFor="email">email</label>
        <input type="text" id='email' name='email' value={person.email} onChange={handleChange} />
        <button type='submit'>add person</button>
       </form> 
       {peopleArr.map((item)=>{
        const {id, name, email} = item
        return(
          <div key={id}>
            <h1>{name}</h1>
            <h3>{email}</h3>
          </div>
        )
       })}
      </div>
      
      
  );
}

export default App;
