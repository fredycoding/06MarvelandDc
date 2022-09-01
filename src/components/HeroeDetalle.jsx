import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import 'animate.css'


export const HeroeDetalle = () => {

    let { id } = useParams();

    const [idUrl, setIdUrl] = useState('')
    const [personaje, setPersonaje] = useState([])

    useEffect(() => {
        console.log(`/heroe/${id}`);
        setIdUrl(id)
    }, []);

    useEffect(() => {
        const obtenerPost = async () => {
            try {
                let response = await axios.get(`https://sheroesfredy.herokuapp.com/superheroes/?id=${idUrl}`);
                let data = await response.data;
                console.log(data)
                setPersonaje(data)
            } catch (err) {
                // Errores
                console.log("Data error: ", err);
            }
        };

        obtenerPost()

    }, [idUrl])


    return (
        <div className="text-center">
            {personaje.map((item) => (
                <div className='card bg-black w-96 text-center m-auto mt-10 animate__animated animate__bounceInLeft'>
                    <img src={item.imagen} className="object-fill w-96" alt='...' />
                    <h1 className="uppercase font-bold pt-2 text-3xl">{item.nombre}</h1>
                    <p className='p-2 text-xl'>Poderes: {item.descripcion}</p>
                </div>
            ))}
        </div>
    )
}
