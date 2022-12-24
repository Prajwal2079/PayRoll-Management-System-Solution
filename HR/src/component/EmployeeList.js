import {useState,useEffect} from "react";
import EmployeeService from "./EmployeeService";
const EmployeeList=()=>{
    let [emparr,setemparr] = useState([]);
    let [flagAll,setflag]=useState(false);
    let [flagApprove,setflagApprove]=useState(false);
    let [flagHold,setflagHold]=useState(false);
    useEffect(()=>{
        EmployeeService.getEmployee().then((response)=>{
            console.log(response.data);
            setemparr(response.data);
        }).catch((err)=>{console.log("error occured",err)});
    },[flagAll]);
    useEffect(()=>{
        EmployeeService.getEmployeeApprove().then((response)=>{
            console.log(response.data);
            setemparr(response.data);
        }).catch((err)=>{
            console.log("error occured",err)});
    },[flagApprove]);
    useEffect(()=>{
        EmployeeService.getEmployeeHold().then((response)=>{
            console.log(response.data);
            seetemparr(response.data)});
    },[flagHold]);
    const setStatusToApprove=()=>{
        //Doubt
    }
    const setStatusToHold=()=>{
        //Doubt
    }
    const render=()=>{
        return emparr.map((emp)=>{
            return <tr key={emp.empid}><td>{emp.empid}</td><td>{emp.ename}</td><td>{emp.sal}</td>
            <td><button type="button" class="btn btn-success" onClick={setStatusToApprove}>Approve</button>
            </td>
            <td><button type="button" class="btn btn-danger" onClick={setStatusToHold}>Hold</button></td>
            </tr>
        })
    }
    return(
        <div>
            <div>
            <h3>Select Status</h3>
    <div>
      <button type="button" class="btn btn-primary" onClick={setflag(true)}>All List</button>
      {/* in the earlier line where I wrote onClick is right or wrong */}
    </div>
    <br/>
    <div>
      <button type="button" class="btn btn-success" onClick={setflagApprove(true)}>Approve</button>
    </div>
    <br/>
    <div>
      <button type="button" class="btn btn-danger" onClick={setflagHold(true)}>Hold</button>
    </div>
            </div>
            <div>
            if(flagAll || flagApprove || flagHold){
            <table>
                <tr>
                <th>
                    Employee ID
                </th>
                <th>
                    Employee Name
                </th>
                <th>
                    Employee Salary
                </th>
                </tr>
                {renderList()}
            </table>
}
</div>
        </div>
    )
}
export default EmployeeList