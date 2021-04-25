
import { BrowserRouter,Route, Switch } from "react-router-dom";
import {Container} from 'react-bootstrap'

import Nav from './nav/nav'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <Nav/>

      </header>
    </div>
  );
}

export default App;
