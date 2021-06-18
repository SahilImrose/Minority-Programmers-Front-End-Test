import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Learn from './components/Learn';
import Incubator from './components/Incubator';
import Startup from './components/Startup';
import MyCourses from './components/MyCourses';
import Activity from './components/Activity';
import Class from './components/Class';
import data from './data.json';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route 
            path='/learn' 
            render={()=> <Learn courses={data.learn.courses}/>} 
          />
          <Route path='/' exact component={Home}/>
          <Route path='/Minority-Programmers-Front-End-Test' component={Home} />
          <Route 
            path='/incubator' 
            render={()=> <Incubator data={data.incubator}/>} 
          />
          <Route 
            path="/startup/:id" 
            render={(props) => <Startup {...props} data={data.incubator}/>}
          />
          <Route
            path="/mycourses/:id"
            render={(props) => <MyCourses {...props} data={data.learn}/>}
          />
          <Route
            path="/class/:id/:mod"
            render={(props) => <Class {...props} data={data.learn}/>}
          />
          <Route
            path="/activity/:id/:mod/:act"
            render={(props) => <Activity {...props} data={data.learn}/>}
          />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
