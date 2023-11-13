import './App.css';
import {useState,useReducer} from "react";
// make reducer function for the hook
function reducer(state,action){
  switch (action.type){
    case 'increment':
      return { count:state.count+1}
    case 'decrement':
      return { count:state.count-1}  
    default:
      return state
  }
}

function App() {

  // const [count, setCount] = useState(0)
  const [list, setList] = useState(['Jack','Jones'])
  const [name,setName] = useState(" ")
  
  const [state,dispatch] = useReducer(reducer, {count:0}) // always create an object as the state



  function addCount(){
    console.log("hello I Am count use state")
    // setCount(prev=>prev+1)
  }

  function handleClickList(){
    setList(list=>list.concat('sheikh'))
  }

  function handleName(e){
    setName(e.target.value)
  }

  const addName=()=>{
    
    setList(list.concat(name))
  }

  const increment=()=>{
    // setCount(prevCount=>prevCount+1)
    dispatch({type:'increment'})
  }

  const decrement=()=>{
    // setCount(prevCount=>prevCount-1)
    dispatch({type:'decrement'})
  }
  return (

    <div className="App">

     {/* <button onClick ={addCount}> Count = {count}</button> */}
      <div> 
        <ul>{list.map(n=>(
          <li key ={n}>{n}</li>
        ))}
        </ul>
       
      </div>

      <button onClick ={handleClickList}>Add Name Sheikh </button>

      <input
        type="text"
        value ={name}
        onChange={handleName}
      />

      <button onClick ={addName}>Add Name </button>

      <button onClick = {increment}> + </button>
      <span> {state.count} </span>
      <button onClick = {decrement}> - </button>
    </div>



    
  );
}

export default App;
