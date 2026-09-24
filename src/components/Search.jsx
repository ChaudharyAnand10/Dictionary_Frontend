import React from 'react'
import { useState } from 'react'

function Search() {

    const [word , setWord]= useState("");
    const [suggestions , setSuggestions]=useState([]);

    const handleChange = async(e)=>{
        const value = e.target.value;
        setWord(value);

        if(!value){
            setSuggestions([])
            return
        }

        const response = await fetch(`http://localhost:4000/api/suggest?prefix=${value}&k=5`)

        const data = await response.json();
        setSuggestions(data);

    };

    const search = async ()=>{
        const response = await fetch(`http://localhost:4000/api/search?word=${word}`)
        const data =await response.json();



        
        if(data.result == "found"){
            setWord("");
            alert("serch found")
        }else{
            alert("serch not found ")
        }
    }




  return (
      <div>
        <h1 className='text-2xl font-bold text-center mb-5'>Search Word </h1>

        <input type="text" 
        onChange={handleChange}
        value={word}
        placeholder="enter word"
        className='flex-1 border borde-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500'
        />
        

        <button onClick={search} className='bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700'>Search</button>


        {

            suggestions.map((item)=>(

                <p key={item._id}
                onClick={()=>{
                    setWord(item.word);
                    setSuggestions([]);
                }}
                className='px-4 py-2 cursor-pointer hover:bg-gray-100'
                >{item.word}</p>
            ))
        }
      </div>

    
    
  )
}

export default Search