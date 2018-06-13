import React, { Component } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container,
  Row,
  Col,
  Jumbotron,
  
} from 'reactstrap';

import Search from './components/SEARCH_FOOD/food_item_search';
import List from './components/TODAY_LIST/todays_list';
import Info from './components/SEARCH_FOOD/foodInfo';
import './App.css';


class App extends Component 
{
     constructor(props) 
   {
       super(props);
        this.state = {value : {name:"",quantity :""} ,listItems : [],temp : {flag :false,Val :""}};
            
   }

    
    
    render() {
         return(
                <div>
                    
                     <Navbar color="info" dark expand>
                        <NavbarToggler right="true"  />
                        <NavbarBrand href="/">FOOD LOG</NavbarBrand>
                    </Navbar>
                    
                     <Jumbotron id ="jumbotron">
                        <Container>
                            <Row>
                                 <Col> 
                                    <h1>Welcome to HEALTHISM</h1>
                                 </Col>
                             </Row>
                            <Row>
                                 <Col>
                                     <Search  value={this.state.value} getSelectedValue={(value) => this.setState({value})} 
                                     set={(value) =>{  var j= this.state.listItems; j.push(value); this.setState({ listItems: j})}}
                                      GetInfo={(val) =>this.setState({temp :{ flag : true, val : val}})}/>
                                </Col>
                                <Col> 
                                    <Info temp={this.state.temp} />     
                              </Col>
                        
                            </Row> 
                        </Container>   
                    </Jumbotron>
                    <List listItems={this.state.listItems}  /> 
                </div>  
             );
          }
  }

export default App;