import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import { useEffect } from 'react';

export default (props) => {

  return (
    <div>
      리스트
      <ul>
        {props.dataArray.map(data => (
          <img src={data.links[0].href}></img>
        ))}
      </ul>
    </div>
  );
}
