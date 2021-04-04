import React,{useState,useEffect} from 'react'
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";
import axios from './../../utils/Api/axios';
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/";
const  Row=({title,fetchUrl, isLargeRow})=> {
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const [trailerUrl,setTrailerUrl]=useState("")
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
           // console.log(request.data.results);
            setMovies(request.data.results)
            return request
        }
    fetchData();
     }, [fetchUrl]);
     //console.log(movies)
     const showTrailerHandler = (moviename) => {
        console.log(moviename);
        if (trailerUrl !== "") setTrailerUrl("");
        else {
          movieTrailer(moviename)
            .then((url) => {
              const urlParamV = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParamV.get("v"));
            })
            .catch((error) => console.log(error));
        }
      };

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map( movie=>(
                        <img
                        key={movie.id}
                        onClick={() =>
                            showTrailerHandler(movie.name || movie.title || movie.orginal_name)
                          }
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}  alt={movie.name}/>
                    )
                    )
                }

            </div>
            {trailerUrl !== "" && <YouTube videoId={trailerUrl} opts={opts} />}
            
        </div>
    )
}
export default Row;
