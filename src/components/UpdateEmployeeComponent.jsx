import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

// 6). e. membuat component update
class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)
// 6). f. fungsi this state adalah untuk menyediakan ruang kosong untuk tempat data
        this.state ={
            id: this.props.match.params.id,
             firstName: '',
             lastName: '',
             emailId:''   
        }
// 6). l. untuk menjalankan component yang ada
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res) =>{
            let employee = res.data;
            this.setState({firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            });
        });
    }
// 6). k. komponen update employee digunakan untuk menangkap data yang akan di edit lalu data yang di tangkap akan di proses pada service
    updateEmployee = (e) =>{
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }

    // 6). g. set firstname
    changeFirstNameHandler = (event) =>{
        this.setState({firstName: event.target.value});
    }

    // 6). h. set lastname
    changeLastNameHandler = (event) =>{
        this.setState({lastName: event.target.value});
    }
    
        // 6). i. set email
    changeEmailHandler = (event) =>{
        this.setState({emailId: event.target.value});
    }

    // 6). j. component cancel gunanya untuk kembali ke halaman employees setelah kondisi selesai 
    cancel(){
        this.props.history.push('/employees');
    }
    render() {
        return (
            <div>
                {/* 6). e. view kolom */}
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name :</label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name :</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Id :</label>
                                        <input placeholder="Email Address" name="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default UpdateEmployeeComponent;