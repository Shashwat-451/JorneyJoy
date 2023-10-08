import { useState } from 'react';
import react from 'react';
import Card from './Cards';
import './Tours.css'
function Tours(props){
    const [data,setData]=useState(props.data);
    console.log(data);
   
    function removeTours(id){
        const newTours=data.filter((tourr)=>tourr.id!==id)
        setData(newTours);
    }
    if(data.length==0)
    {
        return(
            <>
            <div className='refresh btn'>
                <h2>No Tours Left</h2>
                <button  onClick={()=>setData(props.data)}>Refresh</button>
            </div>
            </>
        )
    }  
    return(
        <>
         <div className='wrapper'>
            <div className='heading'>
           <h1>Journey Joy</h1>
            </div>
            <div className='container'>
            {
                data.map((cards)=>{
                    console.log(cards);
                    return(
                        
                        <Card dataa={cards} removeTours={removeTours}/>
                    )
                })
            }
         </div>
         </div>
        </>
    )
};

export default Tours;