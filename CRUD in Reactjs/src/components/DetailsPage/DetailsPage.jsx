import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LandingPageItems from "../LandingPage/LandingPageItems";

const DetailsPage=()=>{

    const navigate=useNavigate();
    const [item,setItem]=useState([]);
    const {id}=useParams();
    useEffect(()=>{fetchData();},[]);

    const fetchData=()=>{
        axios.get("http://localhost:8080/posts/details/"+id)
        .then((response)=>{
            setItem(response.data.data);
        })
        .catch(()=>{
            console.log("Get request failed");
        })
    }
    console.log(item);

    const handleClick=(event)=>{
        axios.delete("http://localhost:8080/posts/details/"+id)
        .then((response)=>{
            alert("id:"+id+" removed successfully");
            navigate("/");
        })
        .catch(()=>{
            console.log("Delete request failed");
        })
    }

    return(
        <div>
            <h3>Id: {item.id}</h3>
            <h2>Name: {item.name}</h2>
            <h2>College: {item.college}</h2>
            <h3>Address: {item.address}</h3>
            <button onClick={handleClick} style={{marginTop:"5px"}}>Delete Info</button>
            <Link to={"/details/edit/"+id}><button style={{marginTop:"5px"}}>Edit Info</button></Link>
        </div>
    );
}

export default DetailsPage;