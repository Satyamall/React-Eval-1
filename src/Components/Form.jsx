import { useState } from "react"


export default function Form({onTask}){

    const [formData,setFormData]=useState({
        name: "",
        phoneNumber: "",
        transaction: ""
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
               <input type="text" value={formData.name} onChange={handleChange} placeholder="Name" name="name"/>
               <br/>
               <br/>
               <input type="text" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" name="phone"/>
               <br/>
               <br/>
               <input type="text" value={formData.transaction} onChange={handleChange} placeholder="Transaction Time" name="time"/>
               <br/>
               <br/>
               <input type="submit" value="ORDER" />
            </div>
        </form>
        </div>
    )
}