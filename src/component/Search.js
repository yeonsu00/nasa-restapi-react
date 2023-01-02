import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import { useState } from 'react';

export default (props) => {

    const onChange = (e) => {
        props.setSearch(e.target.value)
    }

    return (
        <div className="App">
            <div className="input-group m-3">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">선택</button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
                <input type="text" className="form-control" aria-label="Text input with dropdown button" value={props.search} onChange={onChange} />
                {/* <button className="btn btn-outline-secondary" type="button">검색</button> */}
            </div>
        </div>
    );
}

