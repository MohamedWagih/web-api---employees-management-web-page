import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table/Table';
import Form from './Form/Form';
// import Navbar from './Navbar/Navbar';
import './App.css';

class App extends Component {
  state = {
    employees : [],
    formData : {
      id:"",
      name:"",
      mobile:"",
      telephone:"",
      address:"",
      userName:"",
      password:""
    },
    logged: false
  }

  componentDidMount() {
    this.loadEmployeesHandler();
  }

  loadEmployeesHandler = ()=>{
    axios.get('http://employeesintern.azurewebsites.net/api/employees')
    .then(res => {
      this.setState({employees: res.data});
    })
  }

  formChangeHandler = (event) => {
    const data = this.state.formData;
    data[event.target.name] = event.target.value;
    this.setState({formData: data});
  }

  submitEmployeeHandler = () => {
    axios.post('http://employeesintern.azurewebsites.net/api/employees', this.state.formData)
    .then(res => {
      console.log(res);
      this.loadEmployeesHandler();
      this.setState({formData:{id:"",name:"",mobile:"",telephone:"",address:"",userName:"",password:""}});
    }).catch(error => {
      console.log(error);
    });

  }

  editEmployeeHandler = (empData) => {
    this.setState({formData: empData}); 
    // document.getElementById("update").removeAttribute('disabled');   
    // document.getElementById("submit").setAttribute('disabled','');
    document.getElementById("formH1").innerText = "Update Employee"; 
  }

  updateEmployeeHandler = () => {
    const newData = this.state.formData;
    const id = newData.id;
    delete newData.id;
    console.log("plapla")
    axios.put('http://employeesintern.azurewebsites.net/api/employees/'+id, newData)
    .then(res => {
      console.log(res);
      this.setState({formData:{id:"",name:"",mobile:"",telephone:"",address:"",userName:"",password:""}});
    }).catch(error => {
      console.log(error);
    });
  }

  authenticationHandler = (event)=> {
    let login = {
      userName: document.getElementById('userName').value,
      password: document.getElementById('password').value,
    }
    this.state.employees.forEach(emp=>{
      if(login.userName.toLocaleLowerCase()===emp.userName.toLocaleLowerCase() && login.password===emp.password){
        console.log("logged");
        this.setState({logged: true});
        return;
      }
    });
    console.log("Login Failed!\nWrong user name or password.");
    
  }

  render() {
    if(this.state.logged)
    return (
    <div className="row justify-content-around">
      <div className="col-lg-7">
        <div className="wrap-table">
          <h1 className="mt-10" id="tableH1">Employees Data</h1>
          <div className="table-responsive">
            <Table employees={this.state.employees} loadEmployeesHandler={this.loadEmployeesHandler} edit={this.editEmployeeHandler}/>
          </div>
        </div>
      </div>
      <div className="col-lg-3 ">
        <div className="wrap-form">
          <h1 className="mt-10 add" id="formH1">Add Employees</h1>
            <Form data={this.state.formData} change={(event)=>this.formChangeHandler(event)}/>
          <div className="row">
            <div className="col">
              <button className="btn btn-success btn-block submit" id="submit" onClick={this.submitEmployeeHandler}>Submit</button>              
            </div>
            <div className="col">
              <button  className="btn btn-primary btn-block submit" id="update" onClick={this.updateEmployeeHandler}>Update</button>              
            </div>
          </div>
        </div>
      </div>
    </div>
    );
    else
      return (
        <div className="container login-form">
          <div className="login-wrapper">
          <form autoComplete="off">
            <div className="form-group">
              <input type="email" className="form-control" id="userName" aria-describedby="emailHelp" placeholder="User Name"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <button className="btn btn-primary btn-block" onClick={this.authenticationHandler}>Submit</button>
          </form>
        </div>
          </div>
      );
  }
}

export default App;
