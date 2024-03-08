import './Card.css'
import { Link } from 'react-router-dom'
export default function Card({ movie }) {

    return (
        <Link to={`/movie/${movie.id}`}>
            <div>
                <div className="card" >
                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} className='card-image' />
                    <div className="movie-info">
                        <div className='movie-title'>{movie.title.slice(0, 25)}{movie.title.length > 25 ? '...' : ''}</div>
                        <div className="movie-date">{movie.release_date}</div>
                        <span className="movie-rating">{(movie?.vote_average / 2).toFixed(1)}<i className="fas fa-star" /></span>
                        <div className='movie-overview'>{movie.overview.slice(0, 120)}{movie.overview.length > 120 ? '...' : ''}</div>
                    </div>
                </div>
            </div>
        </Link>

    )
}
