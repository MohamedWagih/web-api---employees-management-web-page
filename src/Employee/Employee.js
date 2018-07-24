import React, { Component } from 'react';
import axios from 'axios';


class Employee extends Component {

    deleteEmployeeHandler = (id) => {
        axios.delete('http://employeesintern.azurewebsites.net/api/employees/'+id)
        .then(()=>{this.props.loadEmployeesHandler()});
    }

    render(){
        return (
        <tr className="align-top">
            <td>{this.props.emp.id}</td>
            <td>{this.props.emp.name}</td>
            <td>{this.props.emp.mobile}</td>
            <td>{this.props.emp.telephone}</td>
            <td>{this.props.emp.address}</td>
            <td>{this.props.emp.userName}</td>
            <td>{this.props.emp.password}</td>
            <td>
                <button className="update btn btn-primary" onClick={() => this.props.edit(this.props.emp)}><span><i className="far fa-edit"></i></span></button>
                <button className="delete btn btn-danger" onClick={() => this.deleteEmployeeHandler(this.props.emp.id)}><span><i className="far fa-trash-alt"></i></span></button>
            </td>
        </tr>
        );
    }
}

// const employee = (props) => {
//     return (
//         <tr className="align-top">
//             <td>{props.id}</td>
//             <td>{props.name}</td>
//             <td>{props.mobile}</td>
//             <td>{props.tele}</td>
//             <td>{props.address}</td>
//             <td>{props.userName}</td>
//             <td>{props.password}</td>
//             <td>
//                 <button className="update btn btn-primary" id={employee.id}><i className="far fa-edit"></i></button>
//                 <button className="delete btn btn-danger" id={employee.id}><i className="far fa-trash-alt"></i></button>
//             </td>
//         </tr>
//     );
// };


export default Employee;