import React from 'react'
import '../../css/styles.css'
import {Link} from 'react-router-dom'
const Eventlanding =()=>{

var data = [
    {
        id:1,
        blackdp:'card_blackimg',
        text:'card_text'
    },
    {
        id:2,
        blackdp:'card_blackimg',
        text:'card_text'
    },
    {
        id:3,
        blackdp:'card_blackimg',
        text:'card_text'
    },
    {
        id:4,
        blackdp:'card_blackimg',
        text:'card_text'
    },
    {
        id:5,
        blackdp:'card_blackimg',
        text:'card_text'
    },
    {
        id:6,
        blackdp:'card_blackimg',
        text:'card_text'
    },

    {
        id:7,
        blackdp:'card_blackimg',
        text:'card_text'
    },
    {
        id:8,
        blackdp:'card_blackimg',
        text:'card_text'
    },
    {
        id:9,
        blackdp:'card_blackimg',
        text:'card_text'
    },
    {
        id:10,
        blackdp:'card_blackimg',
        text:'card_text'
    },
    {
        id:11,
        blackdp:'card_blackimg',
        text:'card_text'
    },
    {
        id:12,
        blackdp:'card_blackimg',
        text:'card_text'
    }

]

 const returnCard =(pdata) =>(
    pdata ? 
    pdata.map((item,i)=>(
        <div>
            
          
          <div className={item.blackdp}>
                <Link to="/event_one_view">
                1
                </Link>
            </div>
         
        
            <div className={item.text}>
                <h3>Garbe ki shaam</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                      est laborum.</p>
            </div>

        </div>
    ))
    :null
)

    
        return (
            <div className = "main_event_div">

<div className = "events_header">
<div className= "l_sphere1">
</div>
<div className= "l_sphere2">
</div>
<div className= "l_sphere3">
</div>
<div className= "l_sphere4">
</div>
<div className= "l_sphere5">
</div>

<h1>
    Events
</h1>
</div>

    
<section className='FlexContainer'>
{returnCard(data)}
</section>
            </div>
        )
    
}

export default Eventlanding
