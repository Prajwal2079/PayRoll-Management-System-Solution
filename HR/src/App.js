import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './component/Header';
import Name from './component/Name';
import EmployeeList from './component/EmployeeList';
import applyvideo from './pexels-nikita-ryumshin-7874813.mp4';
import LeftFrame from './component/LeftFrame';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
{/* <video src={applyvideo} autoPlay muted loop>
</video> */}
<Header></Header>
<Name></Name>
{/* <iframe src="./LeftFrame" id="leftframe"></iframe> */}
<iframe id="myframe" src="./Left.html" width="20%" height="200px" margin-left="50px"></iframe>

{/* <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
<div class="sidebar-sticky pt-3">
<ul class="nav flex-column">
          <li class="nav-item">
              Dashboard 
          </li>
          <li class="nav-item">
              Orders
          </li>
          <li class="nav-item">
              Products
          </li>
          <li class="nav-item">
              Customers
          </li>
          <li class="nav-item">
              Reports
          </li>
          <li class="nav-item">
              Integrations
          </li>
        </ul>
        </div>
        </nav> */}
        <Router>
          <Switch>
            <Route path="/employee" exact component={EmployeeList}>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}
export default App;