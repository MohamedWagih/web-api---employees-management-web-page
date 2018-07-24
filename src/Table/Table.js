import React, { Component } from 'react';
import Employee from '../Employee/Employee';


class Table extends Component{
    render () {
        return (
            <table className="table table-light table-striped">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Telephone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Username</th>
                    <th scope="col">Password</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="t-body">
                    {this.props.employees.map(emp => {
                    return <Employee 
                        emp={emp}
                        key={emp.id}
                        loadEmployeesHandler={this.props.loadEmployeesHandler}
                        edit={this.props.edit}
                    />
                    })}
                </tbody>
          </table>
        ) ;
    }
}

export default Table;