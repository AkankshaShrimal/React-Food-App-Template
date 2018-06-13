import React, { Component } from 'react';
import {
  Button,
   Label, 
   Input, 
   Modal, 
   ModalHeader, 
   ModalBody, 
   ModalFooter, 
   Container, 
   Row, 
   Col  } from 'reactstrap';




class Search extends Component 
{
   constructor(props) 
   {
       super(props);
        this.state = { modal: false, value : {name:"",quantity :"", time:""},selectVal : ""};
       
        this.selected_item = this.selected_item.bind(this);
        this.toggle = this.toggle.bind(this);
        this.addItem = this.addItem.bind(this);
         this.addQuantity = this.addQuantity.bind(this);

      
   }

  selected_item(event)
  {
       this.setState({selectVal : event.target.value});
       this.props.GetInfo(event.target.value);   
  }

  addQuantity(event)
  {
        let  obj =this.state.value;
         obj["quantity"] = event.target.value;
         this.setState({value : obj });
  }

  toggle() 
  {
    if(this.state.selectVal)
     {
          let  obj ={};
        obj["name"] = this.state.selectVal;
          this.setState({value : obj });
         
          this.setState({modal: !this.state.modal}); 

     }
  }
        


  addItem()
  {    
      
      if(this.state.value.quantity)
      {
            let date = new Date();
  
             let  obj =this.state.value;
             obj["time"] = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            
             this.props.getSelectedValue(this.state.value); 
            this.props.set(this.state.value);
     
            if(this.state.value )
                 this.setState({modal: !this.state.modal}); 
      } 
  } 
        
  render()
  {
    return(
            <div> 

               <Container>
                    <Row>
                        <Col>
                          <Label for="foodSelect"><b>Select:</b></Label>
                           <Input type="select" onChange={this.selected_item} >
                              <option value="" disabled  selected hidden>Select food item </option>
                              <option>Apple</option>
                              <option>Sandwhich</option>
                              <option>Pizza</option>
                              <option>Banana</option>
                              <option>Pasta</option>
                          </Input>
                         </Col>
                    </Row>
                                          
                     <Row>
                         <Col>
                            <Button onClick ={ this.toggle} color="success" size="large">DONE
                            </Button>
                        </Col>
                    </Row>
                </Container>
                                        
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                      <ModalHeader toggle={this.toggle}> {this.state.value.name}</ModalHeader>
                           <ModalBody>
                                <i> this is information related to food item selected.</i>
                              <Row>
                                 <Col>
                                     <Label for="quantitySelect" >QUANTITY</Label>
                                  </Col>
                                  <Col>
                                     <Input type="number"  min="1" onChange={this.addQuantity}  >

                                      </Input>
                                   </Col>
                                            
                                  
                               </Row>
                             </ModalBody>
                    <ModalFooter>
                         <Button color="primary" outline onClick={this.addItem  }>ADD</Button>{' '}
                         <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
            </Modal>
                                           
                                
      </div>
                          
         );
   }
}

export default Search;
