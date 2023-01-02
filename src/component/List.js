import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import { useEffect } from 'react';

export default (props) => {

  return (
    <div>
      <ul>
        {props.dataArray.map(data => (
          <div>
            <img src={data.links[0].href}></img>
            <p>center : {data.data[0].center}</p>
            <p>date_created : {data.data[0].date_created}</p>
            <p>description : {data.data[0].description}</p>
            <p>nasa_id : {data.data[0].nasa_id}</p>
            <p>title : {data.data[0].title}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
