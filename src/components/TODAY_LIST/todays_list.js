import React, { Component } from 'react';
import { Table,Button } from 'reactstrap';
import {
  
  NavLink
} from 'react-router-dom'





class List extends Component  {
     
    
 render()
 {
     return (
         
          
            <div className="container">
          { this.props.listItems.length !== 0 ? 
          
                   <div> 
                     <h1>TODAY!!!</h1> 
                          <Table >
                             <thead>
                                 <tr>
                                     <th >No.</th>
                                     <th> Name</th>
                                     <th> Amount</th>
                                     <th> Time</th>
                                    </tr>
                              </thead>  
                            <tbody>
                                {this.props.listItems.map((item,index) =>
                                               <tr>
                                                  <th scope="row">{index+1}</th>
                                                     <td><b> {item.name} </b></td>
                                                     <td><b> {item.quantity} </b></td>
                                                     <td><b> {item.time} </b></td>
                                                </tr>)}
                           </tbody>
                        </Table> 
                        <Button  color="primary" outline size="large"><NavLink to="/history">DONE</NavLink>
                            </Button>     
                      </div>  
                        
          : null }  
      </div>
      
  );
 }

    
 li
} 
  

export default List;
