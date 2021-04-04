import React from "react";
import "./App.css";
import requests from "./utils/Api/request";
import Row from './components/Rows/Row';
import Navbar from './components/Navbar/index';
import Banner from './components/Banner/Banner';



function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      
      <Row
        isLargeRow
        title="Moviegram Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {/*footer*/}
      

      
    </div>
  );
}

export default App;