import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import Search from './component/Search';
import List from './component/List';
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
  
  const getData = async () => {
    try {
      //응답 성공
      const response = await axios.get('https://images-api.nasa.gov/search?q=seoul');
      console.log(response);
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
        <List />
      </HashRouter>
    </div>
  );
}

export default App;
