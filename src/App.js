import React from 'react';
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Navbar from './Navbar';
import "./App.css";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row 
      title = "NETFLIX ORIGINALS" 
      fetchUrl = {requests.fetchNetflixOriginals}
      isLargeRow/>
      <Row title = "Trending Now" fetchUrl = {requests.fetchTrendingNow}/>
      <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title = "Documentaries" fetchUrl = {requests.fetchDocumantaries}/>
      

    </div>
  );
}

export default App;
