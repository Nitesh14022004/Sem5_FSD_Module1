// import React from 'react'
// import { Mycomponent  } from './components/Mycomponent';

// import { Mycomponent2 } from './components/Mycomponent2';
// import { Mycomponent3 } from './components/Mycomponent3';
// export const App = () => {
//   return (
//     <div>
//       <Mycomponent/>
//       <Mycomponent2/>
//       <Mycomponent3/>
//     </div>
//   )
// }
// export default App;




// import React from 'react'
// import "./components/indira.css"


// export const App = () => {
//   return (
//     <div>
//       <h1>This is something beyond anything!!!!!!</h1>
//       <div className='mysquare'></div>
//     </div>
//   )
// }
// export default App;






// import React from 'react'
// import "./components/stylesquare.css"
// export const App = () => {
//   return (
//     <div>
//       <h1 style = {{color: "white", backgroundColor: "black", textAlign: "center", padding: "30px"}}> Inline Styling</h1>
//       <div className='square'></div>
//     </div>
//   )
// }

// export default App;










// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// export const App = () =>{
//   const [username, setUsername] = useState("Nitesh");
//   useEffect(()=>
//   {console.log("I am clicked")}, {username}
// )
//   const changeHandler = e =>
//  {}
//   return(
//     <div>
//       <input type = "text" name = "username"
//       value = {username} onChange={changeHandler}/>
//       <h1>{username}</h1>
//     </div>
//   )
// }

// export default App








// import React, { useState } from 'react'
// export const App1 = () =>{
//   const [username] = useState("Nitesh")
//   return (
//     <div>
//       <h1> {username}</h1>
//     </div>
//   )
// }
// export default App1



import axios from 'axios';
import React, { useEffect, useState } from "react";
const App=()=>
{
  const [data,setData]=useState([]);
  useEffect(()=>
  {axios.get("https://jsonplaceholder.typicode.com/todos").then
    (
      response=>setData(response.data)
  )}
  ,[])


return(
  <div>
    <ol>
      {data.map((item,index)=><li> {item.title}</li>)}
    </ol>
  </div>
)
}
export default App;









// import React from 'react';
// export const App = () => {
//   const data =
//   [
//     { sName: "Nitesh", marks: 100},{sName: "Nitesh2",marks:100},
//     { sName: "Nitesh3", marks: 100},{sName: "Nitesh4",marks:100}
//   ]
//   return(
//     <div>
//       {
//         data.map((eachData, index)=><li>{eachData.sName},
//         {eachData.marks} </li>)
//       }
//     </div>
  
//   )
// }
// export default App;























