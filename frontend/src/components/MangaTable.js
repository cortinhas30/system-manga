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
    <div>MangaTable</div>
  )
};

export default MangaTable