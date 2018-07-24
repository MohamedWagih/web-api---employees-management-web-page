import React, { Component } from 'react';

class Form extends Component{
    render () {
        return (
            <form className="needs-validation" autoComplete="off">
                <div className="form-group"> 
                    <input type="text" className="form-control" id="id_id" name="id" placeholder="ID" value={this.props.data.id} onChange={this.props.change}/>
                </div>	
            
                <div className="form-group"> 
                    <input type="text" className="form-control" id="name_id" name="name" placeholder="Employee Name" value={this.props.data.name} onChange={this.props.change}/>
                </div>

                <div className="form-group"> 
                    <input type="text" className="form-control" id="mobile_id" name="mobile" placeholder="Mobile Number" value={this.props.data.mobile} onChange={this.props.change}/>
                </div>	

                <div className="form-group"> 
                    <input type="text" className="form-control" id="telephone_id" name="telephone" placeholder="Telephone" value={this.props.data.telephone} onChange={this.props.change}/>
                </div>

                <div className="form-group"> 
                    <input type="text" className="form-control" id="address_id" name="address" placeholder="Address" value={this.props.data.address} onChange={this.props.change}/>
                </div>									
                                    
                <div className="form-group"> 
                    <input type="text" className="form-control" id="userName_id" name="userName" placeholder="User Name" value={this.props.data.userName} onChange={this.props.change}/>
                </div>
                
                <div className="form-group"> 
                    <input type="password" className="form-control" id="password_id" name="password" placeholder="Password" value={this.props.data.password} onChange={this.props.change}/>
                </div>
                  
              </form>
        );
    }
}

export default Form;