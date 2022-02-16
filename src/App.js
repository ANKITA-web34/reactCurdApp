import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Table from './Components/table';
import AddUser from './Components/addUser/AddUser';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Table/>}/>
          <Route exact path='/add' element={<AddUser/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
