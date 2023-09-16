import React from "react";
import ReactDOM  from "react-dom/client";
import Body from "./components/Body";

const AppLayout=()=>{
    return(
        <div className="main-container">
            <Body/>
        </div>
    );
}

const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout/>);