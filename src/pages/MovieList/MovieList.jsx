import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import MovieDetailHeading from "../../components/MovieListHeading/MovieListHeading";
import './MovieList.css'

export default function MovieList() {
    const [movieList, setMovieList] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    const { type } = useParams();
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${type || 'popular'}?language=en-US&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWEwMzUwMjFjYWZmNDUwZTZmMTBiZjgxMDM0OWY3MCIsInN1YiI6IjY0ZWQ3NTBmMWZlYWMxMDExYjJmM2Y0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cA26OYeNmvFGxERQypAo5RiIBKsr1NGph8QCsHdLrFo'
            }
        };
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                // console.log(data.results)
                setMovieList(data.results)
                // setIsLoading(false)
            })
            .catch(err => console.error('error:' + err));
    }, [type])


    const sortByDate = () => {
        if(movieList.length === 0)  return; 
        setMovieList(prevList => {
            let sortedList = [...movieList];
            const finalList = sortedList.sort((b,a) =>  new Date(a['release_date']) -new Date(b['release_date']))
            return finalList
        })
    }

    const sortByPopularity = () => {
        if(movieList.length === 0)  return; 
        setMovieList(prevList => {
            let sortedList = [...movieList];
            const finalList = sortedList.sort((b,a) => a['popularity'] -b['popularity'])
            return finalList
        })
    }

    const sortByRating = () => {
        if(movieList.length === 0)  return; 
        setMovieList(prevList => {
            let sortedList = [...movieList];
            const finalList = sortedList.sort((b, a) => a['vote_average'] -b['vote_average'])
            return finalList
        })
    }

    return (
        <div className="list-container" >
            <MovieDetailHeading type={type} sortByDate={sortByDate} sortByRating={sortByRating} sortByPopularity={sortByPopularity}/>
            <div className="movie-list">
                {
                    movieList.map(movie => {
                        return (
                            <Card movie={movie} key={movie.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}