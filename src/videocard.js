import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import { Route } from 'react-router';

function Counter() {

  const [videolist, setvideolist] = useState([]);

  useEffect(() => {
     Axios.get('http://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
     .then(resp=>{
         setvideolist([...resp.data])
     })
     .catch(err=>{
         alert('failed')
     })
  })
  
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  }
  
 const Videocard=
     videolist.map((item) => {
    return (<div>
     <img src={item.thumbnail} />
    <h2 style={mystyle}>{item.title}</h2>
    </div>)
})
 

  return (
     
    <div>
     {
         videolist.length>0 ?
         Videocard:<h2>loading...</h2>
        
     } 
    </div>
  );
}
export default Counter
