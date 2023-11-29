import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import jijijaja from './components/jijijaja';
import Layout from './components/Layout';

function App() {

  // const [movies, setMovies] = useState();
  // const [movie, setMovie] = useState();
  // const [reviews, setReviews] = useState([]);



  useEffect(() => {

  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<jijijaja />} />
            <Route path="*" element = {<NotFound/>}></Route>
          </Route>
      </Routes>

    </div>
  );
}

export default App;