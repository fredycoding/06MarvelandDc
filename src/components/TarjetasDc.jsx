import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Tarjetas.css'
import { Loader } from './Loader'

export const TarjetasDc = () => {
    const [personajes, setPersonajes] = useState([])
    useEffect(() => {

        const obtenerPost = async () => {

            try {
                let response = await axios.get("https://sheroesfredy.herokuapp.com/superheroes");
                let data = await response.data;

                setPersonajes(data)
            } catch (err) {
                // Errores
                console.log("Data error: ", err);
            }
        };

        obtenerPost()

    }, [])

    if(!personajes.length){      
         
        return(
            <div className='flex justify-center items-center mt-40'>
                <Loader/>
            </div>
        )
    }



    return (
        <>
        <h1 className='text-center font-black mt-6 text-6xl'>DC HEROES</h1>
            <div className="contenedor">
                {personajes.map((item) => (
                    (item.tipo === "heroes-dc") ?
                        <div className='card animate__animated animate__zoomInDown bg-black hover:bg-red-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' key={Math.random().toString(36).slice(2)}>
                           <Link to={`/heroe/${item.id}`}> <img src={item.imagen} className="object-fill" alt='...' /></Link>
                            <h1 className="uppercase font-bold pt-2">{item.nombre}</h1>
                            <p className='p-2'>{item.poderes}</p>
                        </div>
                        : ""

                ))

                }

            </div>
        </>
    )
}
