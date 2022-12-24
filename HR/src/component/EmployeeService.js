import axios from 'axios';
class EmployeeService{
    constructor(){
        this.baseUrl="http://Localhost:4000/employee";
    }
    getEmployee(){
        return axios.get(this.baseUrl);
    }
    getEmployeeHold(){
        return axios.get(this.baseUrl+id);
    }
    getEmployeeApprove(){
        return axios.get(this.baseUrl+id);
    }
}
export default new EmployeeService();