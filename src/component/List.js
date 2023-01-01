import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      리스트
      {/* <ul>
        {test.map(test => (
          <li key={test.href}></li>
        ))}
      </ul> */}
      {props.dataArray}
    </div>
  );
}
