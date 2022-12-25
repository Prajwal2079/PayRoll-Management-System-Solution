import LoginImg from "../images/LoginPageImg.jpeg"
import "./style/LoginPage.css"
import Header from "./Header"
import Footer from "./Footer"

const LoginPage = () => {

    return (
        <div>
            <Header></Header>
            <div className="LoginPageBody">
                <div className="LoginPageImgContainer">
                    <img src={LoginImg} alt="Login Page" className="LoginPageImg"></img>
                </div>
                <div className="LoginFormBody">
                    <form >
                        <div className="FormTitle">
                            LOGIN
                        </div>
                        <div className="InputBoxTitle">
                            <label htmlFor="loginid">Login Id</label>

                        </div>
                        <input type="text" id="loginid" className="InputBox" placeholder="Login Id"></input>
                        <div className="InputBoxTitle">
                            <label htmlFor="passwordid">Password</label>
                        </div>
                        <input type="password" id="passwordid" className="InputBox" placeholder="Password"></input>
                        <div className="forgotPass">
                            <button type="button" className="Forgotpassbutton">Forgot password?</button>
                        </div>
                        <div className="SignInButtonBody">
                            <button type="button" className="SignInButton">Sign In</button>
                        </div>
                    </form>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default LoginPage;