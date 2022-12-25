import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <input type="text" value={search} onChange={onChange} placeholder="영화 제목을 입력해 주세요" />
        </div>
        // <div class="input-group mb-3">
        //     <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
        //     <ul class="dropdown-menu">
        //         <li><a class="dropdown-item" href="#">Action</a></li>
        //         <li><a class="dropdown-item" href="#">Another action</a></li>
        //         <li><a class="dropdown-item" href="#">Something else here</a></li>
        //         <li><hr class="dropdown-divider"></li>
        //         <li><a class="dropdown-item" href="#">Separated link</a></li>
        //     </ul>
        //     <input type="text" class="form-control" aria-label="Text input with dropdown button" value={search} onChange={onChange}>
        // </div>
    );
}

export default Search;
