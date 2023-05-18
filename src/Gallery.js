
import {useEffect, useState, useTransition} from 'react';
import axios from 'axios';
import Photos from './Photos';

const Gallery=()=>{
    const [photos,setPhotos]=useState([])
    const [isPending,startTranstion]=useTransition();
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(Response=>{
            console.log("הגיעה!!!!!!!!!!!!!!")
            setPhotos(Response.data)
            console.log(Response.data)

        })
        .then(()=>{
            console.log("startTranstion")
            startTranstion(()=>{})
        })
        .catch(error=>{
            console.log("error")
            //    console.error("juyhgfc")
        })
    },[startTranstion])



    return(
        <>   
         { isPending ? (<h1 >loading imeges...</h1>) :  (    
        <ul>
       

        {photos.map(item=>{return<li key={item.id}>           
               <Photos picturs={item}/>
               </li>
        })}
        </ul>)}
        </>
    )
}

export default Gallery;
