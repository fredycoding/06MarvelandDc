import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'




function App() {

  const [personajes, setPersonajes] = useState([])
  useEffect(()=>{
  
    const obtenerPost = async () => {
  
      try {
        let response = await axios.get("http://localhost:4000/superheroes");
      
        let data = await response.data;
       console.log(data);
       setPersonajes(data)
        //localStorage.setItem('datos', JSON.stringify(data));
       // setDatos(data);
      } catch (err) {
        // Errores
        console.log("Data error: ", err);
      }
    };

    obtenerPost()

  },[])


  return (
    <>
    {personajes.map((item)=>(
      <h1>{item.id}</h1>
    ))

    }
      
    </>
  )
}

export default App
