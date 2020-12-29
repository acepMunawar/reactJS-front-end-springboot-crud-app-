import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
         super(props)

         
         this.state = {
            // 2). 
            //      a. create array employee
                employee: []   
         } 
         this.addEmployee= this.addEmployee.bind(this);

        //  6). c.menjalankan komponent editEmployee  
         this.editEmployee = this.editEmployee.bind(this);
        //  7). c.
         this.deleteEmployee = this.deleteEmployee.bind(this);
        }

        //  7). b. 
        deleteEmployee(id){
            EmployeeService.deleteEmployee(id).then(res =>{
                this.setState({employee: this.state.employee.filter(employee => employee.id !== id)});
            });
        }

        viewEmployee(id){
            this.props.history.push(`/view-employee/${id}`);
        }

        // 6). b.menangkap id data 
        editEmployee(id){
            this.props.history.push(`/update-employee/${id}`);
        }

    // 3). d. komponent untuk get data dari service yang sudah terhubung dengan springboot
    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            this.setState({employee:res.data});
        });
    }

    // 5). c. get service add-employee
    addEmployee(){
        this.props.history.push('/add-employee/-1');
    }
    
    render() {
        return (
            <div>
                {/* 2).
                        a. create form                
                */}
                <h2 className="text-center">Employee List</h2>
                {/* 5). b. add button save employee */}
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                </div>
                    <div className="row">
                        <table className= "table table-striped table-bordered">
                            {/* 2). b. create colom and baris */}
                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Name</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            {/* 2). c. get data */}
                            <tbody>
                                {
                                    this.state.employee.map(
                                        employee => 
                                            <tr key = {employee.id}>
                                                <td>{employee.firstName}</td>        
                                                <td>{employee.lastName}</td>
                                                <td>{employee.emailId}</td>
                                                <td>
                                                    {/* 6). a. add button edit */}
                                                    <button onClick = {() => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                                
                                                    {/* 6). a. add button edit */}
                                                    <button style={{marginLeft: "10px"}} onClick = {() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                                    <button style={{marginLeft: "10px"}} onClick = {() => this.viewEmployee(employee.id)} className="btn btn-info">View</button>
                                                </td>                                                
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;