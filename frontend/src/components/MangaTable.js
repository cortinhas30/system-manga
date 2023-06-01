import React,{useEffect, useState} from 'react';
import axios from 'axios';

const MangaTable = () => {
    const [mangas, setMangas] = useState([]);

    const getMangas = async () =>{
        try{
            const manga = await axios.get("http://localhost:8800");
            setMangas(manga.data);
        } catch (error){
            console.error(error);
        }
    }

    useEffect(() => {
        getMangas();
    }, [setMangas])

    console.log("mangas: ", mangas);

  return (
    <div>
        <table className='w-full divide-y divide-gray-200'>
            <thead className="bg-gray-200">
                <tr>
                    <th>id</th>
                    <th>nome</th>
                    <th>autor</th>
                    <th>volumes</th>
                    <th>demografia</th>
                    <th>genero</th>
                </tr>
            </thead>
            <tbody className='bg-gray-300 p-5'>
                {mangas.map((item, index) => {
                   return <tr key={index}>
                        <td className='text-black'>{item.id_obra}</td>
                        <td>{item.nome_obra}{console.log(item.nome_obra)}</td>
                        <td>{item.autor}</td>
                        <td>{item.volumes}</td>
                        <td>{item.demografia}</td>
                        <td>{item.genero}</td>
                    </tr>;
                })}
            </tbody>
        </table>
    </div>
  )
};

export default MangaTable