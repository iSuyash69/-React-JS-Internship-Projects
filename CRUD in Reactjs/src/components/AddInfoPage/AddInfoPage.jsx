import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const AddInfoPage=()=>{

    const data={
        id:'',
        name:'',
        college:'',
        address:''
    };

    const [submit,setSubmit]=useState(0);
    const [inputData,setInputData]=useState(data);
    const [error,setError]=useState(false);

    const navigate=useNavigate();

    const handleData=(event)=>{
        const{name,value}=event.target;
        setInputData({...inputData,[name]:value});
    }

    const handleSubmit=(event)=>{
        setSubmit(1);
        event.preventDefault();
        axios.post("http://localhost:8080/posts",inputData)
        .then((response)=>{
            setSubmit(2);
            console.log(response.data.data);
        })
        .catch(()=>{
            console.log("post request failed");
            setError(true);
        })
    }

    if(error==true){
        return(<h2>Post request failed</h2>);
    }
    if(error==false && submit==1){
        return(<h2>submitting details.....</h2>)  
    }
    if(submit==2){
        navigate("/");
    }

    return(
        <div className="add-page-main-container">
        <div>
          <label>Id: </label>
          <input type="text" name="id" value={inputData.id} onChange={handleData} />
        </div>
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


export default AddInfoPage;