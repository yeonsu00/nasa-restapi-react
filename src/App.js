import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import Search from './component/Search';
import List from './component/List';
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [dataArray, setDataArray] = useState([]); //받아온 api 데이터 저장

  const getData = async () => {
    try {
      //응답 성공
      setDataArray([]);
      const response = await axios.get('https://images-api.nasa.gov/search?q=seoul');
      console.log(response);
      console.log(response.data.collection.items);
      setDataArray(dataArray.concat(response.data.collection.items));
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
