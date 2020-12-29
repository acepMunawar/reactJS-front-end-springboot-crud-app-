import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            {/* 2). d. tambahkan fungsi "container bootstrap" */}
            <div className="container">
              {/* 4). a. route path membuat alamat pada url */}
              <Switch>
                  <Route path="/" exact component={ListEmployeeComponent}></Route>
                  <Route path="/employees" component={ListEmployeeComponent}></Route>
                  {/* 5).a. path add employee */}
                  <Route path ="/add-employee" component={CreateEmployeeComponent}></Route>
                  {/* 6). d.mengarahkan button ke page update */}
                  <Route path ="/update-employee/:id" component={UpdateEmployeeComponent}></Route>

                  <Route path ="/view-employee/:id" component={ViewEmployeeComponent}></Route>
                  {/* 2). e. tampilkan list component */}
                  {/* <ListEmployeeComponent/> */}
              </Switch>    
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
