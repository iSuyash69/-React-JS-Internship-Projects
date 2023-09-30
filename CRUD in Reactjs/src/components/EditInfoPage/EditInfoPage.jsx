import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditInfoPage=()=>{

    const [submit,setSubmit]=useState(0);
    const navigate=useNavigate();
    const [error,setError]=useState(false);
    const [inputData,setInputData]=useState([]);
    const {id}=useParams();

    useEffect(()=>{fetchData();},[]);

    const fetchData=()=>{
        axios.get("http://localhost:8080/posts/details/"+id)
        .then((response)=>{
            setInputData(response.data.data);
        })
        .catch(()=>{
            console.log("Get request failed");
        })
    }
    
    const handleData=(event)=>{
        const{name,value}=event.target;
        setInputData({...inputData,[name]:value});
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setSubmit(1);

          
        console.log(inputData);
        axios.put("http://localhost:8080/posts/details/edit/"+id,inputData)
        .then((response)=>{
            setSubmit(2);
            console.log(response.data.data);
        })
        .catch(()=>{
            console.log("post request failed");
            setError(true);
        })
    }
    console.log(inputData);

    if(error==true){
        return(<h2>Post request failed</h2>);
    }
    if(error==false && submit==1){
        return(<h2>submitting details.....</h2>)  
    }
    if(submit==2){
        navigate("/");
    }

    // console.log(inputData);

    return(
        <div className="add-page-main-container">
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={inputData.name} onChange={handleData} />
        </div>
        <div>
          <label>College: </label>
          <input type="text" name="college" value={inputData.college} onChange={handleData} />
        </div>
        <div>
          <label>Address: </label>
          <input type="text" name="address" value={inputData.address} onChange={handleData} />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit
          </button>
        </div>
      </div> 
    );
}

export default EditInfoPage;