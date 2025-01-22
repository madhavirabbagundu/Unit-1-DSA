import React from 'react';
import './App.css';

function Data() {
  const [data,setData] = React.useState([])

  React.useEffect(()=>{
  fetch(`https://fakestoreapi.com/products`)
  .then((res)=>res.json())
  .then((json)=>setData(json))
  },[])
  return (
    <div className="App">
     {
      data.map((item=>(
        <div>{item.title}</div>
      )))
     }
    </div>
  );
}

export default Data;
