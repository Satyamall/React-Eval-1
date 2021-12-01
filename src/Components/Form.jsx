import { useState } from "react"


export default function Form({onTask}){

    const [formData,setFormData]=useState({
        name: "",
        type: "",
        year: null,
        price: ""
    });

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Success Booking")
        onTask(formData);
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div style={{border: "1px solid black",margin: 10}}>
               <input type="text" value={formData.name} onChange={handleChange} placeholder="Name Car" name="name"/>
               <br/>
               <br/>
               <input type="text" value={formData.type} onChange={handleChange} placeholder="Type" name="type"/>
               <br/>
               <br/>
               <input type="number" value={formData.year} onChange={handleChange} placeholder="Year" name="year"/>
               <br/>
               <br/>
               <input type="number" value={formData.price} onChange={handleChange} placeholder="Price" name="Price"/>
               <br/>
               <br/>
               <input type="submit" value="Buy Now" />
            </div>
        </form>
        </div>
    )
}