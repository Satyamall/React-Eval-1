
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Cards from './Components/Cards';

function App() {
  const [data,setData]=useState([]);
  const [loading,setIsLoading]=useState(false);

  // const getData = () => {
  //   const config = {
  //     url: " http://localhost:3000/cars",
  //     method: "get"
  //   };
  //   return axios(config);
  // };

  useEffect(()=>{
     const config = {
      url: " http://localhost:3000/cars",
      method: "get"
    };
    return axios(config)
    .then((res) => {
      setData(res.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  // const handleGetData = () => {
  //   return getData()
  //     .then((res) => {
  //       setData(res.data);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  
  const handleYear=(year)=>{
    // setData(data.filter((y)=>{
    //   if(year!==0)
    //   {
    //     return y.year===year
    //   }
    //   return 0
    // }))
  }

  const [typeData,setType]=useState({
    types: "All"
  })

  const handleType=(type)=>{
    setType({types: type})
  }

  const [sort,setSort]=useState({
    sortMethod: 0
  })

  const handleSort=(value)=>{
    setSort({sortMethod: value})
  }
  return (
    <div className="App">
       <h1>Car Website</h1>
       <div>
         year:
         {
           [2021,2020,2019,2018,0].map(year=>{
             return <button key={year} onClick={()=>handleYear(year)}>
               {year===0 ? "All": year}
               </button>
           })
         }
       </div>
       <div>
         Type: 
         {
           ["SUV","Swift","XLB","Vita","Hatchback","autocar","All"].map(type=>{
             return <button key={type} onClick={()=>handleType(type)}>
                {type}
               </button>
           })
         }
       </div>
       <div>
         <button onClick={()=>handleSort(1)}>Sort</button>
         <button onClick={()=>handleSort(0)}>All</button>
       </div>
       {
         loading? <h1>Loading...</h1>: 
         data.filter((type)=>{
           if(typeData.types==="All")
           {
             return "All"
            }
            return type.type===typeData.types
         })
           .sort((a,b)=>{
           if(sort.sortMethod===1)
           {
             return a.price-b.price
           }
           return 0;
          }).map((item)=>{
           return <Cards      
                   key={item.id}
                   name={item.name}
                   type={item.type}
                   year={item.year}
                   price={item.price}
                   image={item.image}
                  />
         })
       }
    </div>
  );
}

export default App;
