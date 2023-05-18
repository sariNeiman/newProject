
//https://jsonplaceholder.typicode.com/photos


const Photos=({picturs})=>{
    console.log(picturs.title)
    return(<>
        
        
         <div>
           <li>
                {picturs.title}
           </li>
           <img src={picturs.thumbnailUrl}/>
         </div>
        </>
    )
}

export default Photos;