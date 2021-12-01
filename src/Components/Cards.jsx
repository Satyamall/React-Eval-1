import { useState } from "react";
import Form from "./Form";
import axios from "axios";

export default function Cards({image,name,type,year,price}){

    const [dis,setDis]=useState(false);

    const handleClick=()=>{
        setDis(true);
    }

    const handleTask=({name,type,price,year})=>{
        const payload={
          name: name,
          type: type,
          price: price,
          year: year
        }
        const config = {
          url: " http://localhost:3000/orders",
          method: "post",
          data: payload
        };
        return axios(config);
      }
    return (
        <div style={{border: "1px solid black"}}>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
               Name: {name}
            </div>
            <div>Type: {type}</div>
            <div>Year: {year}</div>
            <div>Price: {price}</div>
            <button onClick={handleClick}>Buy Now</button>
            {dis? <div>
                <Form onTask={handleTask}/>
            </div> : ""}
        </div>
    )
}