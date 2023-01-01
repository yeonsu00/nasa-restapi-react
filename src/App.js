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
  const [dataArray, setDataArray] = useState(["ss"]); //받아온 api 데이터 저장

  const getData = async () => {
    try {
      //응답 성공
      const response = await axios.get('https://images-api.nasa.gov/search?q=seoul');
      console.log(response);
      console.log(response.data.collection.items);
      // setDataArray([...dataArray, ...response.data.collection.items]);  //배열 합치기

      const test = [...dataArray, ...response.data.collection.items];
      console.log(test);

      setDataArray(["ssssss"]);
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
      <HashRouter>
        <Search />
        <List dataArray={dataArray} />
      </HashRouter>
    </div>
  );
}

export default App;
