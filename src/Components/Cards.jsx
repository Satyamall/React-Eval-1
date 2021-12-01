
export default function Cards({image,name,type,year,price,handleTask}){
    
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
            <button onClick={handleTask}>Buy Now</button>
        </div>
    )
}