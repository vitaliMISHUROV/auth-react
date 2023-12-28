
import {useState, useEffect} from "react"

export function useData(getData){
    const[data,setData] = useState([]);
    const [isLoading ,setIsLoading] = useState(false);
    const [error ,setError] = useState(null);
    
    const load =()=>{
        setIsLoading(true);
      getData()
        .then(data =>setData(data))
        .catch(error=>setError(error))
        .finally(()=>setIsLoading(false))
    }


useEffect(() => {

    load();
  
}, []);


return{data , isLoading, error}
}

export function useClicker () {
    const[click , setClick] = useState(0);
    const ClickListener =() => setClick(prevClick => prevClick +1);

    useEffect(() => {
        document.addEventListener('click', ClickListener);
        return() =>{
            document.removeEventListener('click', ClickListener);
        }
    },[]);
    return click;

}
