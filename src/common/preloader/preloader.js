import React from "react";
import preloaderImg from "../../img/Spinner-1s-200px.svg";

let Preloader  = (props)=>{
    return <div style={{backgroundColor:'white'}}>
        <img src={preloaderImg} alt="spinner" />
    </div>
}
export default Preloader;
