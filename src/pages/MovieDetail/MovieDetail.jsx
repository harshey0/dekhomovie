import { useState, useEffect } from 'react';
import './MovieDetail.css'
import { useParams } from 'react-router-dom'

export default function MovieDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState();
  useEffect(() => {

    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
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
        setDetails(data)
      })
      .catch(err => console.error('error:' + err));
  }, [id])
  return (
    <>
      <div className='movie'>
        <div className='movie-image'>
          <img className='backdrop-image' src={`https://image.tmdb.org/t/p/original${details?.backdrop_path}`} />
        </div>
        <div className="movie-details">
          <div className="details-left">
            <div className='movie-poster'>
              <img src={`https://image.tmdb.org/t/p/original${details?.poster_path}`} />
            </div>
          </div>
          <div className="details-right">
            <h1 className="detail-title">
              {details?.title}
            </h1>
            <div className="detail-tagline">
              {details?.tagline}
            </div>
            <div className="detail-rating">
              <div className="detail-rate">
                {((details?.vote_average + 1) / 2).toFixed(1)}<i className="fas fa-star" />
              </div>
              <div className="detail-num-votes">(
                {details?.vote_count} votes)
              </div>
            </div>
            <div className='detail-runtime'>
              {details?.runtime} mins
            </div>
            <div className="detail-date">
              Release Date: {details?.release_date}
            </div>
            <div className='detail-genres'>
              {details?.genres.map(el => {
                return (
                  <div className="genre" key={el.id}> {el.name} </div>
                )
              })}
            </div>
            <div className="detail-overview">
              <h3>Overview: </h3>
              <p>{details?.overview}</p>
            </div>
          </div>
        </div>
        <div className="detail-links">
          <div className="detail-heading">Useful Links</div>
          {
            details && details.homepage && <a href={details.homepage} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
          }
          {
            details && details.imdb_id && <a href={"https://www.imdb.com/title/" + details.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
          }
        </div>
        <div className="detail-heading">Production companies</div>
        <div className="detail-production">
          {
            details && details.production_companies && details.production_companies.map(company => (
              <div key={company.id}>
                {
                  company.logo_path
                  &&
                  <span className="productionCompanyImage">
                    <img className="movie__productionComapany" src={`https://image.tmdb.org/t/p/original${company.logo_path}`} />
                    <span>{company.name}</span>
                  </span>
                }
              </div>
            ))
          }
        </div>
      </div>

    </>
  )

}

/* 
{
  "adult": false,
  "backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
  "belongs_to_collection": null,
  "budget": 63000000,
  "genres": [
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 35,
      "name": "Comedy"
    }
  ],
  "homepage": "http://www.foxmovies.com/movies/fight-club",
  "id": 550,
  "imdb_id": "tt0137523",
  "original_language": "en",
  "original_title": "Fight Club",
  "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
  "popularity": 61.416,
  "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  "production_companies": [
    {
      "id": 508,
      "logo_path": "/7cxRWzi4LsVm4Utfpr1hfARNurT.png",
      "name": "Regency Enterprises",
      "origin_country": "US"
    },
    {
      "id": 711,
      "logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png",
      "name": "Fox 2000 Pictures",
      "origin_country": "US"
    },
    {
      "id": 20555,
      "logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
      "name": "Taurus Film",
      "origin_country": "DE"
    },
    {
      "id": 54051,
      "logo_path": null,
      "name": "Atman Entertainment",
      "origin_country": ""
    },
    {
      "id": 54052,
      "logo_path": null,
      "name": "Knickerbocker Films",
      "origin_country": "US"
    },
    {
      "id": 4700,
      "logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
      "name": "The Linson Company",
      "origin_country": "US"
    },
    {
      "id": 25,
      "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
      "name": "20th Century Fox",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "1999-10-15",
  "revenue": 100853753,
  "runtime": 139,
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "Mischief. Mayhem. Soap.",
  "title": "Fight Club",
  "video": false,
  "vote_average": 8.433,
  "vote_count": 26280
} */