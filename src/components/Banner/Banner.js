import React,{useState ,useEffect} from 'react'
import axios from './../../utils/Api/axios'
import requests from './../../utils/Api/request';
import './Banner.css'


const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie,setMovie]=useState([])  //every random movie in banner
    
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            /*console.log(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
              ])*/
              setMovie(
                  request.data.results[
                Math.floor(Math.random() * request.data.results.length)
              ])
        }
        fetchData();
        }, []);
        console.log(movie);
        function truncated(str,n){
            return str?.length > n ? str.substr(0,n-1) +"..." : str;
        }
       
    
    return (
        <header 
        className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url('${base_url}${movie?.backdrop_path}')`, //optional chaining: no need to check if movie is undefined '?' saw this neat trick on stackoverflow
            backgroundPosition: "center center",
          }}> 
            <div className="banner__contents">
                {/*title of banner*/}
                <h1>{movie?.name || movie?.title || movie?.orginal_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button" >Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <p className="banner__description">{truncated(movie?.overview ,150)}</p>
            </div>  
            <div className="banner--fadeBottom" /> 
        </header>
    )
}

export default Banner
