import {Link} from "react-router-dom";
import { useRef, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import LandingPageItems from "./LandingPageItems";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LandingPage=()=>{

    const [items,setItems]=useState([]);
    const [error,setError]=useState(false);
    const [jugad,setJugad]=useState(2);
    const prevItemsLengthRef=useRef(0);
    console.log(items);

    const fetchData = () => {
        axios.get('http://localhost:8080/posts')
          .then((response) => {
            setItems(response.data.data);
            setError(false);
            setJugad(3);
            console.log(response.data.data);

          })
          .catch(()=>{
            setError(true);
            setJugad(2);
            console.log("Request failed");
          });
      };
      
    useEffect(()=>{
        const fetchDataInterval=setInterval(()=>{
            fetchData();
        },2500);
        fetchData();
        return()=>clearInterval(fetchDataInterval);
    },[]);

    useEffect(() => {
        if (items.length !== prevItemsLengthRef.current) {
          toast('Data updated!');
        }
        prevItemsLengthRef.current = items.length;
      }, [items]);

    const shimmer=()=>{
        if(error==false && jugad==2){
            return(
                <h3>Loading.....</h3>
            );
        }
        else if(error==true){
            return null
        }
    }

    return(
        <div className="main-container">
            <h1>Name and information of students:</h1>
            {shimmer()}
            <div className="items-container">
                {(error==true) ? (
                    <h2>Unable to fetch data</h2>
                ) : (
                    items.map((data,i)=>{
                        return(<Link style={{textDecoration:"none"}} to={"/details/"+data.id} key={i}><LandingPageItems data={data}/></Link>);
                    })
                )}
            </div>
            <div className="buttons">
                <button><Link to={"/add"} className="add button">Add Information</Link></button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
}

export default LandingPage;