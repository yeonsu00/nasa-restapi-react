import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import { useEffect } from 'react';

export default (props) => {

  const filterTitle = props.dataArray.filter((data) => {
    return data.data[0].title.replace(" ", "").toLocaleLowerCase().includes(props.search.toLocaleLowerCase().replace(" ", ""))
  })

  return (
    <div>
      입력 : {props.search}
      {filterTitle.map(d => <div><span>{d.data[0].title}</span></div>)}
      <ul>
        {props.dataArray.map(data => (
          // <div key={data.data[0].nasa_id}>
          //   <img src={data.links[0].href}></img>
          //   <p>center : {data.data[0].center}</p>
          //   <p>date_created : {data.data[0].date_created}</p>
          //   <p>description : {data.data[0].description}</p>
          //   <p>nasa_id : {data.data[0].nasa_id}</p>
          //   <p>title : {data.data[0].title}</p>
          // </div>
          <div className="card m-3" style={{width: '18rem'}} key={data.data[0].nasa_id}>
          <img src={data.links[0].href} className="card-img-top" ></img>
            <div className="card-body">
              <h5 className="card-title">{data.data[0].title}</h5>
              <p className="card-text">{data.data[0].date_created}</p>
              <a href="#" className="btn btn-primary">자세히 보기</a>
            </div>
        </div>
        ))}
      </ul>
    </div>
  );
}
