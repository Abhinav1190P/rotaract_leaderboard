import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup} from 'react-bootstrap';
const ListOfPPL = (props) =>{

const returnList = (pdata) =>(
   pdata?
   pdata.filter((item)=>{
       if(props.keyword==""){
           return item
       }
       else if(item.name.toLowerCase().includes(props.keyword.toLowerCase())){
        return item
       }
   }).map((item,i)=>(

       <ListGroup className= "listgrpcontainer" horizontal>
    <ListGroup.Item  className= "listgrpcontainer-item one">{item.srnoval}</ListGroup.Item>
    <ListGroup.Item className= "listgrpcontainer-item two">{item.team}</ListGroup.Item>
    <ListGroup.Item className= "listgrpcontainer-item three">{item.name}</ListGroup.Item>
    <ListGroup.Item className= "listgrpcontainer four">{item.score}</ListGroup.Item>
       </ListGroup>
   ))
   :null
)


    var data = [
{
    parent:'leaderpeeps_container one',
    srno:'leaderpeeps_container one srno',
    srnoval:'1',
    logo:'leaderpeeps_container one logo',
    nameclass:'leaderpeeps_container one name',
    name:'Abhinav',
    scoreclass:'leaderpeeps_container one score',
    teamclass:'leaderpeeps_container one team',
    team:'Alliance',
    score:'450',
},
{
    parent:'leaderpeeps_container two',
    srno:'leaderpeeps_container two srno',
    srnoval:'2',
    logo:'leaderpeeps_container two logo',
    nameclass:'leaderpeeps_container two name',
    name:'Sandeep',
    scoreclass:'leaderpeeps_container two score',
    teamclass:'leaderpeeps_container two team',
    team:'Gochi Gang',
    score:'450',
},
{
    parent:'leaderpeeps_container three',
    srno:'leaderpeeps_container three srno',
    srnoval:'3',
    logo:'leaderpeeps_container three logo',
    nameclass:'leaderpeeps_container three name',
    name:'Riya',
    scoreclass:'leaderpeeps_container three score',
    teamclass:'leaderpeeps_container three team',
    team:'Peaky Blinders',
    score:'450',
},
{
    parent:'leaderpeeps_container four',
    srno:'leaderpeeps_container four srno',
    srnoval:'4',
    logo:'leaderpeeps_container four logo',
    nameclass:'leaderpeeps_container four name',
    name:'Bhavesh',
    scoreclass:'leaderpeeps_container four score',
    teamclass:'leaderpeeps_container four team',
    team:'Amigos',
    score:'450',
},
{
    parent:'leaderpeeps_container five',
    srno:'leaderpeeps_container five srno',
    srnoval:'5',
    logo:'leaderpeeps_container five logo',
    nameclass:'leaderpeeps_container five name',
    name:'Ravi',
    scoreclass:'leaderpeeps_container five score',
    teamclass:'leaderpeeps_container five team',
    team:'Hustlers',
    score:'450',
},
{
    parent:'leaderpeeps_container six',
    srno:'leaderpeeps_container six srno',
    srnoval:'6',
    logo:'leaderpeeps_container six logo',
    nameclass:'leaderpeeps_container six name',
    name:'Rahul',
    scoreclass:'leaderpeeps_container six score',
    teamclass:'leaderpeeps_container six team',
    team:'Musketeers',
    score:'450',
}

    ]


    return(
        <div>
            {returnList(data)}
        </div>
    )
}

export default ListOfPPL
