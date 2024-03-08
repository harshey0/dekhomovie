import { useState } from "react"
import { Link } from "react-router-dom";
import './NavSearch.css'


export default function NavSearch() {
    const [suggestionArray, setSuggestionArray] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const clearInput = () => {
        setSuggestionArray([])
        setSearchInput('')
    }

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        let movieData;
        const keyWord = searchInput;
        if(searchInput === '') return;
        const getMovieData = async () => {
            const url = `https://api.themoviedb.org/3/search/movie?query=${keyWord}&language=en-US&page=1`;
            // console.log(url);
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWEwMzUwMjFjYWZmNDUwZTZmMTBiZjgxMDM0OWY3MCIsInN1YiI6IjY0ZWQ3NTBmMWZlYWMxMDExYjJmM2Y0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cA26OYeNmvFGxERQypAo5RiIBKsr1NGph8QCsHdLrFo'
                }
            };
            try{
                const res = await fetch(url, options)
                const json = await res.json();
                movieData = json.results;
                setSuggestionArray(prevState => {
                    let newState = [...prevState]
                    for(let i = 0; i < 3; i++)
                    {  
                        newState.push(movieData[i])
                    }
                    return newState
                })
            }

            catch(err){
                console.error('error:' + err);
            }
        }
        getMovieData();

    }
    return (
        <div className="search" style={{ position: 'relative' }}>
            <form action="" onSubmit={handleSearch}>
                <input placeholder='Search Movies..' value={searchInput} type="text" className='search-input' onChange={handleChange}/>
                {searchInput.length > 0 && <button id='search-button' type="button" onClick={clearInput}>
                    x
                </button>
                }
            </form>
            {suggestionArray.length > 0 && (
                <ul className="suggestions">
                    {suggestionArray.map(movie => {
                        const id = movie.id;
                        return (
                            <li key={id}>
                                <Link to={`/movie/${id}`} style={{textDecoration: 'none', color:'white'}}>
                                    {movie.title}
                                </Link>
                            </li>
                        )
                    })}
            </ul>
            )}
        </div>
    )
}