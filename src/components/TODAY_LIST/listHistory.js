import React, { Component } from 'react';
import { FlipCard } from 'react-flop-card';
import './listHistory.css'





class ListHistory extends Component  {

 constructor(props) {
       super(props);
       this.state = { dayArray: [{ name : "MONDAY" ,index : 0, key : false , calories : "200"},
                                  { name : "TUESDAY" ,index :1 , key : false , calories : ""},
                                  { name : "WEDNESDAY" ,index :2, key : false , calories : ""},
                                  { name : "THURSDAY" ,index :3, key : false , calories : ""},
                                  { name : "FRIDAY" ,index :4, key : false , calories : ""},
                                  { name : "SATURDAY" ,index :5 , key : false , calories : ""},
                                  { name : "SUNDAY" ,index :6 , key : false , calories : ""}
                                  ]};

      this.cards = Array.apply(null, {length: 7}).map((val, ind) => ({

                                                               key: String(ind),

                                                                style: {
                                                                 front: getFrontStyle,
                                                                 back: backStyle,
                                                                  wrapper: wrapperStyle
                                                                },
                                                                
                                                                  frontChild: (<p style={ letterStyle}>{  front(ind,this.state) }</p>),

                                                                 backChild: (<p style={ letterStyle }>{ back(ind,this.state) }</p>),

                                                                 onClick :()  => {

                                                                  if(!(this.state.dayArray[ind].key))
                                                                  {   let obj = this.state.dayArray; obj[ind].key =  true;
                                                                    this.setState({ dayArray :obj });}
                                                                  
                                                                 },
                                                                   onMouseOut: () => {  let obj = this.state.dayArray; obj[ind].key = false;
                                                                    this.setState({ dayArray :obj });} 

                                                                  })); 
     }

 
  render() {
         return (
           <div>
               <header >
                   <h1>THIS WEEK</h1>
    
                 </header>
                  <div className = 'containerStyle' >
                        { this.cards.map(({
                           key, frontChild, backChild,  onmouseleave, style,onClick, onMouseOut
                           }) => (
            
                            <FlipCard
                               onMouseOut = { onMouseOut}
                              key={ key }
                              flipped={ this.state.dayArray[key].key  }
                              onClick = {onClick} 
                              
                              frontChild={ frontChild } backChild={ backChild }
                              width={ 250 } height={ 250 } style={ style }/>
                  )) }</div>
                  </div>
      
  );}

} 
  

const backStyle = {
                      backgroundColor: 'orange',
                      borderRadius: '40px'
                  };
 
const letterStyle = {
                      color: 'black',
                      fontSize: '30px',
                      margin: '10px 0',
                      textAlign: 'center',
                      fontFamily: 'sans-serif'
                    };


const wrapperStyle = {
                        display: 'inline-block',
                        margin: '2px'
                    };
                                                              
const  getFrontStyle = {
    
                        background: 'Aquamarine',
                        borderRadius: '20px',
                        color: 'black',
                        textAlign: 'center'
    
                      }

function front(ind,state) {

  if(state.dayArray[ind].index == ind)
  {
   let day =state.dayArray[ind].name;
   let calories = state.dayArray[ind].calories;
  
   return(<div>{day}</div>);
  }

}

function back(ind,state) {


  

}
 


export default ListHistory;
