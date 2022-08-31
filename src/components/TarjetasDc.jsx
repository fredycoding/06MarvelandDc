import { useEffect, useState } from 'react'
import axios from 'axios'
import './Tarjetas.css'

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


    return (
        <>
            <div className="contenedor">
                {personajes.map((item) => (
                    (item.tipo === "heroes-dc") ?
                        <div className='card bg-black hover:bg-red-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                            <img src={item.imagen} className="object-fill" alt='' />
                            <h1 className="uppercase font-bold pt-2">{item.nombre}</h1>
                            <p className='p-2'>Poderes: {item.poderes}</p>
                        </div>
                        : ""


                ))

                }

            </div>
        </>
    )
}
