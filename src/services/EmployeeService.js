// 3). a. import library axios
import axios from 'axios';
    
// 3). b. menyambungkan url springboot ke dalam web base react js
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
class EmployeeService{

    // 3). c. get data dari spring boot 
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    // 5). fungsi ini berguna untuk mengirim data ke dalam rest api spring boot
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    // 6). m. fungsi yang akan menangkap id employye 
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    // 6). o. setelah id ditangkap lalu data akan di rubah
    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    // 7). a. fungsi delete berfungsi menghapus database sesuai dengan id 
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()