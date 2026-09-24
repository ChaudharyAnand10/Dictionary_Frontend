import React from 'react'
import { useState } from 'react'

function App() {

  const [word , setWord] = useState("");

  const added = async ()=>{
    if(!word){
      alert("please enter a word");
      return ;
    }
    
    const response = await fetch("http://localhost:4000/api/words",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        word:word
      })
    })

    const data =await  response.json();
    alert(data.message);
    setWord("");

  }
  return (
    <div>
      <h1 className='text-3xl font-bold text-center text-gray-800 mb-2'>Dictionary</h1>

      <input
       type="text" 
       placeholder='enter a word'
       value={word}
       onChange={(e)=>setWord(e.target.value)}
       className='flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:rin-2 focus:ringblue-500'
       />


       <button onClick={added} className='  px-5 py-3 bg-blue-300 text-white font-medium rounded-lg hover:bg-blue-700 transition'>
        add word 
       </button>
    </div>
    
  )
}

export default App