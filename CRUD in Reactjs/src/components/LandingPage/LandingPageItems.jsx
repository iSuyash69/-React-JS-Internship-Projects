const LandingPageItems=({data})=>{


    if(data.length===0){
        return(<h2> No available information to display</h2>);
    }

    return(
        <div className="Item-card">
            <h1>{data.name}</h1>
            <h2>{data.college}</h2>
            <h3>{data.address}</h3>
        </div>
    );
}

export default LandingPageItems;
