import {useNavigate} from 'react-router-dom';



const Button1=()=>{
    let nav=useNavigate()
    
    return(<input type='button' value="להצגת התמונות" onClick={()=>{
        nav('/img')
    }}/>)
}
export default Button1