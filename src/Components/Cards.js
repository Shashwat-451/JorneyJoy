import react, { useState } from 'react'
import './Cards.css'
function Cards({dataa,removeTours}){

    const [data,setData]=useState(dataa);
    const [readmore,setReadmore]=useState(false);
    // ${...} is a template literal syntax in JavaScript. It allows you to embed expressions inside a string. In this case, the expression is the result of .substring(0, 200).
    const description=readmore?dataa.info:`${dataa.info.substring(0,200)}...`;
    
    function readmoreHandler() {
        setReadmore(!readmore);
    }
 

    return(
        <>
          <div className='card'>
            <div className='image'>

                <img src={dataa.image} alt/>
            </div>
            <div className='price'>
                <p>₹ {dataa.price}</p>
            </div>
            <div className='name'>
                <p>{dataa.name}</p>
            </div>
            <div className='info'>
                <p>{description} <span className='read-more' onClick={readmoreHandler}>
                    {readmore?`Show Less`: `Read\More`}
                </span></p>
                
            </div>
            <div className='btn'>
                <button onClick={()=>removeTours(dataa.id)}>Not Interested</button>
            </div>
          </div>
        </>
    )
}

export default Cards;