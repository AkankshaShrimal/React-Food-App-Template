import React, { Component } from 'react';
import {
Collapse,
CardBody,
 Card
} from 'reactstrap';






class Info extends Component  {
     
    
 render()
 {
     return (
                <div>
                    <Collapse isOpen={this.props.temp.flag}>
                         <Card id="card">
                                 <CardBody>
                                     { this.props.temp.flag ?  <img src={require(`../../assets/imgs/${this.props.temp.val.toLowerCase()}.jpg`)} alt='img'></img> : null }
                                    
                                        <div>
                                            {this.props.temp.val}<br/>
                                           info about related item
                                        </div>
                                 </CardBody>
                         </Card>
                     </Collapse>
                </div>
            );
 }


}            

export default Info;
