import { PersonCircle , KeyFill} from 'react-bootstrap-icons'
import './Login.css'

const Login = () => {

    return (
        <div className="loginbody">
           {/* console.log("heloo world") */}
        <h1 className="header">Payroll Management System</h1>
        <br/><br/>
            <div className="outerdiv">
            <form action="" onSubmit="return authenticate()">
                <div className="form-floating mb-3">
                    <label htmlFor="empid"><h3><PersonCircle></PersonCircle>&nbsp;&nbsp;Employee ID</h3></label>
                    <input type="text" className="form-control" id="empid" placeholder="ABC001" required />

                </div>
                <div class="form-floating">
                    <label htmlFor="password"><h3><KeyFill></KeyFill>&nbsp;&nbsp;Password</h3></label>
                    <input type="password" className="form-control" id="password" placeholder="Password" required />

                </div>
                <div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
            </div>
        </div>
    )


}
export default Login
