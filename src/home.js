import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './home.css';
import { NavLink } from 'react-router-dom';








class Home extends Component  {
        
    render()
    {
        return ( 
                <div id='divId'>

                    <Button id="button" size="lg"  >
                        <NavLink to="/search" >GETTING STARTED</NavLink>
                    </Button>
                </div>
              
        );
    }

} 
  

export default Home;
