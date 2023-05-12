import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { baseURL } from './constant';
import Nav from './components/Nav/Nav';
import Container from './components/Container/Container';
function App() {
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    (async function () {
      try {
      const res = await axios.get(`${baseURL}/`, {cancelToken: source.token})
      console.log(res.data);
      setUserId(res.data[0]._id);
      setUsername(res.data[0].username)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('aborted');
        } else {
          console.log(error)
        }
      }
    } ())
    return () => {
      source.cancel();
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        <Nav username={username}/>
        <Routes>
          <Route exact path="/" element={<Container/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
