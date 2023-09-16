import { useState } from "react";

const Body=()=>{
    const [Input,setInput]=useState("");

    const mainButtons={
        color:"#87ceeb"
    }

    const equalsToButton={
        position:"absolute",
        width:"145px",
        top:"85%",
        right:"0%",
        color:"yellow"
    }

    const btnClickEvent=(event)=>{
        const currentBtn=event.target.innerText;
        console.log(currentBtn);
        if(Input=="Error"){
            setInput(currentBtn);
        }
        else if(Input!=""){
        console.log(Input);
        setInput(Input.concat(currentBtn));
        }
        else{
            setInput(currentBtn);
        }
    }

    const clearAll=()=>{
        setInput("");
    }

    const backspace=()=>{
        setInput(Input.slice(0,-1));
    }

    const calculate=()=>{
        console.log(Input);
        try{
            const finalOutput=eval(Input);
            setInput(finalOutput.toString());
        }
        catch(error){
            setInput("Error");
        }
    } 

    return(
        <div className="calculator">
            <input className="input-box" type="text" value={Input}></input>
            <div className="buttons-grid">
                <button onClick={clearAll} style={mainButtons}>AC</button>
                <button onClick={backspace} style={mainButtons}>DE</button>
                <button onClick={btnClickEvent} style={mainButtons}>.</button>
                <button onClick={btnClickEvent} style={mainButtons}>/</button>
                <button onClick={btnClickEvent}>7</button>
                <button onClick={btnClickEvent}>8</button>
                <button onClick={btnClickEvent}>9</button>
                <button onClick={btnClickEvent} style={mainButtons}>*</button>
                <button onClick={btnClickEvent}>4</button>
                <button onClick={btnClickEvent}>5</button>
                <button onClick={btnClickEvent}>6</button>
                <button onClick={btnClickEvent} style={mainButtons}>-</button>
                <button onClick={btnClickEvent}>1</button>
                <button onClick={btnClickEvent}>2</button>
                <button onClick={btnClickEvent}>3</button>
                <button onClick={btnClickEvent} style={mainButtons}>+</button>
                <button onClick={btnClickEvent}>00</button>
                <button onClick={btnClickEvent}>0</button>
                <button onClick={calculate} style={equalsToButton}>=</button>
            </div>
        </div>
    )
}
export default Body;