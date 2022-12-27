import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import Search from './component/Search';
import List from './component/List';
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [nasaId, setNasaId] = useState([]);
  const [dataArray, setDataArray] = useState([]);

  const getData = async () => {
    try {
      //응답 성공
      const response = await axios.get('https://images-api.nasa.gov/search?q=seoul');
      console.log(response);
      console.log(response.data.collection.items);
      setDataArray([...dataArray, ...response.data.collection.items]);
      console.log(dataArray);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="App">
      {/* <p>{dataArray}</p> */}
      <HashRouter>
        <Search />
        <List />
      </HashRouter>
    </div>
  );
}

export default App;
